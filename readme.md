# 📘 Local AI Coding Environment — Template Setup

This project documents the setup for a **privacy-first local AI coding workflow**. It leverages local Large Language Models (LLMs) for intelligence and Bun for high-performance JavaScript execution.

---

## 🛠️ Core Stack
* **Ollama**: Local LLM runtime.
* **Gemma + Qwen2.5-Coder**: Local models for chat and autocomplete.
* **Continue.dev**: Open-source VS Code AI assistant.
* **Bun**: Fast JavaScript runtime, package manager, and test runner.
* **Git**: Version control and GitHub integration.

---

## 🚀 1. Install Ollama
Download and install the Ollama runtime:
👉 https://ollama.com/download

**Verify installation:**
ollama --version

## 🤖 2. Pull Local Models
Run these commands in your terminal to download the necessary models:

* Natural Language (Chat): ollama pull gemma:2b
* Main Coding Model: ollama pull qwen2.5-coder:7b
* Embeddings: ollama pull nomic-embed-text

## 🧩 3. Install Continue.dev (VS Code)
1. Open VS Code.
2. Navigate to Extensions (Ctrl+Shift+X).
3. Search for "Continue" and click Install.
4. Reload VS Code.

## ⚙️ 4. Configure Continue.dev
Create or edit your .continue/config.json to point to your local Ollama instance:

{
  "models": [
    {
      "title": "Qwen2.5 Coder",
      "provider": "ollama",
      "model": "qwen2.5-coder:7b"
    },
    {
      "title": "Gemma",
      "provider": "ollama",
      "model": "gemma:2b"
    }
  ],
  "embeddingsProvider": {
    "provider": "ollama",
    "model": "nomic-embed-text"
  }
}

---

## ⚡ 5. Install Bun (Windows)
1. Download the latest bun-windows-x64.zip from https://github.com/oven-sh/bun/releases.
2. Extract the ZIP file.
3. Move bun.exe to a permanent folder (e.g., C:\Program Files\bun\).
4. Update PATH:
   * Search Windows for "Edit the system environment variables".
   * Click Environment Variables > Select Path in 'User variables' > Edit > New.
   * Add C:\Program Files\bun\
5. Verify:
bun --version

---

## 📁 Project Structure (BUN Template)

### 📄 package.json
The project manifest and script orchestrator.
* dependencies: Libraries required at runtime.
* devDependencies: Tools for development only.
* scripts:
    * dev: Starts the app via "bun run src/index.ts".
    * test: Executes the test suite via "bun test".

### 📁 src/ — Source Directory
* index.ts: The application entry point where execution begins.
* db.ts: Database connections and ORM logic.
* routes.ts: API endpoint definitions.
* utils/: Shared helper functions.

### 📦 Configuration
* .env: Stores sensitive keys. Never commit this file to Git.
* .gitignore: Prevents tracking of node_modules/, .env, and build artifacts.

---

## ✨ Summary Table

| File / Folder | Function | Importance |
| :--- | :--- | :--- |
| package.json | Project manifest | Defines how Bun runs and manages libraries. |
| src/ | Application source | Where the core logic of the application lives. |
| src/index.ts | Entry point | Where execution starts when the server boots up. |
| src/routes.ts | API definition | Maps URLs (e.g., /users) to handlers. |
| src/db.ts | Data layer | Manages interactions with external data. |
| .env | Secret config | Securely stores passwords and API keys. |
| .gitignore | Git rules | Keeps junk and secrets out of version control. |