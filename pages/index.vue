<script setup lang="ts">
const matriz = useGrafoMatriz()
const lista = useGrafoLista()

const { isDarkTheme, toggleDarkMode } = useDarkTheme()
</script>

<template>
  <div>
    <!-- botoes -->
    <div class="gap-2 flex px-3 w-full">
      <Button
        @click="matriz.exibirMatriz"
        label="Console matriz"
      />
      <Button
        @click="matriz.grauMaximo"
        label="Console grau maximo"
      />
      <Button
        @click="lista.instanciarGrafo"
        label="Instanciar grafo por lista"
      />
      <Button
        @click="lista.grafo.mostraLista"
        label="Exibir lista"
      />
      <Button
        @click="lista.grafo.grauMaximoVertice"
        label="Grau maximo lista"
      />
    </div>
    <div class="card flex justify-center dark:bg-green-400">
      <Button
        @click="toggleDarkMode"
        :label="isDarkTheme ? 'Tema claro' : 'Tema escuro'"
      />
    </div>
  </div>
</template>

