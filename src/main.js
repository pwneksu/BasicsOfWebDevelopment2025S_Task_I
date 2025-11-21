const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const html = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    html.classList.add('dark');
    themeIcon.textContent = ''; // sun icon
}

themeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');

    const isDark = html.classList.contains('dark');
    themeIcon.textContent = isDark ? '' : ''; // sun : moon
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Flash animation for anchor links
window.addEventListener('hashchange', () => {
    const targetId = window.location.hash.slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        targetElement.classList.remove('flash-animation');
        void targetElement.offsetWidth; // Force reflow
        targetElement.classList.add('flash-animation');

        setTimeout(() => {
            targetElement.classList.remove('flash-animation');
        }, 1200);
    }
});

// Trigger flash on initial page load if hash is present
if (window.location.hash) {
    const event = new Event('hashchange');
    window.dispatchEvent(event);
}