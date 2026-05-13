# React Task Manager

Una aplicación de gestión de tareas desarrollada en React que permite crear, visualizar y eliminar tareas con diferentes prioridades.

## Características

- ✅ Crear nuevas tareas con título, responsable, descripción y prioridad
- 📋 Visualizar lista de tareas con diferentes prioridades (baja, media, alta)
- 🗑️ Eliminar tareas
- 🎨 Interfaz moderna con Bootstrap 4
- 📱 Diseño responsivo

## Tecnologías Utilizadas

- **React** 18.3.1
- **React DOM** 18.3.1
- **React Scripts** 5.0.1
- **Bootstrap** 4.1.1 (CDN)
- **Web Vitals** 5.2.0
- **Testing Library** para pruebas unitarias

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/GioGatDev/React-task-manager.git
cd React-task-manager
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm start
```

4. Abre tu navegador en [http://localhost:3000](http://localhost:3000)

## Scripts Disponibles

- `npm start` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm test` - Ejecuta las pruebas
- `npm run eject` - Expone la configuración de Create React App (irreversible)

## Estructura del Proyecto

```
src/
├── components/
│   ├── Tareasform.js    # Formulario para crear tareas
│   └── TaskList.js      # Lista de tareas
├── App.js              # Componente principal
├── App.css             # Estilos principales
├── index.js            # Punto de entrada
└── tareas.json         # Datos iniciales de tareas
```

## Funcionalidades

### Crear Tarea
- Título (requerido)
- Responsable (requerido)
- Descripción (requerido)
- Prioridad: baja, media, alta

### Visualizar Tareas
- Cards con información completa
- Badges de color según prioridad:
  - 🔵 Baja: azul
  - 🟡 Media: amarillo
  - 🔴 Alta: rojo

### Eliminar Tareas
- Botón de eliminar en cada tarea
- Actualización inmediata de la lista

## Contribución

1. Fork el proyecto
2. Crea una branch para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT.

## Autor

- **Giovanni Silva** - [GioGatDev](https://github.com/GioGatDev)
