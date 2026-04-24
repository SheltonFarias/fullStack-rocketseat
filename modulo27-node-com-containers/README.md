# O que é docker
- Sistema de virtualização não convencional.

## Virtualização convencional
- Temos software instalado na máquina Host que irá gerenciar as máquinas virtuais (exemplos: Virtual box, VMWare e etc)

Para cada maquina temos uma instalação completa do sistema operacional alem de ter o proprio hardware virtualizado

## Containers
- Proporciona um ambiente isolado com os recursos que a sua aplicação precisa funcionar (como código, dependencias e bibliotecas necessarias para a executar a aplicação)

## Isolamento
- Kernel: Coração de um sistema operacional que faz a ponte entre o software e o hardware e controla processos, memória, dispositivos e chamadas do sistema.

- CGroups: é uma funcionalidade que controla e limita a alocação de recursos, tais como CPU, memoria, etc. O objetivo é não deixar que um conteiner monopolize os recursos do host para ter um ambiente equilibrado

- Namespace: Isola os recursos, um container so enxerga os seu proprios processos e arquivos

## Conceitos do Docker
- Dockerfile: Contém todas as informações necessarias para gerar a nossa imagem docker

- Imagem: Contém as informações de um ambiente com tudo que a nossa aplicação precisa para executar, por exemplo, codigo, dependencias e bibliotecas

- Container: É a instancia de uma imagem em execução ou seja, é o ambiente de uma imagem executando.

- Máquina Hospedeira (host): Poder ser uma maquina virtual rodando em uma maquina fisica como um servidor ou diretamente na maquina física como o nosso computador

docker build -t api -f .

docker run -p 3333:3333 api -d

docker build -t api:v1 . => usado para versionamento

docker logs name/id do container => vai trazer o logs do container

docker history name/id do container => vai trazer o historico

docker pause name/id do container => Vai pausar o container

docker rm id/name => vai remover o container

docker rm -f id/name => vai remover o container forcado

docker image ls

docker rmi id/name da imagem => vai remover a imagem

docker exec -it sh

docker container isnpect

-- criando volumes

docker volume create api-volume

docker volume inspect api-volume

(-v vai apontar o volume a ser usado) 
docker run -v api-volume:/usr/src/app -p 3333:3333 -d api:v1

docker volume ls

docker volume rm api-volume (vai excluir o volume)

docker container prune (vai remover todos os containers parados)

-- criando um container atraves da imagem puxado do docker hub
docker run --name db-postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -p 5431:5432 -d bitnami/postgresql:latest


## Docker compose
- Ferramenta usada para definir e executar aplicações de vários contêineres do Docker.

- No Compose, um arquivo YAML é usado para configurar os serviços do aplicativo. Em seguida, voce cria e inicia todos os serviços com base ba sua configuração executando um só comando

- "version" => versao utilizada
- Service => cada container utilizado