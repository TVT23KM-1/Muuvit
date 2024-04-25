<<<<<<< Updated upstream
FROM maven:3.9.6-eclipse-temurin-21-alpine AS build
COPY . /app
||||||| Stash base
FROM eclipse-temurin:17-jdk-alpine AS build
=======
FROM maven:3.9.6-eclipse-temurin-21-alpine AS build
>>>>>>> Stashed changes
WORKDIR /app
<<<<<<< Updated upstream
RUN mvn package -Dmaven.test.skip
COPY target/*.jar .
||||||| Stash base
COPY . .
RUN apk add maven && mvn package
COPY target/*.jar .
=======
COPY . .
RUN mvn package -Dmaven.test.skip
>>>>>>> Stashed changes

<<<<<<< Updated upstream
FROM eclipse-temurin:21-alpine
||||||| Stash base
FROM eclipse-temurin:17-jre-alpine

=======
FROM eclipse-temurin:17-jre-alpine
>>>>>>> Stashed changes
WORKDIR /app
<<<<<<< Updated upstream
COPY --from=build /app/target/*.jar .
||||||| Stash base
COPY --from=build /app/*jar .
#COPY --from=build /app/entrypoint.sh .
=======
COPY --from=build /app/target/*jar .
>>>>>>> Stashed changes
EXPOSE 3000
<<<<<<< Updated upstream

ENTRYPOINT java -jar backend-0.0.1-SNAPSHOT.jar
||||||| Stash base

ENTRYPOINT find . -name backend\*.jar|head -n 1|xargs java -jar
#ENTRYPOINT ["java", "-jar", "backend-0.0.1-SNAPSHOT.jar"]
=======
RUN ls -l
ENTRYPOINT java -jar backend-0.0.1-SNAPSHOT.jar
>>>>>>> Stashed changes
