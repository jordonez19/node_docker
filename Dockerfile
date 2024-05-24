# Usa una imagen base de Node.js con la versión que necesites
FROM node:16

# Define el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos package.json y package-lock.json para instalar dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Expone el puerto en el que la aplicación va a estar escuchando
EXPOSE 3000

# Comando por defecto a ejecutar cuando se inicie el contenedor
CMD ["node", "server.js"]

#docker build -t nombre_image Dockerfile
#docker build -t nombre_image .