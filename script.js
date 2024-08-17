
function saveStudent() {
    // Get form values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const course = document.getElementById('course').value;
    const email = document.getElementById('email').value;

    // Create a new row
    const table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // Insert cells
    newRow.insertCell(0).innerHTML = name;
    newRow.insertCell(1).innerHTML = age;
    newRow.insertCell(2).innerHTML = course;
    newRow.insertCell(3).innerHTML = gender;
    newRow.insertCell(4).innerHTML = email;

    // Add delete button
    const deleteCell = newRow.insertCell(5);
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.className = 'delete-btn';
    deleteButton.onclick = function() {
        table.deleteRow(newRow.rowIndex - 1);
    };
    deleteCell.appendChild(deleteButton);

    // Reset the form
    document.getElementById('studentForm').reset();
}
