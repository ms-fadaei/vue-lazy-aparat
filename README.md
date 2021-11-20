# Vue Lazy Aparat

> Work In Progress

## install

```bash
yarn add vue-lazy-aparat # npm i vue-lazy-aparat
```

## Usage

```js
import LazyAparat from 'vue-lazy-aparat'
```

```css
@import 'vue-lazy-aparat/dist/style.css';
```

## Props

```js
cover: {
  type: String,
  required: false,
  default: undefined,
},
coverFit: {
  type: String,
  required: false,
  default: 'cover',
},
videoHash: {
  type: String,
  required: true,
},
videoCaption: {
  type: String,
  required: false,
  default: '',
},
videoDuration: {
  type: String,
  required: false,
  default: '',
},
aspectRatio: {
  type: String,
  required: false,
  default: '16:9',
},
allowFullScreen: {
  type: Boolean,
  required: false,
  default: true,
},
mode: {
  type: String,
  required: false,
  default: 'cover',
},
```

## Run The Playground

1. Clone the repository
2. Install dependencies

```bash
yarn install # or npm install
```

3. Run `dev`

```bash
yarn dev # or npm run dev
```
