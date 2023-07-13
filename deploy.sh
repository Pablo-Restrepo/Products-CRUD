echo "Deteniendo y eliminando los contenedores y volúmenes..."
docker-compose down -v

echo "Compilando y empaquetando el proyecto productscrud..."
mvn clean package -f pom.xml

echo "Creando y ejecutando los servicios definidos en docker-compose.yml..."
docker-compose up --build -d