document.addEventListener("DOMContentLoaded", function () {
    const sidebarContainer = document.getElementById("sidebar-container");
    
    if (sidebarContainer) {
        // CORREGIDO: Apunta directamente a la raíz absoluta del servidor donde sacaste el sidebar.html
        fetch("/sidebar.html")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status} al intentar cargar sidebar.html`);
                }
                return response.text();
            })
            .then(data => {
                sidebarContainer.innerHTML = data;
                
                // Inicialización de funciones interactivas
                initDropdowns();       // Desplegables del menú
                highlightActiveLink(); // Marca la página activa y despliega su grupo
                initHamburgerMenu();   // Botón de menú hamburguesa
                initPageLoader();      // Loader
            })
            .catch(error => {
                console.error("Error cargando el sidebar:", error);
            });
    }
});

// Control del Loader
function initPageLoader() {
    const loader = document.getElementById("page-loader");

    if (loader) {
        setTimeout(() => {
            loader.classList.add("hidden");
        }, 500);

        const navLinks = document.querySelectorAll(".nav-links a");
        navLinks.forEach(link => {
            link.addEventListener("click", function (e) {
                const targetHref = this.getAttribute("href");
                const currentPath = window.location.pathname.split("/").pop();

                if (targetHref && targetHref !== "#" && !targetHref.startsWith("javascript") && targetHref !== currentPath) {
                    loader.classList.remove("hidden");
                }
            });
        });
    }
}

// Control de Acordeones / Desplegables
function initDropdowns() {
    const dropdownBtns = document.querySelectorAll(".dropdown-btn");

    dropdownBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            this.classList.toggle("active");
            const dropdownContent = this.nextElementSibling;
            
            if (dropdownContent) {
                dropdownContent.classList.toggle("show");
            }
        });
    });
}

// Resaltar Enlace Activo
function highlightActiveLink() {
    let currentPath = window.location.pathname.split("/").pop();

    if (currentPath === "") {
        currentPath = "index.html";
    }

    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        link.classList.remove("active");
        const linkHref = link.getAttribute("href");

        if (linkHref && (linkHref === currentPath || linkHref.endsWith(currentPath))) {
            link.classList.add("active");

            const parentDropdown = link.closest(".dropdown-container");
            if (parentDropdown) {
                parentDropdown.classList.add("show");
                const parentBtn = parentDropdown.previousElementSibling;
                if (parentBtn && parentBtn.classList.contains("dropdown-btn")) {
                    parentBtn.classList.add("active");
                }
            }
        }
    });
}

// Menú Hamburguesa
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