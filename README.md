## Front EventIscription

## Tecnologias Utilizadas
- React
- TypeScript
- Vite
- Tailwind CSS

## Instalação
1. Clone o repositório ou faça o download do código fonte.
```
git clone git@github.com:berguisonpaiva/front-event-inscription.git
```

2. Acesse o diretório do projeto.
```
cd front-event-inscription
```

3. Execute este comando para criar a imagem em sua máquina local e iniciar o contêiner. Você só precisa executar este comando na primeira vez e sempre que fizer alterações no arquivo docker-compose.yml.

```
docker-compose up --build --no-recreate -d
```

4. suba o container
```
docker-compose up -d
```

5. criar e iniciar o aplicativo
```
docker exec -it vite_docker sh
```

6. Entramos no container e agora precisamos executar os comandos para instalar os pacotes do Node e iniciar o aplicativo.
```
npm i && npm run dev
```


O servidor de desenvolvimento será iniciado e o projeto estará acessível em `http://localhost:5174`.

