
let students = [
    { name: "Eman", grade: 0 },
    { name: "Ahmed", grade: 90 },
    { name: "Mona", grade: 50 }
];

function addStudent(event) {
    event.preventDefault();

    // Get form values
    let name = document.getElementById("studentName").value.trim();
    let grade = document.getElementById("studentGrade").value.trim();
    let nameError = document.getElementById("nameError");
    nameError.style.color = "white";
    nameError.style.fontSize = "15px";
    nameError.style.backgroundColor = "red";
    let gradeError = document.getElementById("gradeError");
    gradeError.style.color = "white";
    gradeError.style.fontSize = "15px";
    gradeError.style.backgroundColor = "red";

    // Reset error messages
    nameError.textContent = "";
    gradeError.textContent = "";

    // Validation for Student Name
    if (name === "") {
        nameError.textContent = "Student Name cannot be empty";
        return false;
    }

    // Check if name already exists (case-insensitive)
    if (students.some(student => student.name.toLowerCase() === name.toLowerCase())) {
        nameError.textContent = "Student Name already exists";
        return false;
    }

    // Capitalize first letter of name
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

    // Validation for Student Grade
    let gradeNum = parseFloat(grade);
    if (isNaN(gradeNum)) {
        gradeError.textContent = "Grade must be a number";
        return false;
    }
    if (gradeNum < 0 || gradeNum > 100) {
        gradeError.textContent = "Grade must be between 0 and 100";
        return false;
    }

    // Add student to array
    students.push({ name: name, grade: gradeNum });

    // Refresh table
    renderTable();
    return false;
}

function renderTable() {
    let tbody = document.getElementById("studentTableBody");
    tbody.innerHTML = "";

    students.forEach(student => {
        let row = document.createElement("tr");
        let className = student.grade < 60 ? "failed" : "success";
        row.innerHTML = `
            <td class="${className}">${student.name}</td>
            <td class="${className}">${student.grade}</td>
            <td><button onclick="deleteRow(this)">Delete</button></td>
        `;
        tbody.appendChild(row);
    });

    // Apply filter after rendering
    filterTable();
}

function deleteRow(button) {
    let row = button.parentElement.parentElement;
    let name = row.cells[0].textContent;
    students = students.filter(student => student.name !== name);
    renderTable();
}

function sortTable() {
    let sortOption = document.getElementById("sortOption").value;
    if (sortOption === "name") {
        students.sort((a, b) => a.name.localeCompare(b.name));
    } else {
        students.sort((a, b) => a.grade - b.grade);
    }
    renderTable();
}

function filterTable() {
    let filterOption = document.getElementById("filterOption").value;
    let tbody = document.getElementById("studentTableBody");
    let rows = tbody.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
        let grade = parseFloat(rows[i].cells[1].textContent);
        if (filterOption === "ALL") {
            rows[i].style.display = "";
        } else if (filterOption === "failed" && grade < 60) {
            rows[i].style.display = "";
        } else if (filterOption === "success" && grade >= 60) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}
