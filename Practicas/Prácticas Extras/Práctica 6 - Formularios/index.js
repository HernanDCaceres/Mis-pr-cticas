document.addEventListener("DOMContentLoaded", function() {
    const invitados = ["Pedro", "Luis", "Antonio", "Silvia", "Marta"];
    const selectInvitados = document.querySelector('select[name="invitados"]');
    const invitadosContainer = document.getElementById('invitadosContainer');
    const invitadosAgregados = new Set(); // Usamos un Set para llevar un registro de los invitados agregados
    
    // Generar las opciones del select a partir del array
    invitados.forEach(function(invitado) {
        const option = document.createElement("option");
        option.value = invitado;
        option.textContent = invitado;
        selectInvitados.appendChild(option);
    });

    // Agregar evento click al botón "Añadir"
    document.querySelector('input[type="button"]').addEventListener("click", function() {
        // Obtener el valor seleccionado del select
        const selectedValue = selectInvitados.value;
        
        // Si se ha seleccionado un invitado y no está en la lista de invitados agregados
        if (selectedValue !== "" && !invitadosAgregados.has(selectedValue)) {
            // Crear un botón para el invitado
            const invitadoButton = document.createElement("button");
            invitadoButton.textContent = selectedValue;
            invitadoButton.classList.add("invitado-button");

            // Agregar evento click para eliminar el invitado
            invitadoButton.addEventListener("click", function() {
                // Eliminar el botón al hacer clic en él
                invitadosContainer.removeChild(invitadoButton);
                // También eliminamos el invitado del Set
                invitadosAgregados.delete(selectedValue);
            });

            // Agregar el botón al contenedor de invitados
            invitadosContainer.appendChild(invitadoButton);
            
            // Agregar el invitado al Set de invitados agregados
            invitadosAgregados.add(selectedValue);

            // Limpiar el valor seleccionado del select
            selectInvitados.value = "";
        } else {
            // Mostrar una alerta si se intenta agregar un invitado duplicado
            alert("¡Este invitado ya ha sido agregado!");
        }
    });
});

