# Versionamento Semântico
- A versão semântica é um padrão utilizado para identificar e comunicar alterações e compatibilidade entre as versões

1.12.7 => 1 = Major(incompatibilidade), 12 = minor(novas funcionalidades), 7 = patch(correção de bugs)

Major => Significa que houve mudanças significativas que podem afetar a funcionalidade do programa ou causar problemas de compatibilidade com versões anteriores

Minor => Quando novas funcionalidades são adicionadas de uma maneira compativel com versões anteriores

Patch => Quando são feitas correções de bugs ou pequenas melhorias que não afetam a compatibilidade com versões anteriores

npm i express@1.1.1 o @ vai possibilitar escolher a versão

Ferramenta para ajudar a ver versões compativeis = npm SemVer(calculadora de versões)

npm outdated ou npm out => verificar versões das dependencias

npx npm-check-updates -u => vai atualizar os pacotes

npx npm-check-updates --interactive --format group

break change

changelog => ferramenta para verificar alterações na versão