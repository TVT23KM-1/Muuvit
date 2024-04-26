FROM maven:3.9.6-eclipse-temurin-21-alpine AS build
WORKDIR /app
COPY . .
RUN mvn package -Dmaven.test.skip

FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=build /app/target/*jar .
EXPOSE 3000
RUN ls -l
ENTRYPOINT java -jar backend-0.0.1-SNAPSHOT.jar
