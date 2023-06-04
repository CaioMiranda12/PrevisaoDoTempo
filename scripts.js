

const key ="ca09fe731efdf7f595979d55b8651866"

function colocarDadosNaTela(dados) {
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".temp-feeling").innerHTML = "Sensação Térmica: " + Math.floor(dados.main.feels_like) + "°C"
    document.querySelector(".estado").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".img-nuvem").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json())
    colocarDadosNaTela(dados)
    console.log(dados)
}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-city").value

    buscarCidade(cidade)
}
