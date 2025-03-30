import { grafoLista } from '~/constans/grafos'

export const useGrafoLista = () => {
  const showMaiorGrauLista = ref<string>('') // TODO:nao ta funcionando
  class Grafo {
    vertices: Record<string | number, Record<string | number, any>> = {}
    constructor() {
      this.vertices = {}
      this.mostraLista = this.mostraLista.bind(this)
      this.grauMaximoVertice = this.grauMaximoVertice.bind(this)
    }

    adicionarVertice(vertice: string) {
      this.vertices[vertice] = {}
    }

    adicionarAresta(origem: string, destino: string) {
      if (!this.vertices[origem] || !this.vertices[destino]) {
        console.log('Vertices não existem')
        return
      }
      this.vertices[origem][destino] = true
    }
    mostraLista() {
      try {
        console.log(grafo)
        console.log(this)
        for (let vertice in this.vertices) {
          let vizinhos = Object.keys(this.vertices[vertice])
          console.log(vertice, vizinhos)
        }
        return 'Lista adjacente'
      } catch (error) {
        console.error(error)
      }
    }

    grauMaximoVertice() {
      let maiorGrau = 0
      let verticeMaiorGrau = ''
      for (let vertice in this.vertices) {
        let grau = Object.keys(this.vertices[vertice]).length
        if (grau > maiorGrau) {
          maiorGrau = grau
          verticeMaiorGrau = vertice
        }
        console.log(`Vertice ${vertice} tem grau ${grau}`)
      }
      const msg = `O vertice ${verticeMaiorGrau} tem o maior grau: ${maiorGrau}`

      showMaiorGrauLista.value = msg
      console.log(showMaiorGrauLista.value)
    }
  }

  const grafo = new Grafo()

  const instanciarGrafo = () => {
    const TAMANHO = 10

    // adiciona os vertices
    for (let i = 0; i < TAMANHO; i++) {
      grafo.adicionarVertice(String(i))
    }

    // adiciona as arestas
    Object.entries(grafoLista).forEach(([chave, valores]) => {
      const origem = String(chave)

      valores.forEach((destino) =>
        grafo.adicionarAresta(origem, String(destino))
      )
    })

    console.log('Grafo instanciado:', grafo)
  }

  instanciarGrafo()
  return { grafo, instanciarGrafo, showMaiorGrauLista }
}

