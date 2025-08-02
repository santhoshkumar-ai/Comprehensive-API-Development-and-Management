# Comprehensive API Development and Management

## Overview
This project demonstrates the end-to-end development, authentication, optimization, and documentation of a RESTful API using **Node.js, Express, and JWT**.  
It covers:
- CRUD operations
- JWT-based authentication
- Performance optimizations
- Robust error handling
- Swagger API documentation
- Basic security audit considerations

---

## Features
- **CRUD Endpoints** for managing users
- **JWT Authentication** (`/login` endpoint issues tokens)
- **Global Error Handling** for consistent API responses
- **Swagger Documentation** accessible at `/api-docs`
- **Security Best Practices** using `helmet` and input validation
- **Performance Optimization** ready (caching-friendly architecture)

---

## Endpoints

### Authentication
#### `POST /login`
- **Description:** Issues a JWT token for API authentication.
- **Request Body:**
```json
{
  "username": "admin",
  "password": "password"
}
