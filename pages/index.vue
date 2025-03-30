<script setup lang="ts">
import GrafoMatriz from '~/components/GrafoMatriz.vue'

const { exibirMatriz, grauMaximo, showInScreen } = useGrafoMatriz()
const { grafo, instanciarGrafo } = useGrafoLista()

const { isDarkTheme, toggleDarkMode } = useDarkTheme()
</script>

<template>
  <div>
    <!-- botoes -->
    <div class="gap-2 flex px-3 w-full">
      <Button
        @click="exibirMatriz"
        label="Exibir matriz"
      />

      <Button
        @click="grauMaximo"
        label="Console grau maximo"
      />

      <Button
        @click="instanciarGrafo"
        label="Instanciar grafo por lista"
      />
      <Button
        @click="grafo.mostraLista"
        label="Exibir lista"
      />
      <Button
        @click="grafo.grauMaximoVertice"
        label="Grau maximo lista"
      />
    </div>
    <div class="card flex justify-center dark:bg-green-400">
      <Button
        @click="toggleDarkMode"
        :label="isDarkTheme ? 'Tema claro' : 'Tema escuro'"
      />
    </div>

    <div
      v-show="showInScreen.maiorGrau"
      class="w-full flex flex-col justify-center items-center"
    >
      {{ showInScreen.maiorGrau }}
    </div>

    <div
      v-show="showInScreen.matriz"
      class="w-full flex flex-col justify-center items-center"
    >
      <div>Matriz do grafo registrado</div>

      <GrafoMatriz />
      <Button
        @click="() => (showInScreen.matriz = false)"
        label="Ocultar matriz"
        :v-if="showInScreen.matriz"
      />
    </div>

    <GrafoLista />
  </div>
</template>

