const roles = ["Data Scientist", "Data Analyst", "ML Engineer", "DL Engineer"];
let i = 0, j = 0, isDeleting = false, current = "";

function typeEffect() {
  const element = document.getElementById("typing");

  if (!isDeleting && j <= roles[i].length) {
    current = roles[i].substring(0, j++);
  } else if (isDeleting && j >= 0) {
    current = roles[i].substring(0, j--);
  }

  element.textContent = current;

  if (!isDeleting && j === roles[i].length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % roles.length;
    setTimeout(typeEffect, 500);
  } else {
    setTimeout(typeEffect, isDeleting ? 40 : 120);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);
