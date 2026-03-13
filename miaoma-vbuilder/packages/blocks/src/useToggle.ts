/*
 *   Copyright (c) 2024 妙码学院 @Heyi
 *   All rights reserved.
 *   让进取的人更具职业价值
 */
import { ref } from 'vue-demi'

// interface UseToggle {}

// eslint error demo
// console.log('useToggle component loaded')

export const useToggle = () => {
    const value = ref(false)

    const toggle = () => {
        value.value = !value.value
    }

    return {
        value,
        toggle
    }
}
