<!--
    Copyright (c) 2024 妙码学院 @Heyi
    All rights reserved.
    让进取的人更具职业价值
-->
<script setup lang="ts">
import { RouterView } from 'vue-router'

import DataSourceLeftPanel from '@/components/DataSourceLeftPanel/DataSourceLeftPanel.vue'
</script>

<template>
    <div class="ds-wrapper">
        <DataSourceLeftPanel />
        <RouterView />
    </div>
</template>

<style scoped>
.ds-wrapper {
    display: flex;
    height: 100%;
}
</style>
