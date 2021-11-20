<template>
  <div class="lazy-aparat">
    <div class="lazy-aparat__container" :style="`padding-top: ${paddingTop}`">
      <template v-if="coverVisibility">
        <img class="lazy-aparat__cover" :src="cover" :alt="videoCaption" />
        <div class="lazy-aparat__layout" @click="coverVisibility = false">
          <div class="lazy-aparat__layout-inner">
            <span class="lazy-aparat__layout-play">
              <img src="./assets/play.svg" alt="پخش ویدئو" />
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
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        :allowFullScreen="allowFullScreen || undefined"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue'
import { useAspectRation, useVideoFrame, useCover } from '@/composables'

const props = defineProps({
  cover: {
    type: String,
    required: false,
    default: undefined,
  },
  coverFit: {
    type: String,
    required: false,
    default: 'cover',
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
    validator: (value: string) => ['cover', 'default'].includes(value),
  },
})

const { aspectRatio, videoHash, mode } = toRefs(props)

const paddingTop = useAspectRation(aspectRatio)
const coverVisibility = useCover(mode)
const videoUrl = useVideoFrame(videoHash, mode)

defineExpose({
  paddingTop,
  coverVisibility,
  videoUrl,
})
</script>

<style scoped>
.lazy-aparat {
  direction: rtl;
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
  background-color: rgb(41 42 51 / 80%);
}

.lazy-aparat__layout-inner {
  max-width: 800px;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1em;
  text-align: center;
  z-index: 1;
  font-size: 0.55rem;
}

.lazy-aparat__layout-play {
  position: relative;
  display: inline-block;
  width: 6em;
  height: 6em;
  border-radius: 50%;
  cursor: pointer;
  background: #ed145b;
}

.lazy-aparat__layout-play img {
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  width: 2.5em;
  height: 2.5em;
}

.lazy-aparat__layout-title {
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
  background-color: rgb(111 114 133 / 90%);
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
