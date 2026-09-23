/**
 * Script específico para la Sección 1: Información General del Informe
 * Proyecto: HuilaTour Conecta
 */

document.addEventListener("DOMContentLoaded", function () {
    console.log("Sección 1 cargada correctamente: Información General del Informe.");

    // Aquí puedes agregar lógica interactiva exclusiva de la sección 1 si lo requieres,
    // por ejemplo, efectos en las filas de la tabla de documentos considerados.
    const tableRows = document.querySelectorAll(".table-wrapper tbody tr");
    tableRows.forEach((row, index) => {
        row.style.opacity = "0";
        row.style.transform = "translateY(10px)";
        row.style.transition = `all 0.3s ease ${index * 0.05}s`;
        
        setTimeout(() => {
            row.style.opacity = "1";
            row.style.transform = "translateY(0)";
        }, 100);
    });
});