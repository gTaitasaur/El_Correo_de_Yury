function fetchDataFromDatabase() {
    // Datos de ejemplo
    return [
        { nombres: "Juan", apellidos: "Mir", rut: "12345678-9", sexo: "Masculino", cargo: "Jede de RR.HH", area: "Área 1", departamento: "Departamento B" },
    ];
}

function populateTableWithData(data) {
    const tableBody = document.getElementById('employeesTable').getElementsByTagName('tbody')[0];

    data.forEach(employee => {
        let row = tableBody.insertRow();
        row.innerHTML = `
        <td>${employee.nombres}</td>
        <td>${employee.apellidos}</td>
        <td>${employee.rut}</td>
        <td>${employee.sexo}</td>
        <td>${employee.cargo}</td>
        <td>${employee.area}</td>
        <td>${employee.departamento}</td>
        `;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const data = fetchDataFromDatabase();
    populateTableWithData(data);
});
