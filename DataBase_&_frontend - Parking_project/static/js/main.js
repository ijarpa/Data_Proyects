// document.getElementById('reservation-form').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const formElements = this.elements;
//     const parkingId = formElements['parking-id'].value;
//     const startDate = formElements['start-date'].value;
//     const endDate = formElements['end-date'].value;
//     const status = formElements['status'].value;

//     // Enviar los datos al servidor
//     fetch('/api/reservation', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             parkingId: parkingId,
//             startDate: startDate,
//             endDate: endDate,
//             status: status
//         })
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     });
// });

// Obtener los estacionamientos
fetch('/api/parking')
    .then(response => response.json())
    .then(data => {
        const parkingList = document.getElementById('parking-list');
        data.forEach(parking => {
            console.log(data);

            const li = document.createElement('li');
            li.textContent = `ID: ${parking.id}, Número: ${parking.parking_number}, Estado: `;
        
            const select = document.createElement('select');
            select.name = 'status';
        
            const option0 = document.createElement('option');
            option0.value = '0';
            option0.textContent = '0';
            select.appendChild(option0);
        
            const option1 = document.createElement('option');
            option1.value = '1';
            option1.textContent = '1';
            select.appendChild(option1);
        
            // Asignar el valor del estado desde la base de datos
            select.value = parking.status;
        
            li.appendChild(select);

            // Agregar un input para el ID del estacionamiento
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = 'parking-id';
            input.value = parking.id;
            li.appendChild(input);

            // Agregar un input para la fecha de inicio
            const startDateInput = document.createElement('input');
            startDateInput.type = 'datetime-local';
            startDateInput.name = 'start-date';
            li.appendChild(startDateInput);

            // Agregar un input para la fecha de fin
            const endDateInput = document.createElement('input');
            endDateInput.type = 'datetime-local';
            endDateInput.name = 'end-date';
            li.appendChild(endDateInput);

            parkingList.appendChild(li);
        });
    });


