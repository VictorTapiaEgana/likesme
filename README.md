
# Likes me.

 Aplicación web con uso de Node y postgres, permite agregar posts a una base de datos, una vez agregados se puede dar likes sobre la imagen y persistir los me gusta.

![](https://img.shields.io/badge/Node.js-5FA04E.svg?style=for-the-badge&logo=nodedotjs&logoColor=white) ![](https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white) ![](https://img.shields.io/badge/PostgreSQL-4169E1.svg?style=for-the-badge&logo=PostgreSQL&logoColor=white) ![](https://img.shields.io/badge/Bootstrap-7952B3.svg?style=for-the-badge&logo=Bootstrap&logoColor=white)

### Estructura de Carpetas
```
└── 📁Like Me
    └── .env    
    └── db_config.js
    └── 📁functions
        └── actualizar.js
        └── insertar.js
        └── listar.js    
    └── package.json
    └── 📁pages
        └── index.html
    └── README.md
    └── server.js
```


## Dependencias
```
  "dependencies": {
    "express": "^4.19.2",
    "pg": "^8.12.0"
  }
```

## instalacion
```
 git clone https://github.com/VictorTapiaEgana/likesme.git
 npm install
 npm start
```

## Script DASE DE DATOS:
```
CREATE DATABASE likeme
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
```

## Script de la TABLA:
```
CREATE TABLE IF NOT EXISTS public.posts
(
    id integer NOT NULL DEFAULT nextval('posts_id_seq'::regclass),
    usuario character varying(25) COLLATE pg_catalog."default",
    url character varying(1000) COLLATE pg_catalog."default",
    descripcion character varying(255) COLLATE pg_catalog."default",
    likes integer
)
```

## Definir un arcvhivo .ENV con las siguientes constantes:
```
SERVER_PORT=3010
DB_HOST='localhost'
DB_NAME='likeme'
DB_USER='postgres'
DB_PASS= TU CONTRASEÑA
DB_PORT=5432
```

## Screenshots

![](https://raw.githubusercontent.com/VictorTapiaEgana/likesme/master/github/index.png)

![](https://raw.githubusercontent.com/VictorTapiaEgana/likesme/master/github/portada.png)