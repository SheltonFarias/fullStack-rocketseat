# Imutabilidade

Uma vez algo imutável é criado você não pode modificar seus valores ou propriedades. Em vez disso, voce cria uma cópia modificada para manter o original inalterado.

# Estratégia

Geralmente há duas maneiras de alterar dados. A primeira é mutar o dado alterando diretamente seu valor.

A segunda maneira é substituir o dado antigo por uma nova cópia com alterações desejadas.

# Na criação de interface

A imutabilidade é utilizada para otimizar a atualização do DOM(Document Object Model) e para fornecer um modelo mais previsível no desenvolvimeto de interfaces (UI)

## Detectar mudanças

Detectar mudanças e objetos é difícil, como são modificados diretamente a detecção do que mudou exatamente requer um objeto mutado para ser comparado com as cópias da suas próprias versões anteriores e a árvore inteira do objeto para ser cruzada.

Detectar mudanças em objetos imutáveis é considerado fácil. Se ele for diferente do anterior, concluimos que o objeto foi alterado

## Benefício

Como os dados imutáveis podem determinar facilmente se ocorreram alterações, isso também ajuda a determinar quando um componente deve ser renderizado novamente.