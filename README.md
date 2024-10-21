# Proyecto de Autenticación en Express con JWT

Este proyecto es una aplicación de autenticación construida con Node.js y Express que implementa JSON Web Tokens (JWT) para la gestión de sesiones. El proyecto está dividido en dos ramas principales, cada una demostrando diferentes métodos de almacenamiento de usuarios.

## Ramas del Proyecto

### 1. Rama `main` o `main-bd`

Esta rama utiliza un archivo JSON para almacenar la información de los usuarios. La autenticación se maneja directamente desde este archivo, lo que es útil para fines de prueba y desarrollo.

**Características:**

- Registro de usuarios.
- Inicio de sesión de usuarios.
- Generación y validación de JWT.
- Almacenamiento de usuarios en un archivo JSON.

**Instrucciones:**

1. Clona el repositorio y navega a la rama `main-bd` o main si quiere algo local:

   ```bash
   git clone <URL del repositorio>
   cd <nombre del proyecto>
   git checkout main-bd
