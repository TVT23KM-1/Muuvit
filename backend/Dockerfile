FROM eclipse-temurin:17-jdk-alpine AS build
WORKDIR /app
COPY . .
RUN apk add maven && mvn install
COPY target/*.jar .

FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=build /app/*jar .
COPY --from=build /app/entrypoint.sh .
EXPOSE 3000
RUN ls -lha
ENTRYPOINT ["sh", "entrypoint.sh"]
