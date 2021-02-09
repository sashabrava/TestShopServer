# Shop Server

Java Spring Boot application, simple Internet shop

# Planned features
## Database

* Table Item, which contains info about items (title, description, price, amount)
* Table Category, which contains list of categories. Category should contain parent category.
* Table User, for authentication
* Table Cart, which keeps Carts of users and purchase history

There must be 2 pages to access such content: REST and user-friendly HTTP. REST is a priority

## Pages

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

