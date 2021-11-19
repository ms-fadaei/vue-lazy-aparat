import { App, Plugin } from 'vue'
import component from '@/lazy-aparat.vue'

// Define typescript interfaces for installable component
type InstallableComponent = typeof component & { install: Exclude<Plugin['install'], undefined> }

export default ((): InstallableComponent => {
  // Assign InstallableComponent type
  const installable = component as unknown as InstallableComponent

  // Attach install function executed by Vue.use()
  installable.install = (app: App) => {
    app.component('LazyAparat', installable)
  }
  return installable
})()
