import { grafoLista } from '~/constans/grafos'

export const useGrafoLista = () => {
  class Grafo {
    vertices: Record<string | number, Record<string | number, any>> = {}
    constructor() {
      this.vertices = {}
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
      console.log(this.vertices)
      for (let vertice in this.vertices) {
        let vizinhos = Object.keys(this.vertices[vertice])
        console.log(vertice, vizinhos)
      }
      return 'Lista adjacente'
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
      console.log(
        `O vertice ${verticeMaiorGrau} tem o maior grau: ${maiorGrau}`
      )
    }
  }

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

  const grafo = new Grafo()
  return { grafo, instanciarGrafo }
}

