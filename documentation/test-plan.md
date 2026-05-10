# TEST PLAN

## Proyecto

Thinking Tester Contact List App

---

# Objetivo

Validar funcionalidades UI y API del sistema de contactos.

---

# Alcance

## UI Testing

- Login
- Crear contacto
- Eliminar contacto

## API Testing

- Login API
- Create Contact API
- Get Contacts API
- Delete Contact API

---

# Herramientas

- Playwright
- TypeScript
- Cucumber
- Dotenv

---

# Casos de prueba

| ID | Modulo       | Caso de prueba        | Resultado esperado            |
|----|--------------|-----------------------|-------------------------------|
| TC-01 | Login     | Login válido          | Usuario ingresa correctamente |
| TC-02 | Contactos | Crear contacto        | Contacto creado exitosamente  |
| TC-03 | Contactos | Eliminar contacto     | Contacto eliminado            |
| TC-04 | API       | Login API             | Status 200                    |
| TC-05 | API       | Crear contacto API    | Status 201                    |
| TC-06 | API       | Obtener contactos API | Status 200                    |
| TC-07 | API       | Eliminar contacto API | Status 200                    |

---

# Riesgos

- Inestabilidad del ambiente demo
- Datos repetidos
- Timeout de respuesta

---

# Estrategia

Se implementó automatización UI y API utilizando Playwright con patrón Page Object Model y arquitectura basada en servicios reutilizables.