# QA Automation Framework

Proyecto de automatización QA para pruebas UI y API sobre la aplicación:

https://thinking-tester-contact-list.herokuapp.com/

---

# Tecnologías utilizadas

- Playwright
- TypeScript
- JavaScript
- Cucumber
- Gherkin
- Dotenv
- Node.js

---

# Arquitectura implementada

El framework fue construido usando:

- Page Object Model (POM)
- Services Layer
- Automatización UI
- Automatización API
- BDD con Gherkin

---

# Estructura del proyecto

```text
QA-KATA
│
├── documentation
├── JavaScript
│   ├── api
│   ├── features
│   ├── pages
│   ├── services
│   ├── step-definitions
│   ├── ui
│   └── utils
│
├── playwright-report
├── test-results
├── package.json
└── README.md
```

---

# Funcionalidades automatizadas

## UI Testing

- Login
- Crear contacto
- Eliminar contacto

---

## API Testing

- Login API
- Create Contact API
- Get Contacts API
- Delete Contact API

---

# Configuración del proyecto

## 1. Clonar repositorio

```bash
git clone <repository-url>
```

---

## 2. Instalar dependencias

```bash
npm install
```

---

## 3. Instalar navegadores Playwright

```bash
npx playwright install
```

---

## 4. Configurar variables de entorno

Crear archivo `.env`

```env
USER_EMAIL=correo@test.com
USER_PASSWORD=1234567
```

---

# Ejecución de pruebas

## Ejecutar todas las pruebas

```bash
npx playwright test
```

---

## Ejecutar pruebas UI

```bash
npx playwright test JavaScript/ui
```

---

## Ejecutar pruebas API

```bash
npx playwright test JavaScript/api
```

---

## Ejecutar modo visual

```bash
npx playwright test --headed
```

---

## Ver reporte HTML

```bash
npx playwright show-report
```

---

# BDD / Gherkin

El proyecto implementa escenarios BDD utilizando:

- Feature files
- Step Definitions
- Given / When / Then

---

# Buenas prácticas implementadas

- Variables de entorno
- Arquitectura modular
- Reutilización de código
- Separación de responsabilidades
- Multi-browser testing
- Services layer
- POM pattern

---

# Documentación QA

La carpeta `documentation` contiene:

- Test Plan
- Architecture
- Bug Report

---

# Conclusión

El proyecto implementa automatización funcional UI/API siguiendo buenas prácticas QA y arquitectura mantenible.
## Ejecutar todos los tests

npx playwright test

## Ejecutar tests UI

npx playwright test JavaScript/ui

## Ejecutar tests API

npx playwright test JavaScript/api

## Ejecutar modo visual

npx playwright test --headed

## Ver reporte

npx playwright show-report