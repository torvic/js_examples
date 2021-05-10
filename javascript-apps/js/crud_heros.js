const d = document,
$title = d.querySelector(".crud-title"),
$form = d.querySelector(".crud-form"),
$table = d.querySelector(".crud-table"),
$template = d.getElementById("crud-template").content,
$fragment = d.createDocumentFragment();

const getAll = async () => {
    try {
        let res = await fetch("http://127.0.0.1:8000/heros/"),
        json = await res.json();

        //console.log(res);
        //console.log(json);
        if (!res.ok) throw {status: res.status, statusText: res.statusText};

        json.forEach(el => {
            $template.querySelector(".hero").textContent = el.name;
            $template.querySelector(".group").textContent = el.group;
            $template.querySelector(".edit").dataset.id = el.id;
            $template.querySelector(".edit").dataset.name = el.name;
            $template.querySelector(".edit").dataset.group = el.group;
            $template.querySelector(".delete").dataset.id = el.id;

            let $clone = d.importNode($template, true);
            $fragment.appendChild($clone);
        });
        $table.querySelector("tbody").appendChild($fragment);

    } catch (err) {
        let message = err.statusText || "Ocurrio un error";
        $table.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
    }
}

d.addEventListener("DOMContentLoaded", getAll)

d.addEventListener("submit", async (e) => {
    if (e.target === $form) {
        e.preventDefault();
        if (!e.target.id.value) {
            // POST
            try {
                let options = {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json; charset=utf-8"
                    },
                    body: JSON.stringify({
                        name: e.target.hero.value,
                        group: e.target.group.value
                    })
                },
                res = await fetch("http://127.0.0.1:8000/heros/", options),
                json = await res.json();
            
                if (!res.ok) throw {status: res.status, statusText: res.statusText};

                location.reload();
            
            } catch (err) {
                let message = err.statusText || "Ocurrio un error";
                $table.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
            }
        } else {
            // PUT
            try {
                let options = {
                    method: 'PUT',
                    headers: {
                        "Content-Type": "application/json; charset=utf-8"
                    },
                    body: JSON.stringify({
                        name: e.target.hero.value,
                        group: e.target.group.value
                    })
                },
                res = await fetch(`http://127.0.0.1:8000/heros/${e.target.id.value}/`, options),
                json = await res.json();
            
                if (!res.ok) throw {status: res.status, statusText: res.statusText};

                location.reload();
            
            } catch (err) {
                let message = err.statusText || "Ocurrio un error";
                $table.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
            }
        }
    };
});

d.addEventListener("click", async e => {
    if (e.target.matches(".edit")) {
        $title.textContent = "Editar Hero";
        $form.hero.value = e.target.dataset.name;
        $form.group.value = e.target.dataset.group;
        $form.id.value = e.target.dataset.id;
    };

    if (e.target.matches(".delete")) {
        // DELETE
        let isDelete = confirm(`¿Estas seguto eliminar el id ${e.target.dataset.id}?`)

        if (isDelete) {
            try {
                let options = {
                    method: 'DELETE',
                    headers: {
                        "Content-Type": "application/json; charset=utf-8"
                    }
                },
                res = await fetch(`http://127.0.0.1:8000/heros/${e.target.dataset.id}/`, options),
                json = await res.json();
            
                if (!res.ok) throw {status: res.status, statusText: res.statusText};
    
                location.reload();
            
            } catch (err) {
                let message = err.statusText || "Ocurrio un error";
                $table.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
            }
        };


    }
});
