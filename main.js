let numeros = ['😍','😍','😇','😇','🤢','🤢','😷','😷','🥵','🥵','😵‍💫','😵‍💫','😭','😭','😡','😡'];
let tarjetasDestapadas=0;
let tarjeta1= null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos=0;
let temporizador = false;
let timer=30;
timerInicial=timer;
let tiempoRegresivo=null;
let mostrarTiempo=document.getElementById('t-restante')
let mostrarMovimientos = document.getElementById('movimientos')
let mostrarAciertos = document.getElementById('aciertos')
numeros = numeros.sort(()=> {return Math.random()-0.5});
console.log(numeros);

function reiniciar()
{
    window.location.reload();
}

function contarTiempo(){
    tiempoRegresivo = setInterval(() => {
        timer--;
        mostrarTiempo.innerHTML=`Tiempo: ${timer} seg`
        if(timer==0){
            clearInterval(tiempoRegresivo);
            bloquearTarjetas(0);
        }
    }, 1000);
}

function bloquearTarjetas(index){
    let tarjetaBloqueada = document.getElementById(index);
    if(index < 16){
        setTimeout(() => {
            tarjetaBloqueada.innerHTML=numeros[index]
            tarjetaBloqueada.disabled=true
            bloquearTarjetas(index+1)
            console.log("hola")
        }, 100);
    }
}
function destapar(id){
if (temporizador==false){
    contarTiempo();
    temporizador=true;
   
}

tarjetasDestapadas++;
    if(tarjetasDestapadas==1)
    {
        tarjeta1=document.getElementById(id);
        primerResultado = numeros[id]
        tarjeta1.innerHTML= primerResultado;
        tarjeta1.disabled=true;
        tarjeta1.style.opacity="70%"

    } else if(tarjetasDestapadas==2)
    {
        tarjeta2 = document.getElementById(id);
        segundoResultado = numeros[id];
        tarjeta2.innerHTML=segundoResultado;
        tarjeta2.disabled=true;
        tarjeta2.style.opacity="70%"
        movimientos++;
        mostrarMovimientos.innerHTML=`Movimientos: ${movimientos}`;
        if(primerResultado==segundoResultado){
            tarjeta1.style.backgroundColor = 'red';
            tarjeta2.style.backgroundColor='red';
            tarjeta1.style.opacity="50%"
            tarjeta2.style.opacity="50%"
            tarjetasDestapadas=0;
            aciertos++;
            mostrarAciertos.innerHTML=`Aciertos: ${aciertos}`
            if(aciertos ==8){
                clearInterval(tiempoRegresivo)
                mostrarAciertos.innerHTML=`Aciertos: ${aciertos} 🙊`
                mostrarMovimientos.innerHTML=`Movimientos: ${movimientos} 😱`;
                mostrarTiempo.innerHTML = `Fantastico solo te demoraste ${timerInicial-timer} segundos`

            }
        } else
        {
            setTimeout(() => {
                tarjeta1.style.opacity="100%"
                tarjeta2.style.opacity="100%"
                tarjeta1.innerHTML=""
                tarjeta2.innerHTML=""
                tarjeta1.disabled=false;
                tarjeta2.disabled=false;
                tarjetasDestapadas=0;
            }, 600);
        }
    }
    
    console.log(tarjetasDestapadas)
}

