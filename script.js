
// ROLAGEM SUAVE PELO MENU
document.querySelectorAll('.menu-header').forEach(link => {
    link.addEventListener('click', function (event) {
        const texto = this.textContent.trim().toUpperCase();

        const secoes = {
            'INÍCIO': '.inicio',
            'SOBRE MIM': '.eu',
            'CONTATO': '.contato',
            'PROJETOS': '.projetos'
        };

        const destino = document.querySelector(secoes[texto]);

        if (destino) {
            event.preventDefault();
            destino.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


// ELEMENTOS APARECEM AO ROLAR A PÁGINA
const elementos = document.querySelectorAll(
    '.eu, .projetos, .habilidades, .contato, .card, .esquerda, .direita'
);

elementos.forEach(elemento => {
    elemento.classList.add('animar');
});

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visivel');
            observador.unobserve(entrada.target);
        }
    });
}, {
    threshold: 0.15
});

elementos.forEach(elemento => {
    observador.observe(elemento);
});


// EFEITO NO TÍTULO INICIAL
const titulo = document.querySelector('.inicio h2');

if (titulo) {
    titulo.classList.add('titulo-animado');
}

const botaoTema = document.getElementById('tema');

botaoTema.addEventListener('click', function () {
    document.body.classList.toggle('claro');

    if (document.body.classList.contains('claro')) {
        botaoTema.textContent = 'Tema escuro';
    } else {
        botaoTema.textContent = 'Tema claro';
    }
});
