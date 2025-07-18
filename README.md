# ProyectoFinal

Este repositorio contiene el Frontend del Proyecto Final desarrollado en Angular.

El sistema completo se compone de dos partes:

Backend: Una API desarrollada con Spring Boot, que expone métodos para operaciones básicas de tipo CRUD (Create, Read, Update, Delete). Estos servicios pueden ser consumidos a través de web services RESTful.

Frontend: Aplicación creada con Angular, que se conecta al backend utilizando observables para consumir los servicios de la API y mostrar los datos en una interfaz de usuario interactiva.

Este proyecto demuestra la integración entre Angular y Spring Boot para crear una aplicación web funcional, estructurada y basada en componentes modernos.  

Instalación y Ejecución

Requisitos Previos
Asegúrate de tener instalados:

Node.js (versión recomendada: 18.x o superior)

Angular CLI

Java JDK (versión 17 o superior)

Maven para compilar el backend

Pasos para ejecutar el proyecto
Backend (Spring Boot)
Clona el repositorio del backend (si está separado) o navega a la carpeta del backend.

Compila y ejecuta la aplicación:

mvn spring-boot:run
El backend se iniciará por defecto en:
http://localhost:8080

Frontend (Angular)
Navega a la carpeta del frontend (este repositorio).

Instala las dependencias:

npm install
Ejecuta la aplicación:

ng serve
Abre el navegador y entra a:
http://localhost:4200
