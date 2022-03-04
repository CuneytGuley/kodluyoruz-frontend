let userName = prompt("Lütfen adınızı giriniz")
let clock = new Date()
let myName = document.querySelector("#myName")
let myClock = document.querySelector("#myClock")
var gunler= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]

myName.innerHTML = userName

// myClock.innerHTML = clock.toLocaleTimeString() + " " + gunler[clock.getDay()]

myClock.innerHTML = `${clock.toLocaleTimeString()} ${gunler[clock.getDay()]}`   