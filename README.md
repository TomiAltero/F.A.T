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
    cd backend
    cd backend-downisup
```


2. **Instalar dependecias**  

```bash
    npm install
```

3. **Configurar el archivo .env**
  
    - Crear un archivo .env dentro del proyecto backend/backend-downisup
    - Copiar esta estructura y completar los datos para poder acceder a la base de datos y tomar su configuracion

    ```bash
      DB_HOST = ingrese su host
      DB_NAME = ingrese el nombre de la base de datos
      DB_USER = ingrese su usuario
      DB_PASS = ingrese su contraseña
      DB_PORT = ingrese el puerto
      PORT = ingrese el puerto en el que se va a ejecutar el servidor
    ```


<br>

4. **Crear la Base de datos para en tu cuenta local para que te lo detecte el sistema**
   
```bash
mysql -u <usuario> -p
Ingrese su contraseñ
mysql> CREATE DATABASE IF NOT EXISTS downisupDB 
```


5. Migrar la Base de Datos (en la carpeta raiz)
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
