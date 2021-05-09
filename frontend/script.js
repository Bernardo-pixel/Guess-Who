function carregarTema() {
    var mapaImg = [{
            'id': 1,
            'nome': 'bala',
            'local': 'images/comidas/bala.png'
        },
        {
            'id': 2,
            'nome': 'barra_de_chocolate',
            'local': 'images/comidas/barra_de_chocolate.png'
        },
        {
            'id': 3,
            'nome': 'batata_frita',
            'local': 'images/comidas/batata_frita.png'
        },
        {
            'id': 4,
            'nome': 'beijinho',
            'local': 'images/comidas/beijinho.png'
        },
        {
            'id': 5,
            'nome': 'bife',
            'local': 'images/comidas/bife.png'
        },
        {
            'id': 6,
            'nome': 'bolinha_de_queijo',
            'local': 'images/comidas/bolinha_de_queijo.png'
        },
        {
            'id': 7,
            'nome': 'bolo',
            'local': 'images/comidas/bolo.png'
        },
        {
            'id': 8,
            'nome': 'bombom',
            'local': 'images/comidas/bombom.png'
        },
        {
            'id': 9,
            'nome': 'brigadeiro',
            'local': 'images/comidas/brigadeiro.png'
        },
        {
            'id': 10,
            'nome': 'brownie',
            'local': 'images/comidas/brownie.png'
        },
        {
            'id': 11,
            'nome': 'chiclete',
            'local': 'images/comidas/chiclete.png'
        },
        {
            'id': 12,
            'nome': 'coxinha',
            'local': 'images/comidas/coxinha.png'
        },
        {
            'id': 13,
            'nome': 'cupcake',
            'local': 'images/comidas/cupcake.png'
        },
        {
            'id': 14,
            'nome': 'esfiha',
            'local': 'images/comidas/esfiha.png'
        },
        {
            'id': 15,
            'nome': 'frango',
            'local': 'images/comidas/frango.png'
        },
        {
            'id': 16,
            'nome': 'hamburger',
            'local': 'images/comidas/hamburger.png'
        },
        {
            'id': 17,
            'nome': 'hot-dog',
            'local': 'images/comidas/hot-dog.png'
        },
        {
            'id': 18,
            'nome': 'kibe',
            'local': 'images/comidas/kibe.png'
        },
        {
            'id': 19,
            'nome': 'massa_folhada',
            'local': 'images/comidas/massa_folhada.png'
        },
        {
            'id': 20,
            'nome': 'pao_de_queijo',
            'local': 'images/comidas/pao_de_queijo.png'
        },
        {
            'id': 21,
            'nome': 'pipoca',
            'local': 'images/comidas/pipoca.png'
        },
        {
            'id': 22,
            'nome': 'pizza',
            'local': 'images/comidas/pizza.png'
        },
        {
            'id': 23,
            'nome': 'rocambole',
            'local': 'images/comidas/rocambole.png'
        },
        {
            'id': 24,
            'nome': 'sagu',
            'local': 'images/comidas/sagu.png'
        },
    ]

    mapaImg.forEach(fig => {
        if (document.querySelector(`#fig${fig.id} > p`)) {
            document.querySelector(`#fig${fig.id} > p`).innerText = fig.nome;
            document.querySelector(`#fig${fig.id} > img`).src = fig.local;
        }
    });
}
$(document).ready(function () {
    // função para fechar e abrir persianas, percorrendo  div que contem as imagens
    for (let i = 1; i <= 24; i++) {
        $(`#fig${i} img`).click(function () {
            $(`#fig${i} img`).last().slideDown(1000);
        })
        $(`#fig${i} img`).last().click(function () {
            $(`#fig${i} img`).last().slideUp(1000);
        })
    }
    // fechamento de document.ready
})