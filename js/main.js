function uncheck() {
  var rd = document.getElementsByName("r1");
  var i = 0;
  while (i < rd.length) {
    if (rd[i].checked) {
      rd[i].checked = false;
      break;
    }
    i++;
  }
}
function gettip() {
  var custom = document.getElementById("custom").value;
  var rd = document.getElementsByName("r1");
  var i = 0;
  while (i < rd.length) {
    if (rd[i].checked) {
      return parseFloat(rd[i].value);
    }
    i++;
  }

  if (custom != null && !isNaN(custom)) {
    return parseFloat(custom);
  } else {
    console.log("NOPE::");
  }
}

function reset() {
  uncheck();
  document.getElementById("price1").innerHTML = "$0.00";
  document.getElementById("price2").innerHTML = "$0.00";
  document.getElementById("bi1").value = 0;
  document.getElementById("np").value = 0;
  document.getElementById("custom").value = 0;
}
function getres() {
  var bill = parseFloat(document.getElementById("bi1").value);
  var np = parseFloat(document.getElementById("np").value);
  var t = 0,
    total = 0;
  if (bill && np) {
    if (gettip()) {
      t = (bill * (gettip() / 100)) / np;
      total = bill / np + t;
    } else {
      total = bill / np;
    }
    t1 = t.toString();
    total1 = total.toString();
    if (t1.indexOf(".") > 0) t1 = t1.substr(0, t1.indexOf(".") + 3);
    if (total1.indexOf(".") > 0)
      total1 = total1.substr(0, total1.indexOf(".") + 3);

    document.getElementById("price1").innerHTML = "$" + t1;
    document.getElementById("price2").innerHTML = "$" + total1;
  }
}
