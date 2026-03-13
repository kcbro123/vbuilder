/*
 *   Copyright (c) 2024 妙码学院 @Heyi
 *   All rights reserved.
 *   让进取的人更具职业价值
 */
export function arrayMove<T>(array: T[], from: number, to: number): T[] {
    const newArray = array.slice()
    newArray.splice(to < 0 ? newArray.length + to : to, 0, newArray.splice(from, 1)[0])

    return newArray
}
