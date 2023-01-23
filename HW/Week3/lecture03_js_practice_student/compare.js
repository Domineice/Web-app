// 6213129 Posawat Tangon
function comparenum(a, b) {
  var comparision, difference;
  if (parseInt(a) > parseInt(b)) {
    comparision = "A>B";
    difference = a - b;
  } else if (parseInt(a) < parseInt(b)) {
    comparision = "A<B";
    difference = b - a;
  } else {
    comparision = "A=B";
    difference = 0;
  }
  document.getElementById("c").value = comparision;
  document.getElementById("d").value = Math.abs(difference);
}
