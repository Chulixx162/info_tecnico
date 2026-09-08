// Cambio de Pestañas Principales (DER, Casos de Uso, Actividades)
function switchDataTab(tabId) {
    const tabs = document.querySelectorAll('.data-tab-content');
    const buttons = document.querySelectorAll('.subtab-btn');

    tabs.forEach(tab => tab.classList.remove('active'));
    buttons.forEach(btn => btn.classList.remove('active'));

    document.getElementById(`tab-${tabId}`).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Filtro para mostrar Diagramas de Actividades específicos
function filterActivityDiagram(selectedRf) {
    const activityCards = document.querySelectorAll('.activity-card');

    activityCards.forEach(card => {
        const cardRf = card.getAttribute('data-rf');
        
        if (selectedRf === 'all' || cardRf === selectedRf) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}