<!--
    Copyright (c) 2024 妙码学院 @Heyi
    All rights reserved.
    让进取的人更具职业价值
-->
<script setup lang="ts">
import AppEditorRenderer from '@/components/AppEditorRenderer/AppEditorRenderer.vue'
import AppLeftPanel from '@/components/AppLeftPanel/AppLeftPanel.vue'
import AppRightPanel from '@/components/AppRightPanel/AppRightPanel.vue'
</script>

<template>
    <div class="layout-wrapper">
        <AppLeftPanel />
        <AppEditorRenderer />
        <AppRightPanel />
    </div>
</template>

<style scoped>
.layout-wrapper {
    display: flex;
    height: 100%;
}
</style>
