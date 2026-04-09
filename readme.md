
📘 **Local AI Coding Environment — Template Setup**

This project documents the setup for **a local, privacy‑first AI coding workflow** using:

  

 - Ollama — local LLM runtime
 - Gemma + Qwen2.5‑Coder — local models for coding and natural language
 - Continue.dev — VS Code AI coding assistant
 - Bun — JavaScript runtime + package manager
 - Git — version control + GitHub push

This template is meant to be a simple starting point for **local AI‑assisted development**.
***

🚀 **1. Install Ollama**

Download and install Ollama:

    https://ollama.com/download

 
Verify installation:
  
    ollama --version
***

🤖 **2. Install Local Models**

**Gemma (natural language)**


    ollama pull gemma:2b

**Qwen2.5‑Coder 7B (main coding model)**


    ollama pull qwen2.5-coder:7b

**Embeddings model (required for Continue.dev)**


    ollama pull nomic-embed-text
***

🧩 **3. Install Continue.dev (VS Code Extension)**

In VS Code:

 - Open **Extensions** 
 - Search for **Continue** 
 - Install 
 - Reload VS Code

  ***

⚙️ **4. Configure Continue.dev to Use Ollama**

Create or edit:

  

    .continue/config.yml

  

Example:

    models:
      - title: "Qwen2.5 Coder"
        provider: "ollama"
        model: "qwen2.5-coder:7b"
    
      - title: "Gemma"
        provider: "ollama"
        model: "gemma:2b"
    
    embeddings:
      provider: "ollama"
      model: "nomic-embed-text"



This gives you:

 - **Qwen → coding**
 - **Gemma → natural language**
 - **Nomic → embeddings**
  ***

⚡ **5. Install Bun (Windows)**

Download from:

  

    https://github.com/oven-sh/bun/releases/latest/download/bun-windows-x64.zip

  

If using the ZIP:

  

 - Extract
 - Move bun.exe to:

  

 

       C:\Program Files\bun\

  

 - Add that folder to System PATH
 - Restart VS Code and Windows Terminal

  

Verify:


    bun --version
---

# BUN Template


### 📄 `package.json`
The manifest file for the Node.js/Bun project.

*   **Purpose:** Defines metadata (project name, version) and lists dependencies and scripts.
*   **Key Sections:**
    *   **dependencies**: Libraries required at runtime.
    *   **devDependencies**: Libraries needed only for development.
    *   **scripts**: Automation commands:
        *   `dev`: Runs the app (e.g., `bun run src/index.ts`).
        *   `test`: Runs the test suite (e.g., `bun test`).

---

## 📁 `src/` — Source Directory
This folder contains all the actual source code for the application.

### 📄 `src/index.ts`
*   **Purpose:** The main entry point. When you run the application, execution begins here.
*   **Content:** Initializes the application, sets up routing, and starts the server.

### 🧩 Other Modules Inside `src/`
*   **`db.ts`**: Handles database connections, pooling, and ORM logic.
*   **`routes.ts`**: Defines API endpoints (e.g., `/api/users`, `/api/products`).
*   **`utils/`**: General helper functions used across modules.

---

## 📦 Dependencies & Configuration (Root Level)

### `.env` — Environment Variables
*   **Purpose:** Stores sensitive configuration such as API keys and database passwords.
*   **Usage:** Loaded at runtime to configure the application securely. **Never commit this file to version control.**

### `.gitignore`
*   **Purpose:** Tells Git which files and folders to ignore to keep the repository clean.
*   **Typical exclusions:**
    *   `node_modules/`
    *   `.env`
    *   Build artifacts (e.g., `/dist`, `/out`)
    *   System junk (e.g., `.DS_Store`)

---

## ✨ Summary Table

| File / Folder | Function | Why It's Important |
| :--- | :--- | :--- |
| **`package.json`** | Project manifest & scripts | Tells Bun how to run and what libraries it needs. |
| **`src/`** | Application source code | Where all the logic of the application lives. |
| **`src/index.ts`** | Entry point | Where execution starts when the server boots up. |
| **`src/routes.ts`** | API definition | Maps URLs (e.g., `/users`) to request handlers. |
| **`src/db.ts`** | Data layer | Manages all interactions with external data sources. |
| **`.env`** | Secret configuration | Securely stores passwords and API keys. |
| **`.gitignore`** | Version control guide | Keeps unnecessary files out of Git. |


