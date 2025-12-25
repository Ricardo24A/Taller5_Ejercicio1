# RN Ejercicio 1 — Navegación con Tabs

## Cómo ejecutar el proyecto (local)
1. Instalar dependencias del sistema:
   - Node.js (versión LTS)
   - Expo CLI (global)

2. Crear y entrar al proyecto:
   - `npx create-expo-app RN_Ejercicio_1`
   - `cd RN_Ejercicio_1`

3. Instalar librerías de navegación (Tabs):
   - `npm install @react-navigation/native`
   - `npx expo install react-native-screens react-native-safe-area-context`
   - `npm install @react-navigation/bottom-tabs`

4. Ejecutar:
   - `npx expo start`
   - Opcional (web): `npm run web`

> Para probar en celular: abre Expo Go y escanea el QR del servidor de Expo. 

---

## Qué librerías instaló
- `@react-navigation/native` (núcleo de navegación)
- `@react-navigation/bottom-tabs` (menú inferior por pestañas)
- `react-native-screens` (mejora rendimiento de pantallas)
- `react-native-safe-area-context`
- Opcional para íconos: `@expo/vector-icons` 

---

## Qué aprendió (3 a 8 líneas)
Aprendí a estructurar un proyecto básico en React Native con Expo y a identificar el rol de `App` como componente raíz. Implementé navegación inferior por Tabs para cambiar entre pantallas. Organicé pantallas en archivos separados y apliqué estilos con `StyleSheet` y layout con Flexbox. También practiqué estado local con `useState` en una pantalla (contador) para entender el re-renderizado. 

---

## Qué es una pantalla
Una **pantalla** es un componente que se registra en el sistema de navegación y representa una vista completa de la app (por ejemplo: Home, Perfil, Acerca).

---

## Qué es un Tab
Un **Tab** es una pestaña del menú inferior (tab bar) que permite cambiar entre pantallas registradas. Cada tab está asociado a una pantalla (componente) y normalmente muestra un texto y/o un ícono.

---

## Qué hace `NavigationContainer`
`NavigationContainer` envuelve la app y actúa como contenedor raíz de la navegación: mantiene el estado de navegación (qué pantalla está activa) y conecta la app con React Navigation para que el cambio entre pantallas funcione correctamente.
