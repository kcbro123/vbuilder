/*
 *   Copyright (c) 2024 妙码学院 @Heyi
 *   All rights reserved.
 *   让进取的人更具职业价值
 */
import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import { initBlocks } from './blocks'
import router from './router'

import i18 from './utils/i18'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(initBlocks())
app.use(i18, {
    greetings: {
        hello: '你好！'
    }
})

app.mount('#app')
