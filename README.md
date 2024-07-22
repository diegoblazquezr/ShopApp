# ShopApp

![2024-07-22 01_32_44-Shop App - Brave](https://github.com/user-attachments/assets/a0d6c2d9-63fb-4164-973d-f3c5a75c139a)

## Tabla de Contenidos

- [Introducción](#introducción)
- [Características](#características)
- [Instalación](#instalación)
- [Uso](#uso)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Por Qué Estas Tecnologías](#por-qué-estas-tecnologías)
- [Licencia](#licencia)
- [Contacto](#contacto)

## Introducción

ShopApp es una aplicación de comercio electrónico integral diseñada para optimizar la experiencia de compra tanto para clientes como para administradores. Esta aplicación permite a los usuarios navegar por los productos a través de varios filtros, añadirlos a un carrito y proceder al pago, mientras que los administradores pueden gestionar el inventario, los pedidos y la información de los usuarios.

## Características

- Listado de Categorías
- Listado de productos con vistas detalladas
- Filtros de Productos:
    - Keyword: productName o description
    - Categoría
    - Fecha: Newest/Oldest
    - Nombre: A/Z
    - Precio: Low/High
- Funcionalidad de carrito de compras
- Diseño responsive para móviles y escritorio
- Menú hamburguesa

## Vista Móvil / Escritorio
### Móvil
![2024-07-22 01_43_08-Shop App - Brave](https://github.com/user-attachments/assets/da8d5702-981b-4604-8503-5d3cee152eb4)

### Escritorio
![2024-07-22 01_42_21-Shop App - Brave](https://github.com/user-attachments/assets/a0687271-2e0e-404d-ab59-0de078ce67fa)


## Instalación

Para obtener una copia local y ejecutarla, sigue estos sencillos pasos.

### Prerrequisitos

- Node.js
- npm

### Pasos de Instalación

1. Clona el repositorio:
   ```sh
   git clone https://github.com/diegoblazquezr/ShopApp.git
    ```
2. Navega al directorio del proyecto:
    ```sh
    cd ShopApp    
    ```
3. Instala las dependencias:
    ```sh
   npm install
    ```
4. Inicia la aplicación:
    ```sh
   npm run dev
    ```
    
## Uso

Para usar la aplicación, sigue estos pasos:

1. Elige una categoría o ve directamente a la pestaña de productos.
2. Navega por el catálogo de productos.
3. Haz click en cualquier producto para ver los detalles de dicho producto.
4. Añade artículos a tu carrito, lo puedes hacer tanto en el listado como en la vista detallada de productos.

## Tecnologías Utilizadas

- **Frontend**: React.js, Redux
- **Backend**: Node.js, Express.js
- **Base de datos**: SQL
- **Estilos**: SCSS
- **Pruebas**: Jest

## Por Qué Estas Tecnologías

### React.js y Redux

React.js se utiliza para construir la interfaz de usuario debido a su arquitectura basada en componentes, lo que facilita la gestión y reutilización de componentes. Redux se integra para la gestión del estado, proporcionando un contenedor de estado predecible que ayuda a gestionar el estado de la aplicación de manera eficiente.

### Node.js y Express.js

Node.js se elige por su arquitectura no bloqueante y dirigida por eventos, lo que lo hace ideal para construir aplicaciones de red escalables. Express.js es un marco de aplicación web minimalista y flexible para Node.js que proporciona un conjunto robusto de características para aplicaciones web y móviles.

### SQL

Se ha elegido una base de datos SQL por su robustez y capacidad para manejar relaciones complejas entre datos. Las bases de datos SQL son ideales para aplicaciones que requieren transacciones ACID (Atomicidad, Consistencia, Aislamiento, Durabilidad) y consultas complejas. Además, SQL ofrece una estructura de datos bien definida y un lenguaje de consulta poderoso, lo que facilita la gestión y análisis de datos.

### SCSS

SCSS (Sassy CSS) se utiliza para los estilos debido a su capacidad para escribir CSS de manera más estructurada y mantenible. SCSS permite el uso de variables, anidamiento, mixins y otras funcionalidades avanzadas que no están disponibles en CSS puro. Esto facilita la gestión de estilos en proyectos grandes y mejora la productividad del desarrollo.dispositivos.

### Jest

Jest se utiliza para las pruebas porque es un marco de pruebas robusto y fácil de configurar. Ofrece una excelente integración con aplicaciones de JavaScript, especialmente con React. Jest proporciona funcionalidades como el mockeo de módulos, la ejecución de pruebas en paralelo y un detallado reporte de cobertura, lo que asegura que la aplicación funcione como se espera y ayuda a mantener un alto estándar de calidad del código.



## Licencia

Distribuido bajo la Licencia MIT. Ver `LICENSE` para más información.

## Contacto

Diego Blázquez Rosado - [diegoblazquezr@gmail.com](mailto:diegoblazquezr@gmail.com)

Enlace del Proyecto: [https://github.com/diegoblazquezr/ShopApp](https://github.com/diegoblazquezr/ShopApp)
