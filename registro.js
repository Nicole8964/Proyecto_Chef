function generateEmail() {
    // Obtener valores del formulario
    const nombre = document.getElementById('nombre').value.trim().toLowerCase();
    const apellido = document.getElementById('apellido').value.trim().toLowerCase();
    const fecha = new Date(document.getElementById('fecha').value);

    // Verificar que todos los campos tengan valores
    if (!nombre || !apellido || !fecha) {
        alert('Por favor, complete todos los campos.');
        return;
    }
    // Formatear la fecha de nacimiento
    const year = fecha.getFullYear().toString().slice(-2); // últimos 2 dígitos del año
    const month = String(fecha.getMonth() + 1).padStart(2, '0'); // mes con dos dígitos
    const day = String(fecha.getDate()).padStart(2, '0'); // día con dos dígitos

    // Generar las partes del nombre
    const firstInitial = nombre.charAt(0); // Primera letra del nombre
    const secondNamePart = nombre.split(' ')[1] ? nombre.split(' ')[1].charAt(0) : ''; // Primera letra del segundo nombre (si existe)
    const lastNameParts = apellido.split(' ');
    const lastNameInitial = lastNameParts[0].charAt(0); // Primera letra del primer apellido
    const secondLastName = lastNameParts[1] ? lastNameParts[1].substring(0, 3) : ''; // Primeras tres letras del segundo apellido (si existe)

    // Generar el correo electrónico
    const email = `${firstInitial}${secondNamePart}${lastNameInitial}${secondLastName}${year}${month}${day}@gmail.com`;
    // Mostrar el correo generado
    document.getElementById('generatedEmail').textContent = `Correo generado: ${email}`;
}