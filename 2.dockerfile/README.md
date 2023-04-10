# Dockerfile
***

## Crear imagen con alias
~~~
$ docker build -t nombreImagen .
~~~

## Correr img docker
~~~
$ docker run -p 2000:3000 nombreImagen
~~~

## Borrar contenedor
~~~
$ docker rm nombreImagen
~~~

## Enumerar contenedor corriendo
~~~
$ docker ps
~~~

## Iniciar contenedor
~~~
$ docker start
~~~

## Detener el proceso
~~~
$ docker stop nombreImagen
~~~

## Detener e iniciar el contenedor
~~~
$ docker restart nombreImagen
~~~