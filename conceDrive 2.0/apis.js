document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = "https://www.exchangerate-api.com/v4/latest/COP"; // URL de la API

    fetch(apiUrl)
        .then(response => response.json()) // Convertir respuesta a JSON
        .then(data => {
            const tasas = {
                USD: data.rates.USD,
                EUR: data.rates.EUR,
                MXN: data.rates.MXN,
                JPY: data.rates.JPY
            };
            actualizarPrecios(tasas);
        })
        .catch(error => console.error("Error al obtener la tasa de cambio:", error));

    function actualizarPrecios(tasas) {
        document.querySelectorAll(".precio").forEach(precioElement => {
            const precioCOP = parseFloat(precioElement.textContent.replace(/\D/g, ''));
            precioElement.innerHTML += `
                <br>USD: $${(precioCOP * tasas.USD).toFixed(2)}
                <br>EUR: €${(precioCOP * tasas.EUR).toFixed(2)}
                <br>MXN: $${(precioCOP * tasas.MXN).toFixed(2)}
                <br>JPY: ¥${(precioCOP * tasas.JPY).toFixed(2)}
            `;
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // 🔹 API de Reseñas ⭐
    const reviewsContainer = document.createElement("div");
    reviewsContainer.id = "reseñas-container";
    reviewsContainer.style.padding = "10px";
    reviewsContainer.style.fontSize = "16px";
    reviewsContainer.style.textAlign = "center";
    reviewsContainer.textContent = "Cargando reseñas...";
    document.body.appendChild(reviewsContainer);

    fetch("https://jsonplaceholder.typicode.com/comments?_limit=5")
        .then(response => response.json())
        .then(data => {
            reviewsContainer.innerHTML = "<h3>Reseñas de Clientes:</h3>";
            data.forEach(review => {
                const div = document.createElement("div");
                div.classList.add("reseña");
                div.innerHTML = `<strong>${review.name}</strong>: ${review.body}`;
                reviewsContainer.appendChild(div);
            });
        })
        .catch(error => {
            reviewsContainer.textContent = "Error al cargar reseñas.";
            console.error("Error en reseñas:", error);
        });

    // 🔹 API de Información de Vehículos 🚗
    const vehiclesContainer = document.createElement("div");
    vehiclesContainer.id = "vehiculos-container";
    vehiclesContainer.style.padding = "10px";
    vehiclesContainer.style.fontSize = "16px";
    vehiclesContainer.style.textAlign = "center";
    vehiclesContainer.textContent = "Cargando información de vehículos...";
    document.body.appendChild(vehiclesContainer);

    fetch("https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json")
        .then(response => response.json())
        .then(data => {
            vehiclesContainer.innerHTML = "<h3>Marcas de Vehículos Disponibles:</h3>";
            const ul = document.createElement("ul");
            data.Results.slice(0, 10).forEach(vehicle => { // Muestra solo 10 marcas
                const li = document.createElement("li");
                li.textContent = vehicle.Make_Name;
                ul.appendChild(li);
            });
            vehiclesContainer.appendChild(ul);
        })
        .catch(error => {
            vehiclesContainer.textContent = "Error al cargar información de vehículos.";
            console.error("Error en vehículos:", error);
        });
});