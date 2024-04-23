FROM maven:3.9.6-eclipse-temurin-21-alpine AS build
COPY . /app
WORKDIR /app
RUN mvn package -Dmaven.test.skip
COPY target/*.jar .

FROM eclipse-temurin:21-alpine
WORKDIR /app
COPY --from=build /app/target/*.jar .
EXPOSE 3000

ENTRYPOINT java -jar backend-0.0.1-SNAPSHOT.jar
