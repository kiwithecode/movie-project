# My Project Movie

Este proyecto es una aplicación de React utilizando Vite y TypeScript para mostrar información de películas utilizando la API de The Movie Database (TMDb).

## Requisitos

- Node.js
- PNPM

### macOS

#### Instalar Node.js usando Homebrew

1. **Instalar Homebrew** (si no lo tienes instalado):
    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```

2. **Instalar Node.js**:
    ```bash
    brew install node
    ```

3. **Instalar PNPM**:
    ```bash
    npm install -g pnpm
    ```

### Linux

#### Instalar Node.js usando NodeSource

1. **Actualizar el índice de paquetes**:
    ```bash
    sudo apt update
    ```

2. **Instalar Node.js** (esto instalará la última versión LTS):
    ```bash
    curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
    sudo apt-get install -y nodejs
    ```

3. **Instalar PNPM**:
    ```bash
    npm install -g pnpm
    ```

### Windows

#### Instalar Node.js usando el Instalador de Node.js

1. **Descargar el Instalador de Node.js** desde [nodejs.org](https://nodejs.org/).
    - Elige la versión LTS recomendada y sigue las instrucciones del instalador.

2. **Instalar PNPM**:
    - Abre una terminal (PowerShell o CMD) y ejecuta:
    ```bash
    npm install -g pnpm
    ```

#### Instalar Node.js y PNPM usando Chocolatey

1. **Instalar Chocolatey** (si no lo tienes instalado):
    - Abre una terminal (PowerShell) con permisos de administrador y ejecuta:
    ```powershell
    Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
    ```

2. **Instalar Node.js y PNPM** usando Chocolatey:
    - Abre una terminal (PowerShell) con permisos de administrador y ejecuta:
    ```powershell
    choco install nodejs-lts pnpm
    ```

## Configuración

### Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto y añade tu clave de API de TMDb:



## Configuración

### Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto y añade tu clave de API de TMDb:

VITE_API_KEY=tu_clave_de_api

## Iniciar el Proyecto de Forma Local

1. Instalar dependencias:

    ```bash
    pnpm install
    ```

2. Iniciar el servidor de desarrollo:

    ```bash
    pnpm run dev
    ```

3. Abre tu navegador y ve a `http://localhost:5174`.

## Scripts Disponibles

- `pnpm run dev`: Inicia el servidor de desarrollo.
- `pnpm run build`: Compila la aplicación para producción.
- `pnpm run preview`: Previsualiza la aplicación compilada.



