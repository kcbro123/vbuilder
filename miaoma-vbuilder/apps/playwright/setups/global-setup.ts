/*
 *   Copyright (c) 2024 妙码学院 @Heyi
 *   All rights reserved.
 *   让进取的人更具职业价值
 */
import { chromium, type FullConfig } from '@playwright/test'

async function globalSetup(config: FullConfig) {
    const { baseURL, storageState } = config.projects[0].use
    // eslint-disable-next-line no-console
    console.log('🚀 ~ globalSetup ~ storageState:', baseURL, storageState)
    // eslint-disable-next-line no-console
    console.log('🚀 ~ globalSetup ~ baseURL:', baseURL)
    const browser = await chromium.launch()
    const page = await browser.newPage()

    if (!baseURL) {
        throw new Error('请在配置文件中设置 baseURL')
    }

    await page.goto(baseURL)
    // await page.getByRole('button', { name: '验证码登录/注册' }).click()
    // await page.getByPlaceholder('手机号').click()
    // await page.getByPlaceholder('手机号').fill('17777777777')
    // await page.getByPlaceholder('验证码').dblclick()
    // await page.getByPlaceholder('验证码').fill('123456')
    // await page.locator('label div').first().click()
    // await page.getByRole('button', { name: '登录/注册' }).click()

    await page.waitForTimeout(5000)
    await page.context().storageState({ path: storageState as string })
    await browser.close()
}

export default globalSetup
