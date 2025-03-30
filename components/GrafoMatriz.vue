<script setup lang="ts">
import { grafoMatriz } from '~/constans/grafos'
</script>

<template>
  <div class="overflow-x-auto p-4">
    <table class="border-collapse border border-gray-500">
      <tbody>
        <tr
          v-for="(linha, i) in grafoMatriz"
          :key="i"
        >
          <td
            v-for="(valor, j) in linha"
            :key="j"
            class="border border-gray-500 px-4 py-2 text-center dark:text-white"
            :class="
              valor === 1
                ? 'bg-blue-300 dark:bg-blue-400'
                : 'bg-white dark:bg-slate-900'
            "
          >
            {{ valor }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

