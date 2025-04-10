# Mentor IA Académico 🧠📘

Este proyecto es un **dashboard educativo con inteligencia artificial** que permite a estudiantes obtener resúmenes, rutas de estudio y respuestas a sus preguntas académicas mediante la API de ChatGPT (OpenAI).

---

## 🚀 Características

- ✅ Generación de contenido educativo personalizado
- ✅ Resumen automático de temas según nivel educativo
- ✅ Generación de preguntas de opción múltiple
- ✅ Chat interactivo con IA (ChatGPT integrado)
- ✅ Construido con Vite + React + Tailwind CSS

---

## 🧑‍🏫 ¿Cómo usarlo?

1. **Instalación de dependencias**

```bash
npm install
```

2. **Crear archivo `.env` en la raíz del proyecto:**

```
VITE_OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxx
```

3. **Ejecutar el proyecto en desarrollo:**

```bash
npm run dev
```

4. **Compilar para producción (Vercel):**

```bash
npm run build
```

---

## 🌐 Despliegue

Este proyecto puede ser desplegado fácilmente en [Vercel](https://vercel.com) con los siguientes ajustes:

- **Build Command:** `npm run build`
- **Install Command:** `npm install`
- **Output Directory:** `dist`

---

## 📁 Estructura

```
mentor-ia/
├── public/
├── src/
│   ├── components/
│   │   └── ChatGPTBox.tsx
│   │   └── InputForm.tsx
│   │   └── Results.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .env.example
├── package.json
├── vite.config.ts
```

---

## 👩‍💻 Autor

Proyecto desarrollado por **Cristhianne de León** como actividad académica para la materia de Inteligencia de Negocios.

---
