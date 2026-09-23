function switchTab(evt, tabId) {
            // Ocultar todos los contenidos de pestañas
            const tabContents = document.querySelectorAll(".tab-content");
            tabContents.forEach(content => {
                content.style.display = "none";
            });

            // Remover la clase active de todos los botones
            const tabButtons = document.querySelectorAll(".tab-btn");
            tabButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            // Mostrar la pestaña actual y activar el botón presionado
            const targetTab = document.getElementById(tabId);
            if (targetTab) {
                targetTab.style.display = "block";
            }
            evt.currentTarget.classList.add("active");
        }

        // Inicializar mostrando solo la primera pestaña y ocultando las demás por defecto
        document.addEventListener("DOMContentLoaded", function() {
            const tabContents = document.querySelectorAll(".tab-content");
            tabContents.forEach((content, index) => {
                if (index !== 0) {
                    content.style.display = "none";
                }
            });
        });