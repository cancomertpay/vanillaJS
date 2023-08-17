// for name:
let name = prompt(`Adınızı giriniz:`);
document.querySelector(`#myName`).innerHTML = `${name}`;



// for date:
let myClock = document.querySelector(`#myClock`)
function tarihSaat() {
    const date = new Date().toLocaleString('tr-TR'); 
    const d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    let day = d.getDay()
    if (day == 0){
        day = "PAZAR"
    } else if (day == 1){
        day = "PAZARTESİ"
    } else if (day == 2){
        day = "SALI"
    } else if (day == 3){
        day = "ÇARŞAMBA"
    } else if (day == 4){
        day = "PERŞEMBE"
    } else if (day == 5){
        day = "CUMA"
    } else if (day == 6){
        day = "CUMARTESİ"
    }
    myClock.innerHTML = `${hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds} ${day}`;
}
setInterval(tarihSaat, 1000);