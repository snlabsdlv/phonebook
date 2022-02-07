
# PhoneBook API

A simple API for Contacts



## Installation

Install PhoneBook with npm

```bash
  npm install
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/snlabsdlv/phonebook
```

Go to the project directory

```bash
  cd phonebook
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node index.js
```


## Swagger OpenApi Available

There is a Swagger Open Api specification Available once the app is running
At the following address [Swagger](http://localhost:4000/api-docs)


## Features

- Phone Number Internation Prefix(validate)
- Search (Enabled with name, workPhone,mobilePhone, email)
- Sort and Limit(Pagination, not complete)
- Standard Api Methods (GET,POST,DELETE,PATCH)
- Swagger/OpenApi specification implemented here [Swagger](http://localhost:4000/api-docs)

## Todo

- Phone Number, Address , Email and Name validation
- Add Timestamps (to each record)
- Disable String type for numbers(for the sake of simplicity phone numbers are of type "string")
- Sort and Limit(Pagination, not complete)
- JWT Token to be implemented(jsonwebtoken)
- Swagger OpenApi verify return status codes, and object/array
- Optimize any search or filtering of objects/arrays
- Refractor project to use Typescript
- Use NestJS or Loopback for bigger projects


## API Reference

#### Get all Contacts

```http
  GET /api/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `sort`      | `string`  |  Sort Contacts by Name example(-1 or 1) |
| `limit`      | `string` |  Limit Contacts example: 5  |




#### Serch Contact by field

```http
  GET /api/search
```

| Parameter        | Type     | Description                |
| :-------- | :------- | :-------------------------------- |
| `name`              | `string` | Name of Contact         |
| `workPhone`         | `string` | Work Phone of Contact   |
| `mobilePhone`       | `string` | Mobile Phone of Contact |
| `email`             | `string` | Email of Contact |




#### Get Contact by Id

```http
  GET /api/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of Contact to fetch |



#### Delete Contact

```http
  DELETE /api/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of Contact to fetch |




#### Update Contact

```http
  PUT /api/${id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of Contact to fetch |


| Body        | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`              | `string` | Name of Contact         |
| `workPhone`         | `string` | Work Phone of Contact   |
| `homePhone`         | `string` | Home Phone of Contact   |
| `mobilePhone`       | `string` | Mobile Phone of Contact |
| `address`           | `string` | Address of Contact      |
| `email`             | `string` | **Required** Email of Contact |




#### Create/Add Contact

```http
  POST /api/
```

|  Body | Type     | Description                           |
| :-------- | :------- | :-------------------------------- |
| `name`              | `string` | Name of Contact         |
| `workPhone`         | `string` | Work Phone of Contact   |
| `homePhone`         | `string` | Home Phone of Contact   |
| `mobilePhone`       | `string` | Mobile Phone of Contact |
| `address`           | `string` | Address of Contact      |
| `email`             | `string` | **Required** Email of Contact |



## Feedback

If you have any feedback, please reach me at ibrahim.abuelruzz@gmail.com

