document.addEventListener("DOMContentLoaded", function () {
    const sidebarContainer = document.getElementById("sidebar-container");
    
    if (sidebarContainer) {
        fetch("sidebar.html")
            .then(response => {
                if (!response.ok) {
                    throw new Error("No se pudo cargar el archivo sidebar.html");
                }
                return response.text();
            })
            .then(data => {
                sidebarContainer.innerHTML = data;
                highlightActiveLink();
                initHamburgerMenu();
                initPageLoader(); // Control del loader
            })
            .catch(error => {
                console.error("Error cargando el sidebar:", error);
            });
    }
});

// Control de la animación de carga
function initPageLoader() {
    const loader = document.getElementById("page-loader");

    if (loader) {
        // Ocultar el loader con una leve demora para apreciar la animación
        setTimeout(() => {
            loader.classList.add("hidden");
        }, 500);

        // Mostrar el loader al hacer clic en cualquier enlace del menú para transiciones suaves
        const navLinks = document.querySelectorAll(".nav-links a");
        navLinks.forEach(link => {
            link.addEventListener("click", function (e) {
                const targetHref = this.getAttribute("href");
                const currentPath = window.location.pathname.split("/").pop();

                // Si se dirige a otra página, muestra el loader antes de navegar
                if (targetHref && targetHref !== currentPath) {
                    loader.classList.remove("hidden");
                }
            });
        });
    }
}

// Control del desplegable del menú hamburguesa
function initHamburgerMenu() {
    const toggleBtn = document.getElementById("toggle-sidebar-btn");
    const navbar = document.getElementById("sidebar-navbar");
    const mainContent = document.querySelector(".main-content");

    if (toggleBtn && navbar) {
        toggleBtn.addEventListener("click", function () {
            navbar.classList.toggle("collapsed");
            if (mainContent) {
                mainContent.classList.toggle("expanded");
            }
            
            const icon = toggleBtn.querySelector("i");
            if (icon) {
                if (navbar.classList.contains("collapsed")) {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                } else {
                    icon.classList.remove("fa-bars");
                    icon.classList.add("fa-xmark");
                }
            }
        });
    }
}

// Resaltar el enlace según la vista actual
function highlightActiveLink() {
    let currentPath = window.location.pathname.split("/").pop();

    if (currentPath === "") {
        currentPath = "index.html";
    }

    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        link.classList.remove("active");
        const linkHref = link.getAttribute("href");

        if (linkHref === currentPath) {
            link.classList.add("active");
        }
    });
}