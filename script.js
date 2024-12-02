// Función para filtrar los textos según la búsqueda
document.getElementById('searchInput').addEventListener('input', function(event) {
    const query = event.target.value.toLowerCase();
    const sections = document.querySelectorAll('section h3, section p'); // Selecciona todos los encabezados y párrafos

    sections.forEach(function(section) {
        const text = section.textContent.toLowerCase(); // Convierte el texto en minúsculas para hacer la búsqueda insensible a mayúsculas
        if (text.includes(query)) {
            section.style.display = ''; // Muestra la sección si el texto contiene la búsqueda
        } else {
            section.style.display = 'none'; // Oculta la sección si no coincide con la búsqueda
        }
    });
});
