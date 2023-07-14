# sh deploy.sh

echo "Deteniendo y eliminando los contenedores y volúmenes..."
docker-compose down -v

echo "Compilando y empaquetando el proyecto productscrud-backend..."
#mvn clean package -f productscrud-backend/pom.xml

echo "Creando y ejecutando los servicios definidos en docker-compose.yml..."
docker-compose up --build -d