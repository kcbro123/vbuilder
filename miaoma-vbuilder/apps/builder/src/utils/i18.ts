import type { App } from 'vue'

export default {
    install(app: App, options: any) {
        // 注入一个全局可用的 $translate() 方法
        app.config.globalProperties.$translate = (key: string) => {
            return key.split('.').reduce((o, i) => o[i], options)
        }
    }
}

declare module 'vue' {
    interface ComponentCustomProperties {
        $translate: (key: string) => string
    }
}

interface Point {
    x: number
    y: number
}
const point = {
    x: 1,
    y: 2
}
const logPoint = (p: Point) => {
    console.log(`(${p.x}, ${p.y})`)
}
const obj = {
    a: 1,
    b: 3
}

logPoint(point)
logPoint(obj)
