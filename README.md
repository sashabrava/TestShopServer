# Shop Server

Java Spring Boot (backend) + React TypeScrippt (frontend) application, simple Internet shop. The application contains some Thymeleaf pages, React JavaScript and TypeScript files, which imitate following frontend technologies change Thymeleaf  + Bootstrap -> React JavaScript -> React TypeScript. 

![Main Page](https://user-images.githubusercontent.com/11160215/109452079-3aa79b80-7a4f-11eb-9708-8fc6a2310e51.png)

## Project run
In order to build and run the project, you should set `JASYPT_ENCRYPTOR_PASSWORD` environment variable,
which contains a password for Jasypt encrypted database password in `application.properties` file. If something goes wrong, you can change database password to plain text. Except for backend, Maven also handles downloading React dependencies, building the frontend module and copying files to the necessary folder.

# Planned features
## Database

* Table Item, which contains info about items (title, description, price)
* Table Category, which contains list of categories. Category should contain parent category.
* Table User, for authentication
* Table Cart, which keeps Carts of users and purchase history

There must be 2 pages to access such content: REST and user-friendly HTTP. REST is a priority

## Pages

* /api/items

 ![Json_Items](https://user-images.githubusercontent.com/11160215/109452169-6fb3ee00-7a4f-11eb-90a1-79577a536905.png)

## Template

Head, header, footer should be separate files

## Thymeleaf Pages independent from DB data

* Index (/old/index)
* About (/old/about)

## Database-relates pages

* /items (both Html and REST)
* /categories (both Html and REST)
* /carts (both Html and REST, GET and PUT only)

## Authentication

There should be at least 2 roles, user and admin. 

