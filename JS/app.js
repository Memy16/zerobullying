const toggleThemeButton = document.getElementById('toggleTheme');
        const themeStylesheet = document.getElementById('themeStylesheet');

        // Al cargar la página, verifica el tema guardado
        document.addEventListener('DOMContentLoaded', () => {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                themeStylesheet.href = savedTheme;
                toggleThemeButton.innerText = savedTheme.includes('dark') ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro';
            }
        });

        toggleThemeButton.addEventListener('click', () => {
            if (themeStylesheet.href.includes('morph')) {
                themeStylesheet.href = 'https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/morph/bootstrap-dark.min.css';
                toggleThemeButton.innerText = 'Cambiar a Modo Claro';
                localStorage.setItem('theme', 'https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/morph/bootstrap-dark.min.css');
            } else {
                themeStylesheet.href = 'https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/morph/bootstrap.min.css';
                toggleThemeButton.innerText = 'Cambiar a Modo Oscuro';
                localStorage.setItem('theme', 'https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/morph/bootstrap.min.css');
            }
        });