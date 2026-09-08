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
            })
            .catch(error => {
                console.error("Error cargando el sidebar:", error);
            });
    }
});

// function initHamburgerMenu() {
//     const toggleBtn = document.getElementById("toggle-sidebar-btn");
//     const navbar = document.getElementById("sidebar-navbar");
//     const mainContent = document.querySelector(".main-content");

//     if (toggleBtn && navbar) {
//         toggleBtn.addEventListener("click", function () {
//             navbar.classList.toggle("collapsed");
//             if (mainContent) {
//                 mainContent.classList.toggle("expanded");
//             }
            
//             // Cambiar el icono del botón (Hamburguesa <-> X)
//             const icon = toggleBtn.querySelector("i");
//             if (navbar.classList.contains("collapsed")) {
//                 icon.classList.remove("fa-xmark");
//                 icon.classList.add("fa-bars");
//             } else {
//                 icon.classList.remove("fa-bars");
//                 icon.classList.add("fa-xmark");
//             }
//         });
//     }
// }

function highlightActiveLink() {
    const currentPath = window.location.pathname.split("/").pop();
    const currentHash = window.location.hash;
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        link.classList.remove("active");
        const linkHref = link.getAttribute("href");

        if (currentPath === "modelado_datos.html" && linkHref.includes("modelado_datos.html")) {
            link.classList.add("active");
        } else if ((currentPath === "index.html" || currentPath === "") && currentHash && linkHref.includes(currentHash)) {
            link.classList.add("active");
        } else if ((currentPath === "index.html" || currentPath === "") && !currentHash && linkHref.includes("#resumen")) {
            link.classList.add("active");
        }
    });
}