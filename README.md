# WindCart Server

Express server for e-Commerce platform 'windcart' which handles the business logic with all back-end features.

## Features

- User Registration system integrated with mongoDB
- Typescript for type-safety & Mongoose for data integrity
- JWT auth for user registration/sign up, login, session-based tokens
- Password Encryption, unique email-based user management

## API Reference

#### Sing up/Register new User

```http
  POST /api/v1/auth/create-user/
```

| Parameter  | Type     | Description              |
| :--------- | :------- | :----------------------- |
| `email`    | `string` | **Required**. Your Email |
| `password` | `string` | **Required**. Password   |

## Tech Stack

**Server:** Node, Express, Typescript

**Pakages:** Mongoose, Bcrypt, ts-node-dev

**Database:** Mongoose

## 🚀 About Me

I'm a MERN stack developer passionate with express and mongoDB.
