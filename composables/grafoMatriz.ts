import { grafoMatriz } from '~/constans/grafos'

export const useGrafoMatriz = () => {
  const exibirMatriz = () => {
    const TAMANHO: number = grafoMatriz.length

    for (let linha = 0; linha < TAMANHO; linha++) {
      let linhaStr = '['
      for (let coluna = 0; coluna < TAMANHO; coluna++) {
        linhaStr += `${grafoMatriz[linha][coluna]} `
      }
      console.log(linhaStr + ']')
    }
  }

  const grauMaximo = () => {
    const TAMANHO: number = grafoMatriz.length

    //objeto para salvar o maior grau encontrado
    let maiorGrau = {
      no: 0,
      grau: 0,
    }

    for (let linha = 0; linha < TAMANHO; linha++) {
      let grauLinha = 0

      for (let coluna = 0; coluna < TAMANHO; coluna++) {
        if (grafoMatriz[linha][coluna] === 1) {
          grauLinha++
        }

        // quando chega no a ultima coluna da linha
        if (coluna === TAMANHO - 1) {
          console.log(`O nó ${linha} tem grau ${grauLinha++}`)
          //verifica se o grau atual é o maior grau
          if (grauLinha > maiorGrau.grau) {
            maiorGrau.no = linha
            maiorGrau.grau = grauLinha
            console.log(`O nó ${linha} agora tem o maior grau: ${grauLinha}`)
          }
        }
      }
    }
    console.log(maiorGrau)
  }

  return { exibirMatriz, grauMaximo }
}

