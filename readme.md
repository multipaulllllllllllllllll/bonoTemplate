
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
***




