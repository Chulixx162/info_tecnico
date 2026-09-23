/**
 * Script específico para la Sección 2: Introducción y Objetivos
 * Proyecto: HuilaTour Conecta
 */

document.addEventListener("DOMContentLoaded", function () {
    console.log("Sección 2 cargada correctamente: Introducción y Objetivos.");

    // Efecto visual dinámico para resaltar las filas de los objetivos específicos al cargar
    const objectiveRows = document.querySelectorAll(".table-wrapper tbody tr");
    objectiveRows.forEach((row, index) => {
        row.style.opacity = "0";
        row.style.transform = "translateX(-15px)";
        row.style.transition = `all 0.35s ease ${index * 0.04}s`;
        
        setTimeout(() => {
            row.style.opacity = "1";
            row.style.transform = "translateX(0)";
        }, 120);
    });
});