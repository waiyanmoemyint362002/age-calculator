const display = document.getElementById("display");
const button = document.querySelector("#calc");

button.addEventListener("click", function () {
  const d1 = Number(document.querySelector("#dd").value);
  const m1 = Number(document.querySelector("#mm").value);
  const y1 = Number(document.querySelector("#yy").value);
  if (d1 && m1 && y1) {
    let date = new Date();

    let d2 = date.getDate();
    let m2 = date.getMonth() + 1;
    let y2 = date.getFullYear();
    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (d1 > d2) {
      d2 += month[m2 - 1];
      m2 -= 1;
    }

    if (m1 > m2) {
      m2 += 12;

      y2 -= 1;
    }
    let d = d2 - d1;
    let m = m2 - m1;
    let y = y2 - y1;

    display.innerHTML = `${y} years , ${m} months and ${d} days`;
  } else {
    alert("Fill All Input");
  }
});
