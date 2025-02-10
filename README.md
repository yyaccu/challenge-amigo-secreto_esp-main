
# Amigo Secreto

## Descripción

Este proyecto es una aplicación simple que permite a los usuarios agregar nombres de amigos, mostrar una lista de los mismos, y realizar un sorteo aleatorio para determinar quién será el "amigo secreto". 

## Funcionalidades

- **Agregar nombres**: Los usuarios pueden agregar nombres de amigos a una lista mediante un campo de texto y un botón "Adicionar".
- **Validación de entrada**: Si el campo de texto está vacío, el sistema alerta al usuario para ingresar un nombre válido.
- **Visualización de la lista**: Los nombres agregados se muestran en una lista visible en la página.
- **Sorteo aleatorio**: Un botón "Sortear Amigo" selecciona un nombre de la lista de manera aleatoria y lo muestra como el "amigo secreto".

## Tecnologías utilizadas

- **HTML**: Para la estructura básica de la página.
- **CSS**: Para el estilo y la presentación.
- **JavaScript**: Para la funcionalidad y la interacción del usuario.

## Instalación

No es necesario instalar ningún software adicional para ejecutar este proyecto. Solo necesitas un navegador web moderno para abrir el archivo `index.html`.

### Pasos para ejecutar:

1. Clona este repositorio o descarga los archivos.
2. Abre el archivo `index.html` en tu navegador web.
3. Ya puedes empezar a agregar amigos y realizar sorteos de manera interactiva.

## Estructura del Proyecto

El proyecto consta de los siguientes archivos:

```
/amigo-secreto
│
├── index.html          # Archivo principal que contiene la estructura HTML
├── script.js           # Archivo JavaScript que contiene la lógica de la aplicación
├── style.css           # Archivo CSS para los estilos de la página
└── README.md           # Este archivo, que contiene la documentación del proyecto
```

## Cómo usar

1. **Agregar un amigo**:
    - Escribe el nombre de un amigo en el campo de texto.
    - Haz clic en el botón **Adicionar** para agregar el nombre a la lista.
  
2. **Ver la lista de amigos**:
    - Después de agregar amigos, los nombres aparecerán en una lista justo debajo del campo de texto.

3. **Sortear un amigo secreto**:
    - Haz clic en el botón **Sortear Amigo** para que el sistema seleccione aleatoriamente un nombre de la lista.
    - El nombre sorteado se mostrará en pantalla con un mensaje que dice "🎉 Amigo secreto: [nombre] 🎉".
  
4. **Limpiar el resultado**:
    - Si se agrega un nuevo amigo después de haber sorteado un amigo secreto, el mensaje del "amigo secreto" se borrará automáticamente.

## Requisitos

No se requieren dependencias adicionales para ejecutar este proyecto. Solo se necesita un navegador web que soporte JavaScript moderno.

## Contribuciones

Si deseas mejorar este proyecto, siéntete libre de hacer un fork y enviar un pull request. Las contribuciones son bienvenidas.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

## Autor

Este proyecto fue creado por [Tu Nombre].
