# Usar uma imagem do Node.js como base
FROM node:20.9.0-alpine

# Definir o diretório de trabalho no container
WORKDIR /app

# Copiar os arquivos de dependência e instalar as dependências
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Expor a porta que a aplicação vai utilizar
EXPOSE 3005

# Comando para iniciar a aplicação usando Nodemon
# CMD ["npm", "run", "dev"]

CMD [ "node", "dist/index.js" ]