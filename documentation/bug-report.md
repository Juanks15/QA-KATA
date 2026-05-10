# BUG REPORT

## Proyecto

Thinking Tester Contact List App

---

# BUG-01

## Título

La aplicación permite crear contactos duplicados.

---

## Severidad

Media

---

## Prioridad

Media

---

## Ambiente

https://thinking-tester-contact-list.herokuapp.com/

---

## Pasos para reproducir

1. Ingresar a la aplicación
2. Realizar login válido
3. Crear un contacto
4. Crear nuevamente el mismo contacto usando el mismo email

---

## Resultado actual

La aplicación permite crear múltiples contactos con el mismo email.

---

## Resultado esperado

La aplicación debería validar duplicados y evitar registros repetidos.

---

## Evidencia

Detectado durante pruebas funcionales UI/API.

---

# BUG-02

## Título

No existen validaciones fuertes para formato telefónico.

---

## Severidad

Baja

---

## Prioridad

Baja

---

## Pasos para reproducir

1. Crear contacto
2. Ingresar texto inválido en teléfono
3. Guardar contacto

---

## Resultado actual

La aplicación permite guardar valores inválidos.

---

## Resultado esperado

El sistema debería validar formato numérico válido.

---

# BUG-03

## Título

El ambiente demo presenta lentitud ocasional.

---

## Severidad

Baja

---

## Prioridad

Media

---

## Resultado actual

En algunos momentos las respuestas UI/API presentan demora.

---

## Resultado esperado

Tiempo de respuesta estable.

---

# Observaciones QA

- El ambiente demo parece reiniciar información periódicamente.
- No se identificó manejo avanzado de validaciones.
- El sistema es funcional para pruebas UI y API.

---

# Conclusión

Se identificaron oportunidades de mejora relacionadas con validaciones funcionales y estabilidad del ambiente.