/**
 * Control de Pestañas (Tabs) para la Sección 3: Metodología de Desarrollo
 * Proyecto: HuilaTour Conecta
 */

function switchTab(evt, tabId) {
    // Ocultar todos los contenidos de pestañas
    const tabContents = document.querySelectorAll(".tab-content");
    tabContents.forEach(content => {
        content.classList.remove("active");
    });

    // Desactivar todos los botones de pestañas
    const tabButtons = document.querySelectorAll(".tab-btn");
    tabButtons.forEach(btn => {
        btn.classList.remove("active");
    });

    // Mostrar el contenido de la pestaña seleccionada y activar su botón
    const targetTab = document.getElementById(tabId);
    if (targetTab) {
        targetTab.classList.add("active");
    }
    evt.currentTarget.classList.add("active");
}