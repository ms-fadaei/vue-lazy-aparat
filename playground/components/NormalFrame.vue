<template>
  <div>
    <iframe
      class="frame"
      :src="videoUrl"
      :allowFullScreen="allowFullScreen || undefined"
      :webkitallowfullscreen="allowFullScreen || undefined"
      :mozallowfullscreen="allowFullScreen || undefined"
    />
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import { createAparatFrameUrl } from '@/composables'

const props = defineProps({
  videoHash: {
    type: String,
    required: true,
  },
  allowFullScreen: {
    type: Boolean,
    required: false,
    default: true,
  },
})

const { videoHash } = toRefs(props)
const videoUrl = createAparatFrameUrl(videoHash, false)

defineExpose({
  videoUrl,
})
</script>

<style>
.frame {
  display: block;
  border: none;
  width: 100%;
  height: auto;
  aspect-ratio: 16/9;
}
</style>
