//potencia * media por dia * eficiencia(dividir para simplificar) * dias do mes
//um "let" para cada valor

let resposta = document.getElementById('resposta')

function principal (){

let potencia = Number(document.getElementById('potencia').value)

let media = Number(document.getElementById('media').value)

let eficiencia = Number(document.getElementById('eficiencia').value) / 100

let mes = Number(document.getElementById('mes').value)

let calculo = (potencia * media * eficiencia * mes) / 1000

resposta.innerHTML = ``
resposta.innerHTML  += `a geração media da sua placa solar é ${calculo.toFixed(2)} por mês`



}
principal()