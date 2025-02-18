function atualizarRelogio() {
    const agora = new Date();
    let horas = agora.getHours().toString().padStart(2, '0');
    let minutos = agora.getMinutes().toString().padStart(2, '0');
    let segundos = agora.getSeconds().toString().padStart(2, '0');

    let separador = agora.getSeconds() % 2 === 0 ? ":" : " ";

    document.getElementById('relogio').textContent = `${horas}${separador}${minutos}${separador}${segundos}`;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();


