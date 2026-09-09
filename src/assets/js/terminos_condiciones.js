/**
 * Función global para manejar el sistema de pestañas (Tabs) interactivas en las vistas
 * @param {Event} evt - Evento del clic
 * @param {string} tabId - ID del contenedor que se debe mostrar
 */
function switchTab(evt, tabId) {
    // Ocultar todos los contenidos de pestañas dentro de la sección actual
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    // Desactivar todos los botones de pestañas
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Mostrar el contenido de la pestaña seleccionada y activar su botón correspondiente
    const targetTab = document.getElementById(tabId);
    if (targetTab) {
        targetTab.classList.add('active');
    }
    
    if (evt && evt.currentTarget) {
        evt.currentTarget.classList.add('active');
    }
}