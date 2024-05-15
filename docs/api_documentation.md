# Documentacion de la API


## Introduccion
La API proporciona endpoints para la gestión de usuarios en el sistema. Utiliza autenticación basada en tokens para garantizar la seguridad de las operaciones.

### Base URL
El endpont para acceder a la API es:
```
localhost:8000
```


### EndPoints
#### Obtener Usuarios

```
GET /usuarios
```
Descripcion: Obtiene una lista de usuarios registrados en el sistema.


#### Crear Usuario

```
POST /usuarios
```

Descripcion: Crea un nuevo usuario en el sistema.


#### Obtener Usuario por ID

```
GET /usuarios/{id}
```

Descripcion: Obtiene un usuario por su ID.


#### Actualizar Usuario

```
PUT /usuarios/{id}
```

Descripcion: Actualiza un usuario por su ID.


#### Eliminar Usuario

```
DELETE /usuarios/{id}
```