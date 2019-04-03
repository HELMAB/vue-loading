# Vue Loading Screen
Using to block whlie client processed work.

## Screenshot
<img src="https://github.com/HELMAB/vue-loading/blob/master/assets/screenshot.png" 
alt="Screenshot" 
width="890" 
height="auto">

## Installation
```js
npm i --save vue-loading-screen
```

## Usage
```js
import Vue from 'vue'
import {loading} from 'vue-loading-screen'

Vue.use(loading)
```

```vue
<template>
    <h1>Welcome to Vue Loading Screen</h1>
</template>

<script>
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
</script>
```
