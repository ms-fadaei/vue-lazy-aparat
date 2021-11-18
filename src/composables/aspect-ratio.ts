import { ref, computed, watchEffect, Ref } from 'vue'

export default function useAspectRatio(aspectRatio: Ref<string>) {
  const width = ref(0)
  const height = ref(0)

  watchEffect(() => {
    const [w, h] = aspectRatio.value.split(':').map(Number)
    width.value = w
    height.value = h
  })

  const paddingTop = computed(() => {
    return `${(height.value / width.value) * 100}%`
  })

  return paddingTop
}
