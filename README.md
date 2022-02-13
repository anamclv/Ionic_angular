### Angular Cli

https://angular.io/cli

## Instale la CLI usando el npmadministrador de paquetes:
````
npm install -g @angular/cli
````
# para crear un nuevo proyecto
````
ng new my-first-project
````
````
cd my-first-project
````
````
ng serve -open
`````
# En su navegador, abra http://localhost:4200/ para ver cómo se ejecuta la nueva aplicación. Cuando usa el comando ng serve para compilar una aplicación y servirla localmente, el servidor reconstruye automáticamente la aplicación y vuelve a cargar la página cuando cambia cualquiera de los archivos de origen.

## Cuando ejecute 
````
ng new my-first-project
````
una nueva carpeta, llamada my-first-project, se creará en el directorio de trabajo actual. 

# El comando ng new crea una carpeta de espacio de trabajo Angular y genera un nuevo esqueleto de aplicación. 

# Use el comando
````
ng generate
````
para agregar nuevos archivos para componentes y servicios adicionales, y código para nuevas canalizaciones, directivas, etc. 

````
n g component name
````

## ESQUELETO DE LA APLICACION

# https://angular.io/guide/file-structure

## src

 Cada aplicación tiene una src carpeta que contiene la lógica, los datos y los activos.

 Archivos fuente de la aplicación

 Archivos en el nivel superior de src/prueba de soporte y ejecución de su aplicación. Las subcarpetas contienen el origen de la aplicación y la configuración específica de la aplicación.

 # app/

 Contiene los archivos de componentes en los que se definen la lógica y los datos de su aplicación.

 https://angular.io/guide/file-structure#app-src

# assets/	

Contiene imágenes y otros archivos de activos que se copiarán tal cual cuando cree su aplicación.

# index.html	

La página HTML principal que se muestra cuando alguien visita su sitio. La CLI agrega automáticamente todos los archivos JavaScript y CSS al crear su aplicación, por lo que normalmente no necesita agregar ninguna etiqueta <script> o <link>aquí manualmente.

## AL TAJO 
https://angular.io/start

app/app.component.ts	

Define la lógica del componente raíz de la aplicación, denominado AppComponent. La vista asociada con este componente raíz se convierte en la raíz de la jerarquía de vistas a medida que agrega componentes y servicios a su aplicación.

app/app.component.html	
Define la plantilla HTML asociada con la raíz AppComponent.

app/app.module.ts	

Define el módulo raíz, llamado AppModule, que le dice a Angular cómo ensamblar la aplicación. Inicialmente declara solo el AppComponent. A medida que agrega más componentes a la aplicación, deben declararse aquí.

Examinando un componente
Metadata
selector:
Selector CSS que se corresponde con una etiqueta
HTML
template / templateUrl:
String con el HTML / fichero con el HTML
styles / styleUrls:
Strings con los estilos / ficheros con los estilos
ngOnInit
Componente inicializado (con su vista renderizada y
sus valores cargados), se usa para los procesos
iniciales (no usar el constructor).
ngOnDestroy

Examinando un template
Custom elements
Data binding
Interpolation
Property binding
Class & style binding
Event binding
Two-way binding


Examinando un template
Directivas de atributo
ngClass
ngStyle
Directivas estructurales
ngIf
ngFor
ngSwitch
Pipes
@Pipe, PipeTransform
Directivas propias
De atributo (ElementRef.nativeElement)

Formularios
[(ngModel)]: Two-way binding
ngForm, ngModel y ngSubmit
Variables de template con #
Validaciones: los diferentes estados
Resetear los estados
Template driven y Reactive forms

Conexiones con el servidor
Asincronía
Observables
Suscripciones
API REST
El módulo HttpClientModule
Módulo HttpClientModule y servicio HttpClient
Métodos del servicio HttpClient:
get(), post(), put(), patch(), delete()
Obteniendo la respuesta completa:
{ observe: 'response' }
Interceptors y autentificación


### git remote add origin https://github.com/anamclv/Ionic_angular.git
### git push -f origin main

## bootstrap
## configuramos
# instalamos bootstrap, jquery y popper
`````
npm i bootstrap jquery popper.js
`````
https://getbootstrap.com/docs/5.1/components/accordion/

## incluimos un menú de navegación en nuestra página

https://getbootstrap.com/docs/5.1/components/navbar/

copiamos el codigo de la página anterior Y LO PEGAMOS EN app.component.html

## creamos un modulo. layout
# 1. creamos modulo: ng g m layout
# 2. creamos nuevo componente asociandolo al nuevo modulo: ng g c layout/menuSuperior --skipTests=true
# 3. tengo que hacer publico:
exports: [
    MenuSuperiorComponent
  ]

# ahora tengo: menu-superior.component.html
# donde vamos dando forma a nuestro menu superior borrando lo que no necesitamos y quedandonos únicamente
# con dni e Imc

### CREO NUEVO COMPONENTE JUEGO PPT ASOCIADO AL MODULO PRINCIPAL 
EN MENU-SUPERIOR

</li>
          <li class="nav-item">
            <a class="nav-link" routerLinkActive="active" routerLink="/ppt">Piedra Papel o Tijera</a><!--se corresponde con app routing module pongo entre comillas imc-->
</li>
ASOCIO A AAP.ROUTING...

## creamos una clase

`````
ng g class <name>
````
no la usamos queda TODO:

## VAMOS A CREAR UN COMPONENTE PARA REUTILIZARLO EN CUALQUIER PAGINA

ng g c marcador // en el modulo principal

quiero que tenga la tabla y el boton de ponerla a cero

quito la parte de la tabla y el boton de 

<app-marcador></app-marcador>esto lo pongo en el juegoppt para luego introducir el marcador

## EJERCICIO API REST
1) creado el Componente ALumnos
2) Hemos registrado su ruta
3) Lo hemos puesto en el menú superior
4) Importamos el módulo HTTP en el
módulo principal

creo un servicio
# 1.creo una carpeta services 
# 2. ````ng g s services/alumno
