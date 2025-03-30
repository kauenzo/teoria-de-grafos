<script setup lang="ts">
import { grafoMatriz } from '~/constans/grafos'
const { showMaiorGrauLista } = useGrafoLista()
</script>

<template>
  <div class="p-4 space-y-2">
    <!-- TODO: nao ta funcionando -->
    <div class="border">{{ showMaiorGrauLista }}</div>
    <div
      v-for="(linha, i) in grafoMatriz"
      :key="i"
      class="border p-2 rounded bg-gray-100"
    >
      <span class="font-bold">Linha {{ i }}:</span>
      <ul class="flex gap-2 mt-1">
        <li
          v-for="(valor, j) in linha"
          :key="j"
          class="px-3 py-1 rounded text-white"
          :class="valor === 1 ? 'bg-blue-500' : 'bg-gray-300'"
        >
          {{ valor }}
        </li>
      </ul>
    </div>
  </div>
</template>

