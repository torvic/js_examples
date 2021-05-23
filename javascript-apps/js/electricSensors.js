
const d = document,
$sensorsTable = d.querySelector(".sensors-table"),
$sensorsTemplate = d.querySelector(".sensors-template").content,
$lecturasTable = d.querySelector(".lecturas-table"),
$lecturasTemplate = d.querySelector(".lecturas-template").content,

$title = d.querySelector(".lecturas-title"),
$headId = d.querySelector(".head-id"),
$headNombre = d.querySelector(".head-nombre"),
$headFecha = d.querySelector(".head-fecha"),

$fragment = d.createDocumentFragment();

const getAllSensors = async() => {
  try {
    let res = await fetch("http://127.0.0.1:8000/sensors/"),
    json = await res.json();
    //console.log(res);
    //console.log(json);
    json.forEach(el => {
      $sensorsTemplate.querySelector(".id").textContent = el.id;
      $sensorsTemplate.querySelector(".nombre").textContent = el.nombre;
      // data-atribute
      $sensorsTemplate.querySelector(".ver").dataset.id = el.id;
      $sensorsTemplate.querySelector(".ver").dataset.name = el.nombre;

      let $clone = d.importNode($sensorsTemplate, true);
      $fragment.appendChild($clone);
    });
    $sensorsTable.querySelector("tbody").appendChild($fragment);

  } catch (err) {
    let message = err.statusText || "Ocurrio un error";
    $sensorsTable.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
  }
};

d.addEventListener("DOMContentLoaded", getAllSensors);

d.addEventListener("click", async e => {
  if (e.target.matches(".ver")) {
    //e.preventDefault();
    //e.location.reload();
    $lecturasTable.classList.add("cuadro");

    $title.textContent = `Lectura del sensor ${e.target.dataset.name}`;
    $headId.textContent = "ID";
    $headNombre.textContent = "Lectura (Wh)";
    $headFecha.textContent = "Fecha";
    // GET lecturas by id
    try {
      let res = await fetch(`http://127.0.0.1:8000/lecturas/${e.target.dataset.id}/`),
      json = await res.json();
      console.log(json);
      json.lecturas.forEach(el => {
        console.log(el.id);
        $lecturasTemplate.querySelector(".id").textContent = el.id;
        $lecturasTemplate.querySelector(".lectura").textContent = el.lectura_sensor;
        $lecturasTemplate.querySelector(".fecha").textContent = el.fecha_sensado;
        
        let $clone = d.importNode($lecturasTemplate, true);
        $fragment.appendChild($clone);
      });
      
      console.log($fragment);
      
      $lecturasTable.querySelector("tbody").innerHTML = '' ;
      $lecturasTable.querySelector("tbody").appendChild($fragment) ;
      
      $lecturasTable.nextSibling.innerHTML = '';
      $lecturasTable.insertAdjacentHTML("afterend", `<p class="total"><b>Total de lecturas: ${json.total_lecturas}</b></p>`);
      //if (json.total_lecturas !== 0) {
      //  console.log("Si hay lecturas");
      //} else {
      //  $lecturasTable.insertAdjacentHTML("afterend", `<p><b>Total de lecturas: ${json.ta}</b></p>`);
      //}
      //console.log(res);
      //console.log(json);
    } catch (err) {
      let message = err.statusText || "Ocurrio un error";
      $lecturasTable.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
    }
  }





});