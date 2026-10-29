# A&G Capacitación

Plataforma web para la promoción y gestión de cursos, capacitaciones y servicios de desarrollo humano integral. Este proyecto está desarrollado con Next.js y está orientado a ofrecer una experiencia moderna de marca para una institución educativa/consultora, con páginas informativas, catálogo de cursos y un panel administrativo de demostración.

## Descripción general

La aplicación presenta una solución de sitio web institucional para una empresa de capacitación y consultoría. Su propósito es:

- Mostrar la identidad y propuesta de valor de la marca.
- Publicar cursos y programas formativos.
- Presentar información sobre la empresa, su misión, visión y valores.
- Facilitar contacto con los usuarios mediante formularios.
- Brindar un panel administrativo demo para gestionar configuración y navegación.

## Funcionalidades principales

- Landing page con hero, propuesta de valor, cursos destacados y testimonios.
- Catálogo de cursos con cards, duración, instructor y categoría.
- Sección “Nosotros” con misión, visión, valores y equipo.
- Página de contacto con formulario simulado y datos de atención.
- Login administrativo con credenciales de demostración.
- API de configuración en memoria con caché para inicializar la app desde un origen centralizado.
- Sistema visual basado en Tailwind CSS y componentes reutilizables de shadcn/ui.

## Arquitectura del proyecto

La estructura del repositorio está organizada bajo el patrón de Next.js App Router:

```text
ag-web/
├── app/
│   ├── admin/
│   │   ├── configuracion/
│   │   ├── cursos/
│   │   ├── dashboard/
│   │   └── page.tsx
│   ├── api/
│   │   └── config/
│   │       ├── [section]/
│   │       └── route.ts
│   ├── contacto/
│   ├── cursos/
│   ├── nosotros/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   ├── admin-layout.tsx
│   ├── navbar.tsx
│   ├── footer.tsx
│   ├── hero.tsx
│   ├── featured-courses.tsx
│   ├── value-proposition.tsx
│   ├── testimonials.tsx
│   └── ...
├── contexts/
│   └── config-context.tsx
├── hooks/
├── lib/
│   ├── cache-service.ts
│   └── utils.ts
├── public/
├── styles/
├── .gitignore
├── components.json
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── README.md
└── ...
```

### Capas principales

1. Frontend con App Router
   - La carpeta `app/` contiene las rutas públicas, la vista principal y la estructura del layout compartido.
   - Las páginas tienen enfoque de marketing digital para educación/capacitación.

2. Componentes reutilizables
   - `components/` concentra UI reutilizable: navbar, footer, cards de cursos, formularios y componentes base de la librería visual.
   - `components/ui/` incluye componentes creados sobre Radix + shadcn, como botón, dropdown, tabs, diálogo, toast, input, select y card.

3. Contexto global y estado
   - `contexts/config-context.tsx` gestiona la configuración centralizada de la app, incluida la caché local y la lectura desde la API.

4. API y lógica de backend
   - `app/api/config/route.ts` expone un endpoint HTTP para obtener y actualizar la configuración de la plataforma.
   - `lib/cache-service.ts` implementa un sistema simple de caché en memoria, útil para simular backend y evitar llamadas repetitivas.

5. Diseño visual
   - `app/globals.css` y `tailwind.config.ts` establecen la identidad gráfica del proyecto con estilos reutilizables y un tema visual claro.

## Stack tecnológico

El proyecto usa un conjunto moderno de herramientas para una aplicación web profesional:

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui
- Radix UI
- Lucide React
- class-variance-authority
- clsx
- Zod
- React Hook Form

### Paquetes principales

Los paquetes más relevantes del proyecto son:

- `next`: framework principal para renderizado, routing y API routes.
- `react` y `react-dom`: librería principal de interfaz de usuario.
- `tailwindcss`: estilizado basado en utility classes.
- `@radix-ui/*`: primitives accesibles para menús, dialogs, selects, switch, etc.
- `lucide-react`: iconografía.
- `react-hook-form` + `zod`: validación de formularios.
- `next-themes`: soporte para temas visuales.
- `recharts`: gráficos y métricas (utilizados en paneles o dashboards).

## Requisitos previos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- Node.js 18 o superior
- npm o pnpm
- Git

## Cómo ejecutar la aplicación

### 1. Clona el repositorio

```bash
git clone https://github.com/YaelHuerta1/ag-web.git
cd ag-web
```

### 2. Instala las dependencias

```bash
npm install
```

### 3. Ejecuta el proyecto en modo de desarrollo

```bash
npm run dev
```

Luego abre en tu navegador:

```text
http://localhost:3000
```

### 4. Construcción para producción

```bash
npm run build
npm run start
```

### 5. Validación de código

```bash
npm run lint
```

## Credenciales de demostración

El panel de administración incluye un acceso simulando autenticación local:

- Usuario: `admin`
- Contraseña: `admin123`

Ruta:

```text
/admin
```

## Observaciones de la implementación

Este proyecto está pensado como una demo de una web institucional/educativa con enfoque comercial y administrativo. Aunque presenta una base sólida para producción, aún se apoya en:

- una simulación de configuración en memoria,
- almacenamiento local para caché,
- comportamiento frontend de demo,
- autenticación mock para el panel administrativo.

Para una versión real en producción, sería recomendable conectar la aplicación a una base de datos, implementar autenticación segura y migrar las rutas administrativas a un sistema con usuarios reales y permisos.

## Licencia

Este proyecto no especifica una licencia explícita en el repositorio. Revisa la configuración del proyecto antes de reutilizarlo en un entorno productivo o comercial.

## Conclusión

A&G Capacitación es una web moderna orientada a la promoción y gestión de programas de desarrollo humano y capacitación. La combinación de Next.js, TypeScript, Tailwind y componentes reutilizables permite mantener una arquitectura escalable, una interfaz limpia y una base sólida para futuras ampliaciones como pagos, CRM, cursos online o paneles de administración más complejos.
