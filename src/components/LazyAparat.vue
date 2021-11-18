<template>
  <div class="lazy-aparat">
    <div class="lazy-aparat__container" :style="`padding-top: ${paddingTop}`">
      <template v-if="coverShowing">
        <img class="lazy-aparat__cover" :src="cover" :alt="videoCaption" />
        <div class="lazy-aparat__layout" @click="coverShowing = false">
          <div class="lazy-aparat__layout-inner">
            <span class="lazy-aparat__layout-play">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25" height="25">
                <path
                  d="M7.09 20a1.28 1.28 0 01-.65-.14C5.12 19.08 5 13.58 5 11.92c0-2.09.14-7 1.43-7.76 1.3-.76 5.62 1.58 7.42 2.62C15.3 7.61 20 10.43 20 12s-4.24 4.12-6.07 5.17C12.34 18.08 8.82 20 7.09 20z"
                  fill="currentcolor"
                ></path>
              </svg>
            </span>
            <strong v-if="videoCaption" class="lazy-aparat__layout-title">{{ videoCaption }}</strong>
            <span v-if="videoDuration" class="lazy-aparat__layout-duration">{{ videoDuration }}</span>
          </div>
        </div>
      </template>
      <iframe
        v-else
        class="lazy-aparat__frame"
        :src="videoUrl"
        :allowFullScreen="allowFullScreen || undefined"
        :webkitallowfullscreen="allowFullScreen || undefined"
        :mozallowfullscreen="allowFullScreen || undefined"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { toRefs, ref } from 'vue'
import { aspectRatioToPaddingTop, createAparatFrameUrl } from '@/composables'

const props = defineProps({
  cover: {
    type: String,
    required: true,
  },
  coverFit: {
    type: String,
    default: 'cover',
    required: false,
    validator: (value: string) => ['cover', 'contain'].includes(value),
  },
  videoHash: {
    type: String,
    required: true,
  },
  videoCaption: {
    type: String,
    required: false,
    default: '',
  },
  videoDuration: {
    type: String,
    required: false,
    default: '',
  },
  aspectRatio: {
    type: String,
    required: false,
    default: '16:9',
    validator: (value: string) => {
      const [x, y] = value.split(':')
      return !Number.isNaN(Number(x)) && !Number.isNaN(Number(y))
    },
  },
  allowFullScreen: {
    type: Boolean,
    required: false,
    default: true,
  },
  mode: {
    type: String,
    required: false,
    default: 'cover',
    validator: (value: string) => ['strict', 'cover', 'lazy', 'normal'].includes(value),
  },
})

const { aspectRatio, videoHash, mode } = toRefs(props)

const paddingTop = aspectRatioToPaddingTop(aspectRatio)
const needCover = ['strict', 'cover'].includes(mode.value)
const coverShowing = ref(needCover)
const videoUrl = createAparatFrameUrl(videoHash, needCover)

defineExpose({
  paddingTop,
  coverShowing,
  videoUrl,
})
</script>

<style scoped>
.lazy-aparat {
  position: relative;
  overflow: hidden;
  background-color: #212229;
}
.lazy-aparat__cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: v-bind(coverFit);
}

.lazy-aparat__layout::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(41, 42, 51, 0.8);
}

.lazy-aparat__layout-inner {
  direction: ltr;
  color: #fff;
  max-width: 800px;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1em;
  text-align: center;
  z-index: 1;
  font-size: 0.52rem;
}

.lazy-aparat__layout-play {
  color: #fff;
  text-align: center;
  vertical-align: baseline;
  position: relative;
  display: inline-block;
  width: 6em;
  height: 6em;
  border-radius: 50%;
  cursor: pointer;
  background: #ed145b;
}

.lazy-aparat__layout-play svg {
  direction: ltr;
  color: #fff;
  word-break: normal;
  text-align: center;
  top: 50%;
  bottom: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  width: 2.5em;
  height: 2.5em;
}

.lazy-aparat__layout-title {
  direction: rtl;
  text-align: center;
  max-height: 3.2em;
  font-size: 1.8em;
  color: #fff;
  overflow: hidden;
  height: 2em;
  line-height: 2em;
  margin: 0;
  cursor: default;
  display: block;
}

.lazy-aparat__layout-duration {
  word-break: normal;
  text-align: center;
  display: inline-block;
  font-size: 1em;
  color: #fff;
  border-radius: 3px;
  padding: 0.3em 0.5em;
  margin-top: 1em;
  background-color: rgba(111, 114, 133, 0.9);
  cursor: default;
}

.lazy-aparat__frame {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}
</style>
