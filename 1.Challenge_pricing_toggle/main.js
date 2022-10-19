const btn = document.getElementById("selector-bar");
btn.addEventListener("click", change);

function change() {
  var monthPayment = document.getElementsByTagName("h3");
  var annualPayment = document.getElementsByTagName("h4");
  var i;
  var n;

  for (i = 0; i < monthPayment.length; i++) {
    for (n = 0; n < annualPayment.length; n++) {
      if (monthPayment[i].style.display === "none") {
        monthPayment[i].style.display = "block";
        annualPayment[i].style.display = "none";
        btn.style.justifyContent = "flex-end";
      } else {
        monthPayment[i].style.display = "none";
        annualPayment[i].style.display = "block";
        btn.style.justifyContent = "flex-start";
      }
    }
  }
}
