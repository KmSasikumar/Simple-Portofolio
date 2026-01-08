
# ⚡ K. Sasikumar's Portfolio

![Status](https://img.shields.io/badge/Status-Active-success?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)
[![Live Demo](https://img.shields.io/badge/Demo-Live_Site-success?style=flat-square&logo=google-chrome)](https://kmsasikumar.github.io/Simple-Portofolio/)

> A high-performance, single-page personal portfolio website designed to professionally showcase academic achievements and technical projects. Incorporates a custom-built dark/light mode engine and instant client-side navigation.

## 🚀 Features

| Feature | Description |
| :--- | :--- |
| **🌓 Smart Theming** | Auto-detects system preferences and remembers user choice via `LocalStorage`. |
| **⚡ Instant Nav** | JS-based single-page navigation eliminates page reloads. |
| **📱 Fully Responsive** | Fluid layout adapting to Mobile, Tablet, and Desktop. |
| **🎨 Animated UI** | Smooth transitions and premium hover effects. |

## 🛠️ Technical Stack

| Category | Technology | Usage |
| :--- | :--- | :--- |
| **Languages** | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | Core structure, styling, and logic. |
| **Architecture** | **SPA (Vanilla JS)** | Zero-dependency routing architecture. |
| **State** | **LocalStorage** | Client-side preference persistence. |

## 🧩 Architecture & Logic

### Theme Toggle Logic
How the application intelligently handles user preferences and system defaults.

```mermaid
graph TD
    A([Start: Page Load]) --> B{Check LocalStorage}
    B -- "theme=dark/light" --> C[Apply Saved Theme]
    B -- "null" --> D{Check System Pref}
    D -- "prefers-color-scheme: dark" --> E[Apply Dark Mode]
    D -- "Default" --> F[Apply Light Mode]
    
    C & E & F --> G[Render UI]
    
    H([User Clicks Toggle]) --> I{Current Theme?}
    I -- "Dark" --> J[Set Light Mode]
    I -- "Light" --> K[Set Dark Mode]
    J & K --> L[Update LocalStorage]
    L --> M[Update UI Attributes]
```

### SPA Navigation Flow
How the application switches sections instantly without refreshing.

```mermaid
sequenceDiagram
    participant User
    participant NavBar
    participant ScriptJS
    participant DOM
    
    User->>NavBar: Clicks "Projects"
    NavBar->>ScriptJS: Call showSection('projects')
    ScriptJS->>DOM: Query all <section> elements
    ScriptJS->>DOM: removeClass('active') from ALL
    ScriptJS->>DOM: addClass('active') to #projects
    DOM-->>User: Display Projects Section instantly
```

## 💻 Setup & Usage

Since this is a static site, no build step is required!

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/KmSasikumar/Simple-Portofolio.git
    ```
2.  **Open locally:**
    Simply open the `index.html` file in your preferred web browser.

## 👨‍💻 Author
**K. Sasi Kumar**
* 🎓 VIT Bhopal University
* 📧 Kommamani012@gmail.com
* 📱 +91 8985037606
