# Bundlers

- Agrupa(empacota) diversos arquivos e suas dependências em uma ou mais pacotes com o objetivo de otimizar o carregamento de paginas Web.

# Funcionamento
- No geral, a operação de um empacotador é dividida em duas etapas:
- Geração de grafico de dependência e empacotamento.

# Mapeando um Grafico de dependencias

- A primeira coisa que um empacotador de modulo faz é gerar um mapa de relacionamento de todos os arquivos servidos. Este processo é denominado Resolução de Dependências.

- O empacotador requer um arquivo de entrada (geralmente o arquivo principal). Em seguida analisa o arquivo de entrada para entender suas dependencias

- Depois disso, Ele percorre as dependencias para determinar as depencias dessas dependencias


# Agrupamento

- Depois de receber as entradas e passar por suas dependencias durante a fase de resolução de dependencias, um bundler entrega ativos estaticos que o navegador pode processar com exito.

- Este estagio de saida é denominado de packing. Durante esse processo, o empacotador aproveitará a resolução de dependencia para integrar nossos varios arquivos de codigo e retornar um unico pacote para o navegador carregar
