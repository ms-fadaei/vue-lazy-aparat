import { computed, Ref } from 'vue'

export default function createAparatFrameUrl(videoHash: Ref<string>, autoPlay: boolean) {
  const URL = 'https://www.aparat.com/video/video/embed/videohash/#{hash}/vt/frame?autoplay=#{autoPlay}'

  const AparatFrameUrl = computed(() => {
    let url = URL
    url = url.replace('#{hash}', videoHash.value)
    url = url.replace('#{autoPlay}', String(autoPlay))

    return url
  })

  return AparatFrameUrl
}
