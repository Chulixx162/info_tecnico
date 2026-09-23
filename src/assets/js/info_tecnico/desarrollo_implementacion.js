/**
 * Función global para manejar el sistema de pestañas (Tabs) interactivas
 * @param {Event} evt - Evento del clic
 * @param {string} tabId - ID del contenedor que se debe mostrar
 */
function switchTab(evt, tabId) {
    // Obtener todos los contenidos de pestañas dentro de la sección actual o general
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    // Obtener todos los botones de pestañas y quitarles la clase active
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Mostrar la pestaña seleccionada y activar su botón correspondiente
    const targetTab = document.getElementById(tabId);
    if (targetTab) {
        targetTab.classList.add('active');
    }
    
    if (evt && evt.currentTarget) {
        evt.currentTarget.classList.add('active');
    }
}