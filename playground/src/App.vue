<template>
  <div class="main">
    <LazyAparat
      class="aparat-box"
      cover="https://static.cdn.asset.aparat.com/avt/39605798-5735-b__7327.jpg"
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
import LazyAparat from '@/lazy-aparat.vue'

const hash = ref('ieCzu')
const ratio = ref('16:9')
const coverFit = ref('cover')
</script>

<style>
body {
  margin: 0;
  padding: 0;
  direction: rtl;
}

* {
  box-sizing: border-box;
}

#app {
  font-family: IRANSans, sans-serif;
}

.main {
  padding: 100px 0;
}

.aparat-box {
  max-width: 500px;
  margin: 0 auto;
}
</style>
