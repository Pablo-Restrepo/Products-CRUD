FROM openjdk:11-jdk-slim
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar
COPY src/main/java/com/pablo736/productscrud/initializer/images src/main/java/com/pablo736/productscrud/initializer/images
ENTRYPOINT ["java","-jar","/app.jar"]