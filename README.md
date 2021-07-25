# Vuejs Loading Screen 
Using to block whlie client processed work. Please checkout [Demo](https://helmab.github.io/vue-loading/) to see how does it look like.

![Screenshot](./src/assets/screenshot.png)

## Installation
```
npm i --save vuejs-loading-screen
```

## Usage
```js
import Vue from 'vue'
import loading from 'vuejs-loading-screen'

Vue.use(loading)
```

```vue
<template>
    <h1>Welcome to VueLoading Screen</h1>
</template>

<script>
  export default {
    methods: {
      sendHttpRequest () {
        this.$isLoading(true) // show loading screen
        this.$axios.post(url).then(({data}) => {
            this.$isLoading(false) // hide loading screen
            console.log(data)
        })
      }
    },
    mounted () {
      this.sendHttpRequest()
    }
  }
</script>
```

## Customization

If you want to modify such background, icon size, color, type, you just configure options such:

```js
Vue.use(loading, {
    bg: '#41b883ad',
    icon: 'refresh',
    size: 3,
    icon_color: 'white',
})
```

or you can style the loading by yourself (TailwindCss as example):

```js
Vue.use(loading, {
  bg: '#41b883ad',
  slot: `
    <div class="px-5 py-3 bg-gray-800 rounded">
      <h3 class="text-3xl text-white"><i class="fas fa-spinner fa-spin"></i> Loading...</h3>
    </div>
  `
})
```

## Configurations

| Option        | Value           | Description  |
| ------------- | -------------| -----|
| bg      | `default: '#41b883ad'` | : color string |
| icon      | `deault: 'fas fa-spinner'`      |   : support [font-awesome](https://www.npmjs.com/package/@fortawesome/fontawesome-free) |
| size | `default: '3'`      |    : {1, 2, 3, 4, 5} string |
| icon_color | `default: '#ffffff'`      |    : color string |
| slot | `default: font-awesome`      |    : raw html |
