import type { ComponentPublicInstance, Ref, ComputedRef, Plugin } from 'vue'

// https://github.com/vuejs/vue-next/blob/6aeafef1a548fbe9ea970bb73178cba3608c0fa7/packages/runtime-core/src/componentPublicInstance.ts#L162
type LazyAparat = ComponentPublicInstance<
  {
    cover: {
      type: StringConstructor
      required: false
      default: undefined
    }
    coverFit: {
      type: StringConstructor
      required: false
      default: string
      validator: (value: string) => boolean
    }
    videoHash: {
      type: StringConstructor
      required: true
    }
    videoCaption: {
      type: StringConstructor
      required: false
      default: string
    }
    videoDuration: {
      type: StringConstructor
      required: false
      default: string
    }
    aspectRatio: {
      type: StringConstructor
      required: false
      default: string
      validator: (value: string) => boolean
    }
    allowFullScreen: {
      type: BooleanConstructor
      required: false
      default: boolean
    }
    mode: {
      type: StringConstructor
      required: false
      default: string
      validator: (value: string) => boolean
    }
  },
  {
    props: Readonly<{
      cover: string | undefined
      coverFit: string
      videoHash: string
      videoCaption: string
      videoDuration: string
      aspectRatio: string
      allowFullScreen: boolean
      mode: string
    }>
    aspectRatio: Ref<string>
    videoHash: Ref<string>
    mode: Ref<string>
    paddingTop: ComputedRef<string>
    coverVisibility: Ref<boolean>
    videoUrl: ComputedRef<string>
  }
>

type InstallableComponent = LazyAparat & { install: Exclude<Plugin['install'], undefined> }

declare const _default: InstallableComponent
export default _default
