function iller() {
  var date = new Date();
  var presentData = date.getFullYear();
  console.log(presentData);
  for (var i = presentData; i >= 1990; i--) {
    var newOption = document.createElement("option");
    var neqliyyatIli = document.getElementById("neqliyyatIli");
    neqliyyatIli.appendChild(newOption);
    newOption.value = i;
    newOption.text = i;
  }
}

function vergiHesabla() {
  //   var neqliyyatTipi;
  var neqliyyatGucu;
  var elvin;
  var odenilecekVergi;
  var i;
  var neqliyyatTipi = document.getElementById("neqliyyatTipi").value;
  if (neqliyyatTipi === "masin") {
    var odenilecekVergi = 100;
  } else if (neqliyyatTipi === "avtobus") {
    var odenilecekVergi = 200;
  }
  var matorGucuDugmeler = document.getElementsByName("matorGucu");
  for (var i = 0; i < matorGucuDugmeler.length; i++) {
    if (matorGucuDugmeler[i].checked) {
      neqliyyatGucu = matorGucuDugmeler[i].value;
    }
  }

  for (let i = 0; i < document.getElementById("neqliyyatIli").length; i++) {
    if (document.getElementById("neqliyyatIli").options[i].selected) {
      elvin = document.getElementById("neqliyyatIli").options[i].value;
    }
    console.log(elvin);
  }

  if (elvin < 2005) {
    odenilecekVergi -= 100;
  }

  if (neqliyyatGucu === "1000a.g-1500a.g") {
    odenilecekVergi += 50;
  } else if (neqliyyatGucu === "1501a.g-2000a.g") {
    odenilecekVergi += 100;
  }
  console.log(neqliyyatGucu);
  document.getElementById("netice").innerHTML =
    "Odenilmeli olan vergi" + odenilecekVergi;
}
