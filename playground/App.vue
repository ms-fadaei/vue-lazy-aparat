<template>
  <div class="main">
    <div class="switch-box video-box">
      <div class="switch-box-row">
        <input id="normal" v-model="mode" type="radio" name="frame-choose" value="default" />
        <label for="normal">مود: پیشفرض</label>
      </div>
      <div class="switch-box-row">
        <input id="component" v-model="mode" type="radio" name="frame-choose" value="cover" />
        <label for="component">مود: نمایش کاور</label>
      </div>
    </div>
    <LazyAparat
      class="video-box"
      :cover="cover"
      :video-hash="videoHash"
      :aspect-ratio="aspectRatio"
      :cover-fit="coverFit"
      :video-caption="videoCaption"
      :video-duration="videoDuration"
      :allow-full-screen="allowFullScreen"
      :mode="mode"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LazyAparat from '@/lazy-aparat.vue'

const cover = ref('./cover.jpg')
const coverFit = ref('cover')
const videoHash = ref('ieCzu')
const videoCaption = ref('آیا اپل نگران محیط زیست است؟ دلایل حذف شارژر از جعبه آیفون')
const videoDuration = ref('11:11')
const aspectRatio = ref('16:9')
const allowFullScreen = ref(true)
const mode = ref('cover')
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

.video-box {
  max-width: 500px;
  margin: 0 auto;
}

.switch-box {
  margin-bottom: 30px;
}

.switch-box-row {
  margin-bottom: 10px;
}
</style>
