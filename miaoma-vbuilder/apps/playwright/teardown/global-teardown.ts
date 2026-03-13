/*
 *   Copyright (c) 2024 妙码学院 @Heyi
 *   All rights reserved.
 *   让进取的人更具职业价值
 */
import { chromium, type FullConfig } from '@playwright/test'

async function globalTeardown(config: FullConfig) {
    const { baseURL, storageState } = config.projects[0].use
    const browser = await chromium.launch()
    const page = await browser.newPage()

    if (!baseURL) {
        throw new Error('请在配置文件中设置 baseURL')
    }

    await page.goto(baseURL)

    await page.context().clearCookies()
    await page.context().storageState({ path: storageState as string })
    await browser.close()
}

export default globalTeardown
