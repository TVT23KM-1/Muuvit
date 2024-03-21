FROM openjdk:22-bookworm AS build
WORKDIR app
COPY . .
RUN rm -f .env &&\
    apt -y update &&\
    apt -y install maven && \
    mvn install
EXPOSE 3000
CMD mvn spring-boot:run
