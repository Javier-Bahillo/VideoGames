## Funcionalidades principales

El proyecto implementa una API REST backend completa para la gestión de un sistema de videojuegos tipo videoclub, siguiendo una arquitectura en capas y buenas prácticas de desarrollo backend.

### Arquitectura

La aplicación sigue una arquitectura **por capas** bien definida:

- **Controller** → Exposición de endpoints REST
- **Service** → Lógica de negocio
- **Repository** → Acceso a base de datos mediante Spring Data JPA
- **DTO + Mapper** → Separación entre modelo interno y datos expuestos
- **Security** → Autenticación y autorización con JWT
- **Exception Handling** → Gestión centralizada de errores

Este enfoque mejora la mantenibilidad, escalabilidad y testabilidad del sistema.

---

### Gestión de datos

- Persistencia de entidades mediante **PostgreSQL**
- Uso de **JPA / Hibernate** para ORM
- Definición de relaciones entre entidades del dominio
- Validación de datos con **Spring Validation**

---

### Seguridad

- Implementación de autenticación basada en **JWT (JSON Web Tokens)**
- Configuración de **Spring Security**
- Protección de endpoints
- Gestión de autenticación y autorización de usuarios

---

### API REST

La aplicación expone endpoints REST organizados por recursos.

Ejemplos de operaciones típicas:

- `GET /api/...` → Obtener recursos
- `POST /api/...` → Crear entidades
- `PUT /api/...` → Actualizar datos
- `DELETE /api/...` → Eliminar registros

---

### Integraciones externas

- Consumo de API externa (**TheGamesDB**) para obtención de información de videojuegos
- Configuración de clientes HTTP para integración con servicios externos

---

### Funcionalidades adicionales

- Envío de correos electrónicos mediante **Spring Mail**
- Generación de documentos PDF
- Validación de formularios y datos de entrada
- Manejo global de excepciones

---

### Características técnicas destacadas

- Separación clara de responsabilidades (Clean Architecture principles)
- Uso de DTOs para evitar exposición directa de entidades
- Configuración basada en propiedades y variables de entorno
- Preparado para despliegue con Docker
