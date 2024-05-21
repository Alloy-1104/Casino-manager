choice_status_radio = document.getElementsByName("form-radio-status");
form_student_detail = document.getElementById("form-student-detail");
form_input_grade = document.getElementById("form-input-grade");
form_input_class = document.getElementById("form-input-class");


choice_status_radio.forEach(e => {
  e.addEventListener("click", () => {
    if (e.value == "student") {
      form_student_detail.style.opacity = "1";
      form_input_grade.removeAttribute("readonly");
      form_input_class.removeAttribute("readonly");
      if (form_input_grade.value == "-") {
        form_input_grade.value = ""
      }
      if (form_input_class.value == "-") {
        form_input_class.value = "";
      }    
    } else if (e.value == "general") {
      form_student_detail.style.opacity = "0.5";
      form_input_grade.setAttribute("readonly","");
      form_input_class.setAttribute("readonly","");
      if (form_input_grade.value == "") {
        form_input_grade.value = "-";
      }
      if (form_input_class.value == "") {
        form_input_class.value = "-";
      }
    }
  });  
});