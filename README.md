# Sistema De Gestión Para La Fundacion DownIsUp
DownIsUp es una fundación dedicada al seguimiento y apoyo en terapias para chicos con síndrome de Down. Hemos desarrollado un sistema de gestión integral para optimizar y facilitar las operaciones diarias de la fundación.


## Tecnologias utilizadas
#### BackEnd
      - MySQL
      - JavaScript
      - Node JS
      - Express JS 

#### FrontEnd
      - HTML
      - CSS
      - JavaScript
      - React
      - Next.js
      - TailwindCSS


## Instalacion y Ejecucion del Sistema:
  - Node.js (v14.x o superior)
  - Express JS
  - MySQL (gestor de base de datos)
  


## Configuracion del back-end
  
1. **Clonar el repositorio:**

```bash
    git clone git@github.com:TomiAltero/downisup.git 
    git checkout features-backend
    cd backend
```


2. **Instalar dependecias**  

```bash
    npm install
```

3. **Configurar el archivo .env**

  Copiar el archivo .env.example y renombrarlo a .env. Configurar las variables de entorno para la base de datos y otros servicios necesarios.


4. **Crear la Base de datos para en tu cuenta local para que te lo detecte el sistema**
   ```bash
   mysql -u <usuario> -p
   Ingrese su contraseña

   mysql> CREATE DATABASE IF NOT EXISTS downisupDB 
   ```


6. Migrar la Base de Datos (en la carpeta raiz)

```bash
  cd src/
  npx sequelize-cli db:migrate
```


## Configuracion del front-end

1. **Clonar el repositorio:**

```bash
    git checkout features/front-end
    cd front-end
```

2. **Instalar dependecias**  

```bash
    npm install
```

3. **Iniciar el servidor de desarrollo**

```bash
    npm run dev
```





### Integrantes 

- Altero Tomas <a href="#"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" height="15" width="30"/></a>
- Bergliaffa Nicolas <a href="#"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" height="15" width="30"/></a>
- Bisio Facundo <a href="#"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"  height="15" width="30"/></a>
- Ferreyra Octavio <a href="#"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"  height="15" width="30"/></a>
- Lucero Octavio <a href="#"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"  height="15" width="30"/></a>
- Montini Francisco <a href="#"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"  height="15" width="30"/></a>
- Puig Hermes <a href="#"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"  height="15" width="30"/></a>
- Ravetti Mateo <a href="#"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"  height="15" width="30"/></a>
