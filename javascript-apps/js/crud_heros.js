const d = document,
$title = d.querySelector(".crud-title"),
$form = d.querySelector(".crud-form"),
$table = d.querySelector(".crud-table"),
$template = d.getElementById("crud-template"),
$fragment = d.createDocumentFragment();

const getAll = async () => {
    try {
        let res = await fetch("http://127.0.0.1:8000/hers/"),
        json = await res.json();

        if (!res.ok) throw {status: res.status, statusText: res.statusText};
    } catch (err) {
        let message = err.statusText || "Ocurrio un error";
        $table.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
    }
}

d.addEventListener("DOMContentLoaded", getAll)
