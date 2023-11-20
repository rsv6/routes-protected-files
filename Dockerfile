FROM node:20.9.0

# Create app directory
WORKDIR /usr/src/app

# Copiando arquivos de dependência
COPY package*.json ./

# Instalando as dependências
RUN npm install 

# Copiando os arquivos fonte para o contêiner
COPY . .

# Compilando o TypeScript para JavaScript
RUN npm run build

# If you are building your code for production
# RUN npm ci --only=production

# Expondo a porta que a API vai utilizar
EXPOSE 3005

# Comando para iniciar a aplicação
CMD [ "node", "dist/index.js" ]
