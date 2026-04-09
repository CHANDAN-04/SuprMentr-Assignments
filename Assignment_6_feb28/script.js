let students = [];

function addStudent() {
  let name = document.getElementById("name").value;
  let m1 = Number(document.getElementById("m1").value);
  let m2 = Number(document.getElementById("m2").value);
  let m3 = Number(document.getElementById("m3").value);

  if (name === "" || m1 === 0 || m2 === 0 || m3 === 0) {
    alert("Please enter all fields");
    return;
  }

  let student = {
    name: name,
    marks: [m1, m2, m3],
  };

  students.push(student);

  displayStudents();

  clearInputs();
}

function displayStudents() {
  let table = document.getElementById("studentTable");

  table.innerHTML = "";

  students.forEach((student, index) => {
    let total = student.marks.reduce((sum, mark) => sum + mark, 0);

    let avg = (total / student.marks.length).toFixed(2);

    let grade = getGrade(avg);

    let row = `
<tr>
<td>${student.name}</td>
<td>${student.marks.join(", ")}</td>
<td>${total}</td>
<td>${avg}</td>
<td>${grade}</td>
<td>
<button class="delete" onclick="deleteStudent(${index})">Delete</button>
</td>
</tr>
`;

    table.innerHTML += row;
  });
}

function deleteStudent(index) {
  students.splice(index, 1);

  displayStudents();
}

function getGrade(avg) {
  if (avg >= 90) return "A";
  if (avg >= 75) return "B";
  if (avg >= 60) return "C";
  if (avg >= 50) return "D";

  return "F";
}

function clearInputs() {
  document.getElementById("name").value = "";
  document.getElementById("m1").value = "";
  document.getElementById("m2").value = "";
  document.getElementById("m3").value = "";
}
