# Development

Pasos para levantar la app en desazrrollo

1. Levantar la base de datos
```

docker compose up -d
```

2. Renombrar el .env.template a .env
3. Reemplazar las variables de entorno
4. Ejecutar el SEED para [crear la base de datos local](http://localhost:3000/api/seed)

# Prisma commands
```
npx prima init
npx prisma migrate dev
npx prisma generate 
```

# Prod


# Stage