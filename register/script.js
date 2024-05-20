status_elements = document.getElementsByName("student-or-general");
status_radio = document.getElementById("status-container");
student_detail = document.getElementById("student-detail");

status_radio.addEventListener("click",() => {changed_status()})

function changed_status() {
  person_status = ""
  status_elements.forEach(e => {
    if (e.checked) {
      person_status = e.value;
    }
  });
  if (person_status == "student") {
    student_detail.style.display = "flex";
  } else {
    student_detail.style.display = "none";
  }
}



