📘 Local AI Coding Environment — Template Setup
This project documents the setup for a local, privacy‑first AI coding workflow using:

Ollama — local LLM runtime

Gemma + Qwen2.5‑Coder — local models for coding and natural language

Continue.dev — VS Code AI coding assistant

Bun — JavaScript runtime + package manager

Git — version control + GitHub push

This template is meant to be a simple starting point for local AI‑assisted development.

🚀 1. Install Ollama
Download and install Ollama:

Code
https://ollama.com/download
Verify installation:

sh
ollama --version
🤖 2. Install Local Models
Gemma (natural language)
sh
ollama pull gemma:2b
Qwen2.5‑Coder 7B (main coding model)
sh
ollama pull qwen2.5-coder:7b
Embeddings model (required for Continue.dev)
sh
ollama pull nomic-embed-text
🧩 3. Install Continue.dev (VS Code Extension)
In VS Code:

Open Extensions

Search for Continue

Install

Reload VS Code

⚙️ 4. Configure Continue.dev to Use Ollama
Create or edit:

Code
.continue/config.json
Example:

json
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
  "embeddings": {
    "provider": "ollama",
    "model": "nomic-embed-text"
  }
}
This gives you:

Qwen → coding

Gemma → natural language

Nomic → embeddings

⚡ 5. Install Bun (Windows)
Download from:

Code
https://bun.sh
If using the ZIP:

Extract

Move bun.exe to:

Code
C:\Program Files\bun\
Add that folder to System PATH

Restart VS Code and Windows Terminal

Verify:

sh
bun --version
📦 6. Initialize and Push Your Project
Inside your project folder:

sh
git init
git add .
git commit -m "Initial commit"
Add your GitHub remote:

sh
git remote add origin https://github.com/<your-username>/<repo-name>.git
Push:

sh
git push -u origin main
🧠 7. Workflow Summary
Use Continue.dev for file creation, editing, and refactoring

Use Qwen for coding tasks

Use Gemma for natural language tasks

Use Bun for runtime and package management

Use Git for version control

This template is a clean starting point for local AI‑assisted development.