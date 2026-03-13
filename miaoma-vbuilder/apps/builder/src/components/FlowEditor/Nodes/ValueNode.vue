<!--
    Copyright (c) 2024 妙码学院 @Heyi
    All rights reserved.
    让进取的人更具职业价值
-->
<script setup lang="ts">
import { Handle, Position, useVueFlow } from '@vue-flow/core'
import { computed } from 'vue'

const props = defineProps(['id', 'data'])

const { updateNodeData } = useVueFlow()

const value = computed({
    get: () => props.data.value,
    set: (value) => updateNodeData(props.id, { value })
})
</script>

<template>
    <input :id="`${id}-input`" v-model="value" type="number" class="nodrag" />

    <Handle type="source" :position="Position.Right" :connectable="false" />
</template>
