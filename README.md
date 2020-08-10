# Vuejs Loading Screen
Using to block whlie client processed work. [For Demo](https://helmab.github.io/vue-loading/)

## Screenshot
<img src="https://raw.githubusercontent.com/HELMAB/vue-loading/master/assets/screenshot.png" 
alt="Screenshot" 
width="890" 
height="auto">

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
            fetchData () {
                this.$isLoading(true) // show loading screen
                this.$axios.post(url).then((response) => {
                        this.$isLoading(false) // hide loading screen
                        console.log(response)
                    })
            }
        },
        mounted () {
            this.fetchData()
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

## Configurations

| Option        | Value           | Description  |
| ------------- | -------------| -----|
| bg      | `default: '#41b883ad'` | : color string |
| icon      | `deault: 'spinner'`      |   : support font-awesome |
| size | `default: '3'`      |    : {1, 2, 3, 4, 5} string |
| icon_color | `default: '#ffffff'`      |    : color string |
| slot | `default: font-awesome`      |    : raw html |
