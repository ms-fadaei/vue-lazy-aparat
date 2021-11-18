import { computed, Ref } from 'vue'

export default function useVideoFrame(videoHash: Ref<string>, mode: Ref<string>) {
  const URL = 'https://www.aparat.com/video/video/embed/videohash/#{hash}/vt/frame?autoplay=#{autoPlay}'

  const AparatFrameUrl = computed(() => {
    const autoPlay = mode.value === 'cover'

    let url = URL
    url = url.replace('#{hash}', videoHash.value)
    url = url.replace('#{autoPlay}', String(autoPlay))

    return url
  })

  return AparatFrameUrl
}
