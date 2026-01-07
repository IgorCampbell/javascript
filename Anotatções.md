# Anotações

## Disponibilizar acesso web via node

- npx serve .

## Variáveis

- var nome = 'Igor'
- var nome = "Igor"
- vav nome = `Igor`

## Conversões

- Numero
  - Number.parseInt(n) // string > inteiro
  - Number.parseFloat(n) // string > float
  - Number(s) // string > inteiro ou float, será decidido pelo JavaScript
- Texto
  - String(n) // número > string
  - n.toString() // número > string

## Formatação

- Numero
  - n1.toFixed(2) // formata o número para duas casas decimais
  - n1.toFixed(2).replace('.',',') // formata o número para duas casas decimais e troca o "." por ",".
  - n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) // formata com a moeda Real.
- Texto
  - `O aluno ${nome} possuí ${idade} anos` // Para esse titpo de formatação deve se usar a crase. Template string
  - nome.length // tamanho da string
  - nome.toUpperCase / nome.toLowerCase // retorna a string em maiúscula / minuscula

## Operadores aritiméticos

- '+ adição
- '- subtração
- '\* multiplicação
- '/ divisão
- '% resto da divisão real
- '\*\* exponencial

### Precedência dos operadores aritiméticos

1. '()
2. '\*\*
3. '\* / %
4. '+ -

## Operadores relacionais

- '>
- '<
- '>=
- '<=
- '==
- '===
- '!=

## Operadores lógicos

- '!
- '&&
- '||

## Operadores ternários

- '?: - teste ? Resultado se verdadeiro : resultado se falso - Exemplo : 5 > 7 ? 'Aprovavdo' : 'Reprovado'

## Precedênccia de operadores

- Operadores aritiméticos
- Operadores relaciconais
- Operadores lógicoss
- Operadores ternários

## DOM

### Elementos

- window
  - document
    - getElementById()
    - querySelector()
      - div#msg - # busca por id
      - div.msg - . busca por classe
  - ...

### Evevntos

- mouseenter - Mouse entrou no elemento
- mousemove - Mouse se moveu dentro do elemento
- mousedown - Mouse clicou e segurou
- mouseup - Soltou o botãao do mouse
- click - fez um clique com o mouse
- mouseout - mouse saiu de cima do objeto
