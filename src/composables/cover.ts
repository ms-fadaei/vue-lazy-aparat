import { ref, watchEffect, Ref } from 'vue'

export default function useCover(mode: Ref<string>) {
  const coverVisibility = ref(true)

  watchEffect(() => (coverVisibility.value = mode.value === 'cover'))

  return coverVisibility
}
