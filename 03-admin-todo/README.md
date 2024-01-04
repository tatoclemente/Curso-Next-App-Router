# Development

Pasos para levantar la app en desazrrollo

1. Levantar la base de datos
```

docker compose up -d
```

2. Crear una copia de el .env.template y renombrarlo a .env
3. Reemplazar las variables de entorno
4. Ejecutar el comando ```npm install```
5. Ejcutar el comando ```npm run dev```
6. Ejecutar estos comandos de prisma
```
npx prisma migrate dev
npx prisma generate
```
7. Ejecutar el SEED para [crear la base de datos local](http://localhost:3000/api/seed)

# Prisma commands
```
npx prima init
npx prisma migrate dev
npx prisma generate 
```

# Prod


# Stage