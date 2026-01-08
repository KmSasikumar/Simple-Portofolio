
function showSection(sectionId) {
    let sections = document.querySelectorAll('.content section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    let selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('active');
}


// Theme Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Function to set theme
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeToggleBtn.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
}

// Set Initial Theme
if (currentTheme) {
    setTheme(currentTheme);
} else {
    // If no preference, use system default
    setTheme(prefersDarkScheme.matches ? 'dark' : 'light');
}

// Toggle Listener
themeToggleBtn.addEventListener('click', () => {
    let targetTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(targetTheme);
});
