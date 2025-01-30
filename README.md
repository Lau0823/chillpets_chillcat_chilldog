# Chill Pets

**Chill Pets** es una página web para la venta de productos para mascotas. Ofrece un catálogo de productos, una pasarela de pagos para realizar compras y un sistema de gestión de inventario (stock). La plataforma cuenta con dos tipos de usuarios: **Administrador** y **Usuario**. El Administrador tiene permisos para gestionar productos, precios y stock, mientras que el Usuario puede navegar por el catálogo, realizar compras y gestionar su perfil.

## Características

- **Catálogo de productos**: Muestra productos para mascotas categorizados, con detalles sobre cada uno.
- **Pasarela de pagos**: Los usuarios pueden realizar pagos a través de una pasarela de pagos integrada.
- **Gestión de stock**: Los productos tienen una cantidad limitada en el inventario, y los administradores pueden actualizar el stock.
- **Roles de usuario**: Existen dos roles:
  - **Admin**: Puede añadir, editar y eliminar productos, gestionar el stock y visualizar las estadísticas de ventas.
  - **User**: Puede ver los productos, agregar productos al carrito y realizar pagos.
- **Sistema de autenticación**: Los usuarios deben crear una cuenta o iniciar sesión para realizar compras.

## Tecnologías utilizadas

- **Frontend**:
  - Next.js
  - Tailwind CSS
  - TypeScript

- **Backend**:
  - Node.js
  - Express
  - PostgreSQL (Base de datos)
  - JWT para autenticación
  - Stripe (para la pasarela de pagos)

## Instalación

1. **Clonar el repositorio**:

```bash
git clone https://github.com/tu-usuario/chill-pets.git
