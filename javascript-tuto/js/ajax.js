(() => {
    const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

    xhr.addEventListener("readystatechange", (e) => {
        if (xhr.readyState !== 4) return;
        //console.log(xhr);
        if (xhr.status >= 200 && xhr.status < 300) {
            //console.log("Exito");
            //console.log(xhr.responseText);
            //$xhr.innerHTML = xhr.responseText;
            let json = JSON.parse(xhr.responseText);
            //console.log(json);

            //$xhr.innerText = xhr.responseText;
            //$xhr.innerText = "hi";
            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            //console.log($fragment);
            $xhr.appendChild($fragment);
        } else {
            //console.log("error");
            let message = xhr.statusText || "Ocurrio un error";
            $xhr.innerHTML = `Error ${xhr.status}: ${message} `;
        }
    });

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    //xhr.open("GET", "assets/users.json");

    xhr.send();
})();

(() => {
    const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => {
        //console.log(res);
        return res.ok ? res.json():Promise.reject(res);
        //return res.text();
        //return res.blob();
    })
    .then(json => {
        //console.log(json);
        //$fetch.innerHTML = json;
        json.forEach(el => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
            $fragment.appendChild($li);
        });

        $fetch.appendChild($fragment);
    })
    .catch(err => {
        //console.log(err);
        let message = err.statusText || "Ocurrio un error";
        $fetch.innerHTML = `Error ${err.status}: ${message} `;
    })
    .finally(() => {
        //console.log("Esto se ejecutara independientemente del resultado de la Promesa Fetch");
    });
})();

(() => {
    const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();

    async function getData() {
        try {
            let res = await fetch("https://jsonplaceholder.typicode.com/users"),
            json = await res.json();

            if (!res.ok) throw  {status: res.status, statusText: res.statusText};

            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $fetchAsync.appendChild($fragment);
            //console.log(res, json);
            
        } catch (err) {
            //console.log(err);
            let message = err.statusText || "Ocurrio un error";
            $fetchAsync.innerHTML = `Error ${err.status}: ${message} `;
        } finally {
            //console.log("Esto se ejecuta independientemente del try...catch");
        }



        
    }

    getData();

})();

(() => {
    const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();

    axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            //console.log(res);
            let json = res.data;

            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $axios.appendChild($fragment);
        })
        .catch((err) => {
            //console.log("Estamos en el catch", err.response);
            let message = err.response.statusText || "Ocurrio un error";
            $axios.innerHTML = `Error ${err.response.status}: ${message} `;
        })
        .finally(() => {
            //console.log("Esto se ejecutara independientemente del resultado de axios");
        })

})();

(() => {
    const $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();

    async function getData() {
        try {
            let res = await axios.get("https://jsonplaceholder.typicode.com/users");
            json = await res.data;

            console.log(res, json);
            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $axiosAsync.appendChild($fragment);
            
        } catch (err) {
            //console.log("Estamos en el catch", err.response);
            let message = err.response.statusText || "Ocurrio un error";
            $axiosAsync.innerHTML = `Error ${err.response.status}: ${message} `;
            
        } finally {
            console.log("Esto se ejecutara independientemente de Try...catch");
        }  
    };

    getData();
})();
