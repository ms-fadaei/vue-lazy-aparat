<template>
  <div class="main">
    <div class="switch-box">
      <div class="switch-box-row">
        <input id="normal" v-model="componentSwitch" type="radio" name="frame-choose" value="normal" />
        <label for="normal">آی‌فریم معمولی</label>
      </div>
      <div class="switch-box-row">
        <input id="component" v-model="componentSwitch" type="radio" name="frame-choose" value="component" />
        <label for="component">کامپوننت توسعه داده شده</label>
      </div>
    </div>
    <NormalFrame v-if="componentSwitch === 'normal'" class="aparat-box" :video-hash="hash" />
    <LazyAparat
      v-else
      class="aparat-box"
      cover="./cover.jpg"
      :video-hash="hash"
      :aspect-ratio="ratio"
      :cover-fit="coverFit"
      video-caption="آیا اپل نگران محیط زیست است؟ دلایل حذف شارژر از جعبه آیفون"
      video-duration="11:11"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NormalFrame from '~/components/NormalFrame.vue'
import LazyAparat from '@/lazy-aparat.vue'

const hash = ref('ieCzu')
const ratio = ref('16:9')
const coverFit = ref('cover')
const componentSwitch = ref('component')
</script>

<style>
:root {
  direction: rtl;
}

body {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

#app {
  font-family: IRANSans, system-ui, sans-serif;
}

.main {
  padding: 100px 0;
}

.aparat-box {
  max-width: 500px;
  margin: 0 auto;
}

.switch-box {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  margin-bottom: 30px;
}

.switch-box-row {
  margin-bottom: 10px;
}
</style>
