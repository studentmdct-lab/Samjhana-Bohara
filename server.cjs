var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_fs = __toESM(require("fs"), 1);
var import_vite = require("vite");
var import_genai = require("@google/genai");
var import_dotenv = __toESM(require("dotenv"), 1);
import_dotenv.default.config();
var app = (0, import_express.default)();
var PORT = 3e3;
app.use(import_express.default.json());
var documents = [
  {
    id: "doc-1",
    title: "Project Apollo Launch Strategy",
    content: `# Project Apollo: Go-To-Market & Engineering Strategy

## 1. Executive Summary
Project Apollo represents our next-generation visual rendering platform designed to reduce latency by 45% and improve rendering fidelity across distributed edge environments. This document outlines the roadmap, marketing milestones, and system architecture for a Q4 2026 launch.

## 2. Core Pillars
* **Edge-Native Architecture**: Decentralized rendering nodes delivering sub-15ms frame-times globally.
* **Intelligent Query Optimization**: Predictive caching layer built on historic asset requests.
* **Low-Code Visual Composer**: A web-based visual editor targeting creators and system designers.

## 3. Milestones
- [x] Phase 1: Core Engine Alpha Architecture validation (Completed May 2026)
- [/] Phase 2: Multi-Region Testing & Performance Benchmarks (Target: Aug 2026)
- [ ] Phase 3: Developer Relations SDK & Closed Beta Launch (Target: Oct 2026)
- [ ] Phase 4: General Public Release & Integration Suite (Target: Dec 2026)

---
*Created by Product Management \u2022 Shared with Workspace Engineering*`,
    updatedAt: new Date(Date.now() - 36e5 * 2).toISOString(),
    // 2 hours ago
    category: "Strategy"
  },
  {
    id: "doc-2",
    title: "AI-First Design System Guidelines",
    content: `# AI-First Design System Guidelines

## 1. Introduction
This guide defines our layout, color, and typographical choices for building interfaces that incorporate LLM features. We focus on visual calm, preventing information overload, and prioritizing desktop-first precision.

## 2. Visual Palette
- **Primary Light**: Cosmic Slate (\`#1e293b\`), Soft Grey (\`#f8fafc\`)
- **Accent Theme**: Radiant Violet (\`#7c3aed\`)
- **Warning States**: Coral Crimson (\`#ef4444\`)

## 3. Typographical Scale
We pair **Inter** for standard body copy with **Space Grotesk** for display headers, and **JetBrains Mono** for status flags and metadata layouts.

*Note: Avoid low-contrast elements or text colors that fade under 4.5:1 ratio.*`,
    updatedAt: new Date(Date.now() - 36e5 * 12).toISOString(),
    // 12 hours ago
    category: "Guidelines"
  },
  {
    id: "doc-3",
    title: "Synapse Architecture Architecture",
    content: `# Synapse Intelligent Workspace Architecture

## 1. Overview
Synapse uses a highly modular, decoupled Full-Stack layout featuring:
- **Client**: Single-Page Application (SPA) built with React 19, Tailwind CSS, and Framer Motion.
- **Server**: Express Node.js environment proxying AI requests and tracking workspace nodes.
- **AI Core**: Google Gemini 3.5 API integrated server-side with strict API safety guidelines.

## 2. Data Persistence Strategy
We use transient state management synced to server-side memory combined with responsive client-side \`localStorage\` backups to maintain an offline-first capability.`,
    updatedAt: new Date(Date.now() - 36e5 * 24).toISOString(),
    // 24 hours ago
    category: "Technical"
  }
];
var tasks = [
  {
    id: "task-1",
    title: "Implement Edge asset prefetching",
    description: "Write the logic to proactively cache client visual assets on CDN edge nodes based on user session histories and geographical access points.",
    status: "in_progress",
    priority: "high",
    tags: ["Engineering", "Performance"],
    dueDate: "2026-08-15",
    subtasks: [
      { id: "sub-1", title: "Establish cache-key hash algorithm", done: true },
      { id: "sub-2", title: "Write Edge Worker routing patterns", done: false },
      { id: "sub-3", title: "Profile hit-ratio on simulated staging clusters", done: false }
    ]
  },
  {
    id: "task-2",
    title: "Optimize landing page image sizes",
    description: "Compress and generate multi-resolution modern AVIF formats for all hero illustrations to decrease load times on mobile devices.",
    status: "todo",
    priority: "low",
    tags: ["Design", "Marketing"],
    dueDate: "2026-07-30",
    subtasks: [
      { id: "sub-4", title: "Export WebP assets from Figma", done: true },
      { id: "sub-5", title: "Add responsive picture srcsets to main index", done: false }
    ]
  },
  {
    id: "task-3",
    title: "Audit database security queries",
    description: "Review ORM query structures and parameter bindings to verify absolute immunity to injection attacks across all high-throughput tables.",
    status: "review",
    priority: "high",
    tags: ["Security", "Database"],
    dueDate: "2026-07-25",
    subtasks: [
      { id: "sub-6", title: "Deploy static analysis scanner", done: true },
      { id: "sub-7", title: "Perform manual review on dynamic query assemblies", done: true }
    ]
  },
  {
    id: "task-4",
    title: "Draft Phase 3 documentation",
    description: "Formulate developer quickstart guides, API references, and migration steps for partner beta testers using the Apollo SDK.",
    status: "done",
    priority: "medium",
    tags: ["Content", "SDK"],
    dueDate: "2026-07-10",
    subtasks: [
      { id: "sub-8", title: "Document configuration settings", done: true },
      { id: "sub-9", title: "Publish live swagger interactive endpoints", done: true }
    ]
  }
];
var DB_FILE = import_path.default.join(process.cwd(), "db_store.json");
function loadDb() {
  try {
    if (import_fs.default.existsSync(DB_FILE)) {
      const fileContent = import_fs.default.readFileSync(DB_FILE, "utf-8");
      if (fileContent.trim()) {
        const parsed = JSON.parse(fileContent);
        if (parsed.documents) documents = parsed.documents;
        if (parsed.tasks) tasks = parsed.tasks;
      }
    }
  } catch (err) {
    console.error("Local DB file restore failed, keeping initial templates:", err.message);
  }
}
function saveDb() {
  try {
    import_fs.default.writeFileSync(DB_FILE, JSON.stringify({ documents, tasks }, null, 2), "utf-8");
  } catch (err) {
    console.error("Local DB file persistence update failed:", err.message);
  }
}
var systemLogs = [
  { id: "log-1", type: "info", message: "Synapse full-stack server successfully bootstapped.", timestamp: new Date(Date.now() - 6e4 * 10).toISOString() },
  { id: "log-2", type: "info", message: "Connected to Gemini 3.5 API gateway.", timestamp: new Date(Date.now() - 6e4 * 9).toISOString() },
  { id: "log-3", type: "info", message: "Initialized default workspace document index (3 active nodes loaded).", timestamp: new Date(Date.now() - 6e4 * 8).toISOString() }
];
var totalTokensUsed = 48200;
function addLog(type, message) {
  systemLogs.unshift({
    id: `log-${Date.now()}`,
    type,
    message,
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  });
  if (systemLogs.length > 50) systemLogs.pop();
}
var aiClient = null;
function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY" || apiKey.trim() === "") {
    return null;
  }
  if (!aiClient) {
    aiClient = new import_genai.GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build"
        }
      }
    });
  }
  return aiClient;
}
app.get("/api/documents", (req, res) => {
  res.json(documents);
});
app.post("/api/documents", (req, res) => {
  const { title, content, category } = req.body;
  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }
  const newDoc = {
    id: `doc-${Date.now()}`,
    title,
    content: content || `# ${title}

Start writing here...`,
    updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
    category: category || "General"
  };
  documents.push(newDoc);
  saveDb();
  addLog("info", `Created new document: "${title}"`);
  res.status(210).json(newDoc);
});
app.put("/api/documents/:id", (req, res) => {
  const { id } = req.params;
  const { title, content, category, aiSummary } = req.body;
  const docIndex = documents.findIndex((d) => d.id === id);
  if (docIndex === -1) {
    return res.status(404).json({ error: "Document not found" });
  }
  const updatedDoc = {
    ...documents[docIndex],
    title: title !== void 0 ? title : documents[docIndex].title,
    content: content !== void 0 ? content : documents[docIndex].content,
    category: category !== void 0 ? category : documents[docIndex].category,
    aiSummary: aiSummary !== void 0 ? aiSummary : documents[docIndex].aiSummary,
    updatedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
  documents[docIndex] = updatedDoc;
  saveDb();
  res.json(updatedDoc);
});
app.delete("/api/documents/:id", (req, res) => {
  const { id } = req.params;
  const docIndex = documents.findIndex((d) => d.id === id);
  if (docIndex === -1) {
    return res.status(404).json({ error: "Document not found" });
  }
  const deletedDoc = documents[docIndex];
  documents = documents.filter((d) => d.id !== id);
  saveDb();
  addLog("warning", `Deleted document: "${deletedDoc.title}"`);
  res.json({ success: true, id });
});
app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});
app.post("/api/tasks", (req, res) => {
  const { title, description, priority, tags, dueDate, status } = req.body;
  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }
  const newTask = {
    id: `task-${Date.now()}`,
    title,
    description: description || "",
    status: status || "todo",
    priority: priority || "medium",
    tags: tags || [],
    dueDate: dueDate || void 0,
    subtasks: []
  };
  tasks.push(newTask);
  saveDb();
  addLog("info", `Created task: "${title}"`);
  res.status(201).json(newTask);
});
app.put("/api/tasks/:id", (req, res) => {
  const { id } = req.params;
  const { title, description, status, priority, tags, dueDate, subtasks } = req.body;
  const taskIndex = tasks.findIndex((t) => t.id === id);
  if (taskIndex === -1) {
    return res.status(404).json({ error: "Task not found" });
  }
  const updatedTask = {
    ...tasks[taskIndex],
    title: title !== void 0 ? title : tasks[taskIndex].title,
    description: description !== void 0 ? description : tasks[taskIndex].description,
    status: status !== void 0 ? status : tasks[taskIndex].status,
    priority: priority !== void 0 ? priority : tasks[taskIndex].priority,
    tags: tags !== void 0 ? tags : tasks[taskIndex].tags,
    dueDate: dueDate !== void 0 ? dueDate : tasks[taskIndex].dueDate,
    subtasks: subtasks !== void 0 ? subtasks : tasks[taskIndex].subtasks
  };
  tasks[taskIndex] = updatedTask;
  saveDb();
  res.json(updatedTask);
});
app.delete("/api/tasks/:id", (req, res) => {
  const { id } = req.params;
  const taskIndex = tasks.findIndex((t) => t.id === id);
  if (taskIndex === -1) {
    return res.status(404).json({ error: "Task not found" });
  }
  const deletedTask = tasks[taskIndex];
  tasks = tasks.filter((t) => t.id !== id);
  saveDb();
  addLog("warning", `Deleted task: "${deletedTask.title}"`);
  res.json({ success: true, id });
});
app.get("/api/admin/metrics", (req, res) => {
  const apiUsageChart = [
    { name: "Jul 15", tokens: 5400, calls: 42 },
    { name: "Jul 16", tokens: 7200, calls: 58 },
    { name: "Jul 17", tokens: 6100, calls: 49 },
    { name: "Jul 18", tokens: 8900, calls: 71 },
    { name: "Jul 19", tokens: 10400, calls: 88 },
    { name: "Jul 20", tokens: 8300, calls: 67 },
    { name: "Jul 21", tokens: totalTokensUsed % 1e4, calls: 54 }
  ];
  res.json({
    totalUsers: 14,
    activeDocs: documents.length,
    pendingTasks: tasks.filter((t) => t.status !== "done").length,
    aiTokensUsed: totalTokensUsed,
    systemStatus: "healthy",
    recentLogs: systemLogs,
    apiUsageChart
  });
});
app.post("/api/ai/assist", async (req, res) => {
  const { prompt, content, action } = req.body;
  if (!action) {
    return res.status(400).json({ error: "Action is required" });
  }
  addLog("info", `Triggered AI Assist action: "${action}"`);
  let systemInstruction = "You are a professional full-stack product engineer and communication expert working in an workspace. Help rewrite, analyze, or expand text precisely and neatly, matching elegant display standards.";
  let requestPrompt = "";
  switch (action) {
    case "summarize":
      systemInstruction = "You are an expert editor. Synthesize the provided document into a clear, 3-bullet core summary with a single-sentence takeaway. Be brief, punchy, and highly informative. Keep your response short and elegant.";
      requestPrompt = `Please summarize the following document:

${content}`;
      break;
    case "correct":
      systemInstruction = "You are a meticulous copywriter. Correct any grammatical errors, spelling typos, or stylistic awkwardness in the provided text while keeping its primary tone and meaning intact. Return ONLY the polished text, with no explanations or conversational preamble.";
      requestPrompt = `Correct this text:

${content}`;
      break;
    case "translate":
      const targetLang = prompt || "Spanish";
      systemInstruction = `You are a fluent multilingual localizer. Translate the provided text into ${targetLang} with accurate cultural phrasing and professional grammar. Return ONLY the translated text, preserving any markdown titles and code structures intact.`;
      requestPrompt = `Translate to ${targetLang}:

${content}`;
      break;
    case "changeTone":
      const targetTone = prompt || "professional";
      systemInstruction = `You are an executive editor. Adapt the tone of the provided text to be explicitly ${targetTone}. Ensure structural honesty, clarity, and precision. Return ONLY the modified text, preserving markdown headers.`;
      requestPrompt = `Rewrite in a ${targetTone} tone:

${content}`;
      break;
    case "brainstorm":
      systemInstruction = "You are a creative partner. Propose 5 actionable, smart, and contextual brainstorm bullets, feature extensions, or visual enhancements based on the document topic. Format nicely with markdown bullets.";
      requestPrompt = `Brainstorm next steps based on this context:

${content}

Additional guidance: ${prompt || "Focus on engineering scaling and UI polishing."}`;
      break;
    case "insertCode":
      systemInstruction = "You are a software architect. Write a clean, highly optimized, and type-safe TypeScript code snippet matching the requested feature. Wrap inside clean markdown code-blocks with syntax highlighting. Add useful inline comments only.";
      requestPrompt = `Write TypeScript/React code for: ${prompt || "A custom hooks for throttling resizing."}`;
      break;
    default:
      requestPrompt = `${prompt}

Context:
${content}`;
  }
  try {
    const ai = getGeminiClient();
    if (!ai) {
      addLog("warning", `API key is missing. Yielding simulated AI response.`);
      let simulatedResponse = "";
      if (action === "summarize") {
        simulatedResponse = `### Executive Summary
- **Decoupled Architecture**: Synapse coordinates a local React client synchronized to a modular Express backend to achieve persistent data state and visual speed.
- **Gemini Powered Assist**: The system proxies and guides user intents directly to the latest Gemini 3.5 model.
- **High-Contrast Design**: Clean font pairings and responsive grids ensure mobile compatibility and an intuitive layout.`;
      } else if (action === "correct") {
        simulatedResponse = content.replace(/the/gi, "the").replace(/architecture/gi, "Architecture") + "\n\n*Simulated Correction (Configure your GEMINI_API_KEY for live models)*";
      } else if (action === "translate") {
        simulatedResponse = `## Traducci\xF3n Simulada (${prompt})

Este es un texto traducido simulado para el espacio de trabajo Synapse. Para ver traducciones precisas en tiempo real, proporcione una clave de API de Gemini en la barra de configuraci\xF3n.

Contenido original:
${content.substring(0, 100)}...`;
      } else if (action === "changeTone") {
        simulatedResponse = `## Modified Tone (${prompt})

[Adjusted version of your document text to convey a ${prompt} stance. Configure your Gemini secret keys to execute this in real time over our premium models.]

Original text excerpt:
${content.substring(0, 150)}...`;
      } else if (action === "brainstorm") {
        simulatedResponse = `### Actionable Brainstorm (Simulated Mode)
- **Implement client-side query debounce** to reduce network roundtrips during search actions.
- **Integrate fluid Drag-and-Drop libraries** to support custom columns on the task board.
- **Incorporate rich PDF export channels** to share documents with external clients.
- **Support collapsible structural folders** to organize larger content databases.
- **Add granular user roles** for customized workspace analytics.`;
      } else {
        simulatedResponse = `### Simulated Output
This is a simulation because no GEMINI_API_KEY was found in your workspace settings.

Prompt details:
- Action: ${action}
- Input character count: ${content?.length || 0}`;
      }
      totalTokensUsed += 320;
      return res.json({ text: simulatedResponse, simulated: true });
    }
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: requestPrompt,
      config: {
        systemInstruction,
        temperature: 0.7
      }
    });
    const responseText = response.text || "No response received from model.";
    const tokens = Math.ceil((requestPrompt.length + responseText.length) / 4);
    totalTokensUsed += tokens;
    addLog("info", `AI response successfully returned. Consumed ~${tokens} tokens.`);
    res.json({ text: responseText, simulated: false });
  } catch (error) {
    console.error("Gemini API Assist error:", error);
    addLog("error", `AI execution failed: ${error.message}`);
    res.status(500).json({ error: error.message || "An error occurred with the Gemini SDK." });
  }
});
app.post("/api/ai/breakdown", async (req, res) => {
  const { title, description } = req.body;
  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }
  addLog("info", `Proposing Smart Breakdown for task: "${title}"`);
  const systemInstruction = `You are a technical project manager. Given a high-level development task or user story, break it down into exactly 3 or 4 practical, specific, and actionable implementation sub-tasks. You MUST return your output as a raw JSON array matching this exact schema:
  
  [
    { "title": "Sub-task title description 1", "done": false },
    { "title": "Sub-task title description 2", "done": false },
    ...
  ]
  
  Return ONLY the raw JSON block without markdown code blocks, preamble, or trailing commentaries.`;
  const prompt = `Task: "${title}"
Description: "${description || "No description provided."}"`;
  try {
    const ai = getGeminiClient();
    if (!ai) {
      addLog("warning", "API key missing. Returning simulated task breakdown.");
      const mockSubtasks = [
        { title: `Detail specs & initial mockups for "${title}"`, done: false },
        { title: `Write core integration logic and unit tests`, done: false },
        { title: `Perform system sanity checks and visual reviews`, done: false }
      ];
      totalTokensUsed += 150;
      return res.json({ subtasks: mockSubtasks, simulated: true });
    }
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: import_genai.Type.ARRAY,
          items: {
            type: import_genai.Type.OBJECT,
            properties: {
              title: { type: import_genai.Type.STRING },
              done: { type: import_genai.Type.BOOLEAN }
            },
            required: ["title", "done"]
          }
        },
        temperature: 0.2
      }
    });
    const text = response.text || "[]";
    const subtasks = JSON.parse(text.trim());
    totalTokensUsed += 210;
    addLog("info", `Generated ${subtasks.length} subtasks dynamically using Gemini.`);
    res.json({ subtasks, simulated: false });
  } catch (error) {
    console.error("Smart task breakdown error:", error);
    addLog("error", `Task breakdown generation failed: ${error.message}`);
    res.status(500).json({ error: error.message || "An error occurred during breakdown generation." });
  }
});
app.post("/api/ai/chat", async (req, res) => {
  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Messages array is required." });
  }
  addLog("info", "Executing workspace chat question.");
  const docContext = documents.map((d) => `- Document: "${d.title}" (Category: ${d.category})
  Content Sample: ${d.content.substring(0, 300)}...`).join("\n\n");
  const taskContext = tasks.map((t) => `- Task: "${t.title}"
  Status: ${t.status.toUpperCase()} | Priority: ${t.priority.toUpperCase()}
  Description: ${t.description}`).join("\n");
  const systemInstruction = `You are "Synapse AI", a brilliant workspace-aware assistant deeply integrated into the user's notes and task boards.
  
  You have FULL real-time visibility into their workspace documents and tasks:
  
  CURRENT DOCUMENTS IN WORKSPACE:
  ${docContext}
  
  CURRENT TASKS IN WORKSPACE:
  ${taskContext}
  
  Guidance:
  - When the user asks about their notes, tasks, plans, or upcoming milestones, cross-reference this context directly. Speak naturally, reference document titles or tasks explicitly when appropriate.
  - If they ask general engineering, math, or copyediting questions, answer them accurately and masterfully.
  - Keep your tone supportive, highly professional, analytical, and articulate.
  - Use elegant markdown elements (headings, bullet points, code blocks) to organize your response cleanly.`;
  try {
    const ai = getGeminiClient();
    if (!ai) {
      addLog("warning", "API key missing. Generating simulated workspace chat response.");
      const lastMsg = messages[messages.length - 1]?.text || "";
      let simulatedReply = "";
      if (lastMsg.toLowerCase().includes("doc") || lastMsg.toLowerCase().includes("note") || lastMsg.toLowerCase().includes("apollo") || lastMsg.toLowerCase().includes("strategy")) {
        simulatedReply = `I see you have 3 documents active in your workspace right now:
        
1. **Project Apollo Launch Strategy** (Strategy): Focuses on a CDN edge engine release targeting Q4 2026.
2. **AI-First Design System Guidelines** (Guidelines): Focuses on premium spacing, contrast rules, and Inter / Space Grotesk pairings.
3. **Synapse Architecture** (Technical): Highlights our SPA React + Express Node bundle with Gemini servers.

Is there a specific plan or engineering task you'd like me to formulate or write code for?`;
      } else if (lastMsg.toLowerCase().includes("task") || lastMsg.toLowerCase().includes("kanban") || lastMsg.toLowerCase().includes("todo")) {
        simulatedReply = `Based on your Kanban board, you have **${tasks.filter((t) => t.status !== "done").length} tasks pending** across multiple swimlanes:

- \u23F3 **In Progress**: *${tasks.find((t) => t.status === "in_progress")?.title || "None"}* (Priority: High)
- \u{1F4DD} **Review**: *${tasks.find((t) => t.status === "review")?.title || "None"}* (Priority: High)
- \u{1F4E5} **To Do**: *${tasks.find((t) => t.status === "todo")?.title || "None"}* (Priority: Low)

Would you like me to help you brainstorm next steps or write subtasks for any of these?`;
      } else {
        simulatedReply = `Hello! I am Synapse, your workspace co-pilot. I am monitoring your **${documents.length} notes** and **${tasks.length} active tasks**.

You can ask me to:
- Synthesize plans or compile strategies from your documents.
- Draft next engineering sprints or break down task backlogs.
- Write sample code or outline technical guidelines.

*(To query the live Gemini 3.5-flash model, please add your GEMINI_API_KEY inside the workspace Settings secret panel)*`;
      }
      totalTokensUsed += 450;
      return res.json({ text: simulatedReply, simulated: true });
    }
    const chatInstance = ai.chats.create({
      model: "gemini-3.5-flash",
      config: {
        systemInstruction,
        temperature: 0.7
      }
    });
    let responseText = "";
    if (messages.length === 1) {
      const resp = await chatInstance.sendMessage({ message: messages[0].text });
      responseText = resp.text || "No response received.";
    } else {
      const historyPrompt = messages.map((m) => `${m.sender === "user" ? "User" : "Assistant"}: ${m.text}`).join("\n\n");
      const resp = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: `${historyPrompt}

Assistant:`,
        config: {
          systemInstruction,
          temperature: 0.7
        }
      });
      responseText = resp.text || "No response received.";
    }
    const tokens = Math.ceil(responseText.length / 4) + 600;
    totalTokensUsed += tokens;
    addLog("info", `Workspace chat completed. Consumed ~${tokens} tokens.`);
    res.json({ text: responseText, simulated: false });
  } catch (error) {
    console.error("Workspace chat error:", error);
    addLog("error", `Workspace Chat execution failed: ${error.message}`);
    res.status(500).json({ error: error.message || "An error occurred with the Gemini chat SDK." });
  }
});
async function startServer() {
  loadDb();
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Synapse workspace running on http://localhost:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
