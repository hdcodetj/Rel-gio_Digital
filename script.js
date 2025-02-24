const relogio = document.getElementById('relogio');
const botaoFormato = document.createElement('button');
botaoFormato.textContent = "ALTERNAR FORMATO";
botaoFormato.style.marginTop = '20px';
botaoFormato.style.padding = '10px';
botaoFormato.style.backgroundColor = '#282c36';
botaoFormato.style.color = 'yellow';

document.querySelector('.container').appendChild(botaoFormato)

let formato24h = true;

function atualizarRelogio() {
    const agora = new Date();
    let horas = agora.getHours();
    let minutos = agora.getMinutes().toString().padStart(2, '0');
    let segundos = agora.getSeconds().toString().padStart(2, '0');
    let periodo = '';

    if (!formato24h) {
        periodo = horas >= 12 ? 'PM' : 'AM';
        horas = horas % 12 || 12;
    }

    horas = horas.toString().padStart(2, '0');
    let separador = agora.getSeconds() % 2 === 0 ? ":" : " ";
    relogio.textContent = `${horas}${separador}${minutos}${separador}${segundos}`;
}

botaoFormato.addEventListener('click', () => {
    formato24h = !formato24h;
    atualizarRelogio();
})

setInterval(atualizarRelogio, 1000);
atualizarRelogio();



