# CHILL PETS - Petshop Online 🐾

## Descripción
**CHILL PETS** es una tienda en línea de productos para el bienestar de mascotas, diseñada para ofrecer una experiencia de compra fácil y segura. La aplicación incluye autenticación, pasarela de pagos, gestión de stock, blog informativo y un dashboard de administración.

## Tecnologías Utilizadas
- **Frontend:** React, Next.js, Tailwind CSS
- **Backend:** Node.js, Express, TypeScript
- **Base de datos:** PostgreSQL con TypeORM
- **Autenticación:** JWT y OAuth (Google, Facebook, etc.)
- **Almacenamiento de imágenes:** Cloudinary
- **Pasarela de pagos:** Mercado Pago
- **Despliegue:** Vercel (frontend) y Railway/Render (backend)
- **Documentación API:** Swagger
- **Correo y notificaciones:** Nodemailer

## Funcionalidades
- 📌 **Autenticación propia y con terceros (Google, Facebook)**
- 📦 **Catálogo de productos con gestión de stock**
- 💳 **Pasarela de pagos con Mercado Pago**
- 📝 **Blog con  sobre cuidado de mascotas**
- 📩 **Notificaciones por correo electrónico (confirmaciones de compra, actualizaciones de stock, etc.)**
- 🖼️ **Carga y gestión de imágenes con Cloudinary**
- 📊 **Dashboard de administración para gestionar productos, pedidos y usuarios**
- 🚀 **Despliegue en Vercel y documentación en Swagger**

## Instalación y Configuración
### Requisitos previos
- Node.js
- PostgreSQL
- Cuenta en Mercado Pago y Cloudinary

### Clonar el repositorio
```bash
git clone https://github.com/usuario/chill-pets.git
cd chill-pets
```

### Configuración del Backend
1. Crear archivo `.env` con las siguientes variables:
```env
DATABASE_URL=postgresql://user:password@localhost:5432/chillpets
JWT_SECRET=supersecreto
CLOUDINARY_CLOUD_NAME=xxxxx
CLOUDINARY_API_KEY=xxxxx
CLOUDINARY_API_SECRET=xxxxx
MERCADO_PAGO_ACCESS_TOKEN=xxxxx
```
2. Instalar dependencias y correr migraciones:
```bash
cd backend
npm install
typeorm migration:run
npm run dev
```

### Configuración del Frontend
1. Instalar dependencias:
```bash
cd frontend
npm install
```
2. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

## Despliegue
- **Frontend:** Vercel
- **Backend:** Railway o Render

## Documentación API
- La API está documentada con Swagger en: `http://localhost:5000/api-docs`

## Contribuir
1. Hacer un fork del repositorio
2. Crear una rama (`git checkout -b nueva-funcionalidad`)
3. Realizar cambios y hacer commit (`git commit -m 'Agregar nueva funcionalidad'`)
4. Enviar un pull request

## Licencia
Este proyecto está bajo la licencia MIT.

---
💙 ¡Gracias por apoyar CHILL PETS y ayudar a mejorar la vida de las mascotas! 🐶🐱


