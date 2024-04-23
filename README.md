# React Handling
El plan consiste en la implementación de un proyecto de React que incluye los componentes principales Home, ColorGame y Doable. se pondrá en práctica gran parte de los conceptos revisados en React.

## Componente: App
La pagina de inicio tiene los estilos y el encabezado completo, además la lógica para renderizar condicionalmente los componentes Home, ColorGame y Doable.

## Componente: Home
El componente Home es una página principal que muestra un título, nombre de usuario y dos botones de navegación. Utiliza CSS modules para estilos. Renderiza una imagen de ícono de React, un título, nombre de usuario y dos botones. Cada botón tiene un texto y está asociado a una función de navegación específica al hacer clic.

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

## El componente: ColorGame
Es un juego interactivo desarrollado en React que desafía al usuario a adivinar el color correspondiente a un código RGB mostrado. Aquí hay un resumen del componente:

- Este componente utiliza estados para gestionar el número de colores, los colores aleatorios generados, los intentos del jugador, el índice del color objetivo y el estado del color ganador.
- Permite al usuario ajustar el número de colores entre 3, 6 y 9 a través de un campo de entrada.
- Muestra un título y una descripción para el juego.
- Presenta los componentes RGB del color objetivo que el jugador debe adivinar.
- Ofrece un panel de control que muestra el estado actual del juego, como "Ganaste", "Perdiste" o "Intenta de nuevo".
- Proporciona un botón de reinicio para comenzar un nuevo juego.
- Muestra una cuadrícula de botones que representan los colores disponibles para que el usuario haga clic y adivine.
- Los colores de los botones cambian dependiendo del estado del juego.
- Controla los eventos de clic en los botones para registrar los intentos del usuario y determinar si ha ganado.
- El diseño y los estilos están definidos mediante CSS modules para una apariencia visualmente agradable y coherente.

## Componente: Doable
Este componente es una página que muestra un título y una descripción sobre la funcionalidad del sistema llamado "Doable". Dependiendo del estado de autenticación del usuario, renderiza diferentes componentes. Si el usuario está autenticado, muestra el componente Authenticated, que incluye funcionalidades avanzadas para gestionar tareas. Si el usuario no está autenticado, muestra el componente Unauthenticated, que puede proporcionar opciones para iniciar sesión o registrarse. Este componente utiliza el contexto de autenticación (useAuth) para determinar el estado de autenticación del usuario y está estilizado con CSS modules para una apariencia consistente.

## Adicionales

### Uso del Componente Button
Claro está que en el componente Doable, Color Game y App. también se re-utilizará el componente Button constantemente.

### Testing
Se implementó pruebas para 2 componentes de React, descubre cuál de ellos!!!
