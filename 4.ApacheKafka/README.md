# Apache Kafka
***

## Levantar docker
~~~
docker compose up
~~~

## Listar tópicos
~~~
kafka-topics.sh --list --bootstrap-server localhost:9092
~~~

## Creación de tópicos
~~~
kafka-topics.sh --create --topic ***topico-uno*** --partitions 2 --bootstrap-server localhost:9092
kafka-topics.sh --create --topic topico-dos --partitions 3 --bootstrap-server localhost:9092
~~~

## Ver detalle de tópicos específicos
~~~
kafka-topics.sh --describe --topic topico-uno --bootstrap-server localhost:9092
kafka-topics.sh --describe --topic topico-dos --bootstrap-server localhost:9092
~~~

## Eliminar un tópico
~~~
kafka-topics.sh --delete --topic topico-uno --bootstrap-server localhost:9092
kafka-topics.sh --delete --topic topico-dos --bootstrap-server localhost:9092
~~~

## Publicador kafka
~~~
kafka-console-producer.sh --bootstrap-server 127.0.0.1:9092 --topic topico-uno
~~~

## Consumidor kafka
~~~
kafka-console-consumer.sh --bootstrap-server 127.0.0.1:9092 --topic topico-uno --from-beginning
~~~

## Entrar al bash
~~~
docker exec -it 1cc46b74c3ef bash
~~~

### Documentación
[kafka.apache.org](https://kafka.apache.org/quickstart)