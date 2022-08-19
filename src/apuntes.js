/*
Para cambiar de npm a yarn
  yarn add react-bootstrap bootstrap
  yarn add node-sass -> hacer sus importaciones de estilos en el index.js
  yarn add react-toastify -> hacer sus importaciones de estilos en el index.js

Crear db y subirla a api.myjson:
https://myjson.dit.upm.es/

hook personalizado para hacer el fetch
carpeta hooks -> useFetch

No se puede usar un Hook dentro de otro
Todas las imágenes y demás archivos estáticos van dentro de la carpeta public, no se pueden poner en src porque
las urls exteriores no pueden acceder a esta carpeta, sólo internamente en React.

/////Para agregar al carrito
Al darle click al btn, éste agregará el elemento al localStorage, y el componente Carrito, al detectar un cambio en el localStorage
se renderizará















*/