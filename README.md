
## ¡Juego Interactivo y App de notas con React!

<img src="https://github.com/carusi99/ColorGame-and-Doable/assets/151582174/12f74525-cfae-45ba-a125-842a9f8dee9b" width="800">

# Color Game y Doable

El plan consiste en la implementación de un proyecto de React que incluye los componentes principales Home, ColorGame y Doable. se pondrá en práctica gran parte de los conceptos revisados en React
## Características Principales
### Color Game:
`Color Game` es un juego interactivo desarrollado en React donde los jugadores intentan adivinar el color correspondiente a un código RGB mostrado. Ofrece opciones para ajustar el número de colores y proporciona una cuadrícula de botones para que los jugadores seleccionen su respuesta.


### Doable:
`Doable` es una aplicación de gestión de tareas desarrollada en React. Permite a los usuarios crear, organizar y completar tareas, proporcionando una interfaz intuitiva y fácil de usar. Dependiendo del estado de autenticación del usuario, la aplicación muestra diferentes vistas: una vista autenticada, y otra no autenticada.

## Componentes Principales

| Componente             | Detalles                                                                        |
| ----------------- | ------------------------------------------------------------------ |
| Home: | El componente Home muestra un título, nombre de usuario y botones de navegación. .|
| App: | App maneja la estructura general y la navegación condicional entre Home, ColorGame y Doable basada en la ruta..|
| ColorGame: | Aquí podemos ver el juego interactivo que desafía al usuario a adivinar colores RGB. |
| Doable : | Página que muestra información sobre una funcionalidad llamada "Doable", con contenido diferente según la autenticación del usuario.. |

### Renderizado condicional
la variable de estado page para decidir que componente renderizar según la siguiente tabla:

| ruta      | componente     |                                                                                                                                                                                                  
| --------- | ------------ |
|   "/ "     |    Home                                                                                                                                                          
| "/color-game"   | ColorGame    |                                                                                 
| "/doable"      | Doable |                              

### valor de page	Componente
- Implementación de la navegación:
  
El evento onClick de los botones del header así como el de los botones del componente Home están completos, al igual las funciones para que disparen cambios en el valor de la variable de estado page. La variable de estado debe permanecer en el componente App, ¿cómo podemos permitir al hijo Home que también pueda actualizar la variable de estado page?


## instalación

- Asegúrese de que sus versiones de NodeJS y npm estén actualizadas para React ^18.2.0

- Instalar dependencias: npm install or yarn Una pequeña introducción sobre la instalación.

Clone este repositorio

```bash
  git clone https://github.com/carusi99/ColorGame-and-Doable.git
```

Ir al directorio del proyecto

```bash
  cd my-project
```

Instalar dependencias

```bash
  npm install
```

Iniciar el servidor

```bash
  npm run start
```
## 🛠 Skills
- **JavaScript**: El lenguaje de programación principal utilizado para la lógica del lado del cliente y del servidor.
- **HTML y CSS**: Utilizados para estilizar la interfaz de usuario.

- **React**: Utilizado para construir la interfaz de usuario interactiva y dinámica de la aplicación.
- **CSS Modules**: Para mantener los estilos encapsulados y modulares.
- **API Fetch**: Utilizado para realizar peticiones HTTP a la API del servidor y gestionar las respuestas y errores correspondientes.
- **npm**: Gestor de paquetes utilizado para instalar y gestionar las dependencias del proyecto.


## Paquetes usados:

 - [react (^18.2.0)](https://es.react.dev/)
 - [react-dom (^18.2.0)](https://www.npmjs.com/package/react-dom)
 - [vite.js](https://vitejs.dev/)

 - [lucide-react (^0.372.0)](https://lucide.dev/guide/packages/lucide-react)

- [clsx (^2.1.1)](https://www.npmjs.com/package/clsx)



## Adicionales

### Uso del Componente Button
Claro está que en el componente Doable, Color Game y App. también se re-utilizará el componente Button constantemente.

### Testing
Se implementó pruebas para 2 componentes de React, descubre cuál de ellos!!!

## Contribuciones

cualquier contribución o comentario, me puedes contactar, con gusto te responderé paolapachecocarusi@gmail.com
