const d =document,
    hora = d.getElementById("hora"),
    minutos = d.getElementById("minuto"),
    segundos = d.getElementById("segundo");

console.log("hola mundo")
function relojDigital ()  {
    let time = new Date();
    const hours = String(time.getHours()).padStart(2,"0");
    const minutes = String(time.getMinutes()).padStart(2,"0");
    const seconds = String(time.getSeconds()).padStart(2,"0");

    const timeHour = `${hours}`,
        timeMinutes = `${minutes}`,
        timeSeconds = `${seconds}`;

    hora.textContent = timeHour;
    minutos.textContent = timeMinutes;
    segundos.textContent = timeSeconds;
}

setInterval(relojDigital, 1000);
relojDigital();