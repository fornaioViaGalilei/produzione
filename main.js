function paneProdotto() {
  return new Promise((resolve, reject) => {
    let materiePrime = parseFloat(
      document.getElementById("materiePrime").value
    );
    let farina = parseFloat(document.getElementById("farina").value);
    console.log(materiePrime, farina, materiePrime / farina);
    let paneProdotto = (materiePrime / farina) * 1.25;
    paneProdotto = Math.round((paneProdotto + Number.EPSILON) * 100) / 100;
    document.getElementById("totaleKg").value = paneProdotto;
    resolve();
  });
}
function costoMedio() {
  let materiePrime = parseFloat(document.getElementById("materiePrime").value);
  let energia = parseFloat(document.getElementById("energia").value);
  let personale = parseFloat(document.getElementById("personale").value);
  let paneProdotto = parseFloat(document.getElementById("totaleKg").value);
  let costoMedio = (materiePrime + energia + personale) / paneProdotto;
  costoMedio = Math.round((costoMedio + Number.EPSILON) * 100) / 100;
  document.getElementById("costomedio").value = costoMedio;
}
function costoConsegna() {
  let gasolio = parseInt(document.getElementById("gasolio").value);
  let laboratorio = parseFloat(document.getElementById("laboratorio").value);
  let assicurazione = parseFloat(
    document.getElementById("assicurazione").value
  );
  let paneProdotto = parseFloat(document.getElementById("totaleKg").value);
  let costoConsegna =
    (gasolio + laboratorio + assicurazione) / (paneProdotto / 2);
  costoConsegna = Math.round((costoConsegna + Number.EPSILON) * 100) / 100;
  document.getElementById("consegna").value = costoConsegna;
}
function ingrossoLoco() {
  //let paneProdotto = parseFloat(document.getElementById("totaleKg").value);
  let costoMedio = parseFloat(document.getElementById("costomedio").value);
  let ingrossoLoco = costoMedio * 1.8;
  ingrossoLoco = Math.round((ingrossoLoco + Number.EPSILON) * 100) / 100;

  document.getElementById("ingrossoLoco").value = ingrossoLoco;
}
function ingrossoVendita() {
  let consegna = parseFloat(document.getElementById("consegna").value);
  let costoMedio = parseFloat(document.getElementById("costomedio").value);
  let ingrossoVendita = costoMedio * 1.8 + consegna;
  ingrossoVendita = Math.round((ingrossoVendita + Number.EPSILON) * 100) / 100;

  document.getElementById("ingrossoVendita").value = ingrossoVendita;
}
function venditaNegozio() {
  let costoMedio = parseFloat(document.getElementById("costomedio").value);
  let venditaNegozio = costoMedio * 3;
  venditaNegozio = Math.round((venditaNegozio + Number.EPSILON) * 100) / 100;

  document.getElementById("negozio").value = venditaNegozio;
}
function sideways() {
  // materie prime
  let materiePrime = parseFloat(document.getElementById("materiePrime").value);
  let materiePrimeM = materiePrime / 11.5;
  let materiePrimeG = materiePrimeM / 26;
  materiePrimeM = Math.round((materiePrimeM + Number.EPSILON) * 100) / 100;
  materiePrimeG = Math.round((materiePrimeG + Number.EPSILON) * 100) / 100;

  document.getElementById("materiePrimeM").value = materiePrimeM;
  document.getElementById("materiePrimeG").value = materiePrimeG;

  // energia
  let energia = parseFloat(document.getElementById("energia").value);
  let energiaM = energia / 11.5;
  let energiaG = energiaM / 26;
  energiaM = Math.round((energiaM + Number.EPSILON) * 100) / 100;
  energiaG = Math.round((energiaG + Number.EPSILON) * 100) / 100;
  document.getElementById("energiaM").value = energiaM;
  document.getElementById("energiaG").value = energiaG;

  // personale
  let personale = parseFloat(document.getElementById("personale").value);
  let personaleM = personale / 11.5;
  let personaleG = personaleM / 26;
  personaleM = Math.round((personaleM + Number.EPSILON) * 100) / 100;
  personaleG = Math.round((personaleG + Number.EPSILON) * 100) / 100;
  document.getElementById("personaleM").value = personaleM;
  document.getElementById("personaleG").value = personaleG;
}
async function calcola() {
  await paneProdotto();
  sideways();
  costoMedio();
  costoConsegna();
  ingrossoLoco();
  ingrossoVendita();
  venditaNegozio();
}
