# Shop Server

Java Spring Boot application, simple Internet shop

![Main Page](https://user-images.githubusercontent.com/11160215/109452079-3aa79b80-7a4f-11eb-9708-8fc6a2310e51.png)

## Project run
In order to build and run the project, you should set `JASYPT_ENCRYPTOR_PASSWORD` environment variable,
which contains a password for Jasypt encrypted database password in `application.properties` file. If something goes wrong, you can change database password to plan text (for testing purposes only). 

# Planned features
## Database

* Table Item, which contains info about items (title, description, price, amount)
* Table Category, which contains list of categories. Category should contain parent category.
* Table User, for authentication
* Table Cart, which keeps Carts of users and purchase history

There must be 2 pages to access such content: REST and user-friendly HTTP. REST is a priority

## Pages

* /api/items

 ![Json_Items](https://user-images.githubusercontent.com/11160215/109452169-6fb3ee00-7a4f-11eb-90a1-79577a536905.png)



## Template

Head, header, footer should be separate files

## Pages independent from DB data

* Index
* About

## Database-relates pages

* /items (both Html and REST)
* /categories (both Html and REST)
* /carts (both Html and REST, GET and PUT only)

## Authentication

Users must have limited access to carts, only admin can view should have access to full list

