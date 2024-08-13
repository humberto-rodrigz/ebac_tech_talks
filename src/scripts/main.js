AOS.init();

12/12/2024

const dataDoEvento = new Date("Sep 21, 2024 19:00:00");
const TimeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const TimeStampAtual = agora.getTime();
    
    const distanciaAteOEvento = TimeStampDoEvento - TimeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diasEmMs) / (horasEmMs));
    const minutosAteOEvento = Math.floor(distanciaAteOEvento % (horasEmMs) / (minutosEmMs));
    const seguntosAteOEvento = Math.floor((distanciaAteOEvento % minutosEmMs) / 1000);
    


    document.getElementById('dias').innerHTML = `${diasAteOEvento}d`
    document.getElementById('horas').innerHTML = `${horasAteOEvento}h`
    document.getElementById('minutos').innerHTML = `${minutosAteOEvento}m`
    document.getElementById('segundos').innerHTML = `${seguntosAteOEvento}s`



    if(distanciaAteOEvento <0){
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento Expirado'
    }

}, 1000);