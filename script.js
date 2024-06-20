//Função de animação ao clicar nas teclas
function tecla(id) {
        var elemento = document.getElementById(id)
        var press = elemento.querySelector('div');

        //Se a função rgb2 estiver ativa
        if (elemento.classList.contains('bg-tecla-rgb')){
            elemento.classList.remove('bg-tecla-rgb')
            press.classList.replace('tecla-rgb', 'tecla-press')
            setTimeout(function() {
                press.classList.replace('tecla-press', 'tecla-rgb')
                elemento.classList.add('bg-tecla-rgb')
            }, 100)
        }else{
            elemento.classList.remove('bg-tecla')
            press.classList.replace('tecla', 'tecla-press')
            setTimeout(function() {
                press.classList.replace('tecla-press', 'tecla')
                elemento.classList.add('bg-tecla')
            }, 100)
        }
}

//Função para voltar ao estado inicial das teclas, antes da função rgb2
function resetRgb(){
    var onoff = document.getElementById('onoff')
    if(onoff.classList.contains('bg-power-press')){
        var teclas = document.getElementsByClassName('change');
        var change = document.getElementsByClassName('change_top');
            for (var i = 0; i < teclas.length; i++) {
                var tecla = teclas[i];
                var tecla_bg = tecla.querySelector('div');
                tecla.classList.replace('bg-tecla-rgb', 'bg-tecla');
                tecla_bg.classList.replace('tecla-rgb', 'tecla');
            }
            for (var i = 0; i < change.length; i++) {
                var change = change[i];
                var change_bg = change.querySelector('div');
                change.classList.replace('bg-power-rgb', 'bg-power');
                change_bg.classList.replace('power-rgb', 'power');
            }
    }
}

// Remove a cor branca das teclas
function removeWhite(white, white_div){
    if (white.classList.contains('bg-power-press')){
        white.classList.replace('bg-power-press', 'bg-power')
        white_div.classList.replace('power-press', 'power')
    }
}

// Remove o RGB das teclas
function removeRgb(rgb, rgb_div){
    if (rgb.classList.contains('bg-power-press')){
        rgb.classList.replace('bg-power-press', 'bg-power')
        rgb_div.classList.replace('power-press', 'power')
    }
}

// Remove o RGB2 das teclas
function removeRgb2(rgb2, rgb_div2){
    if (rgb2.classList.contains('bg-power-press')){
        rgb2.classList.replace('bg-power-press', 'bg-power')
        rgb_div2.classList.replace('power-press', 'power')
        rgb2.classList.replace('bg-power-press', 'bg-power')
        rgb_div2.classList.replace('power-press', 'power')
        resetRgb()
        var top1 = document.getElementById('rgb')
        var top1_div = top1.querySelector('div');
        top1.classList.replace('bg-power-rgb', 'bg-power')
        top1_div.classList.replace('power-rgb', 'power')

        var top2 = document.getElementById('rgb2')
        var top2_div = top2.querySelector('div');
        top2_div.classList.replace('bg-power-press', 'bg-power')
        top2_div.classList.replace('power-press-rgb', 'power')

        var top3 = document.getElementById('white')
        var top3_div = top3.querySelector('div');
        top3.classList.replace('bg-power-rgb', 'bg-power')
        top3_div.classList.replace('power-rgb', 'power')
    }
}

//Aplica a função RGB
function power(id) {
    var onoff = document.getElementById('onoff')
    if(onoff.classList.contains('bg-power-press')){
        var elemento = document.getElementById(id)
        var press = elemento.querySelector('div');
        var white = document.getElementById('white');
        var white_div = white.querySelector('div');
        var rgb2 = document.getElementById('rgb2');
        var rgb_div2 = rgb2.querySelector('div');

        if(elemento.classList.contains('bg-power')){
            elemento.classList.replace('bg-power', 'bg-power-press')
            press.classList.replace('power', 'power-press')
            document.getElementById('pagina').classList.remove('white');
            document.getElementById('pagina').classList.add('rgb');
            document.getElementById('valor').classList.replace('consoler-white', 'consoler');
        }else if(elemento.classList.contains('bg-power-rgb')){
            elemento.classList.replace('bg-power-rgb', 'bg-power-press')
            press.classList.replace('power-rgb', 'power-press')
            document.getElementById('pagina').classList.remove('white');
            document.getElementById('pagina').classList.add('rgb');
            document.getElementById('valor').classList.replace('consoler-white', 'consoler');
        }else{
            elemento.classList.replace('bg-power-press', 'bg-power')
            press.classList.replace('power-press', 'power')
            document.getElementById('pagina').classList.remove('rgb');
            document.getElementById('valor').classList.replace('consoler-rgb', 'consoler');
            resetRgb()
        }

        removeWhite(white, white_div)
        removeRgb2(rgb2, rgb_div2)

    }
}

//Função que deixa cada tecla de uma cor
function power2(id) {
    var onoff = document.getElementById('onoff')
    if(onoff.classList.contains('bg-power-press')){
        var elemento = document.getElementById(id)
        var press = elemento.querySelector('div');
        var rgb = document.getElementById('rgb');
        var rgb_div = rgb.querySelector('div');
        var white = document.getElementById('white');
        var white_div = white.querySelector('div');

        document.getElementById('pagina').classList.remove('white');
        document.getElementById('pagina').classList.remove('rgb');
        document.getElementById('valor').classList.replace('consoler-white', 'consoler');
        document.getElementById('valor').classList.replace('consoler-rgb', 'consoler');

        removeRgb(rgb, rgb_div)
        removeWhite(white, white_div)

        if (elemento.classList.contains('bg-power')){
            elemento.classList.replace('bg-power', 'bg-power-press')
            press.classList.replace('power', 'power-press')
            var teclas = document.getElementsByClassName('change');
            for (var i = 0; i < teclas.length; i++) {
                var tecla = teclas[i];
                var tecla_bg = tecla.querySelector('div');
                tecla.classList.replace('bg-tecla', 'bg-tecla-rgb');
                tecla_bg.classList.replace('tecla', 'tecla-rgb');
            }
            var top1 = document.getElementById('rgb')
            var top1_div = top1.querySelector('div');
            top1.classList.replace('bg-power', 'bg-power-rgb')
            top1_div.classList.replace('power', 'power-rgb')

            var top2 = document.getElementById('rgb2')
            var top2_div = top2.querySelector('div');
            top2.classList.replace('bg-power-press', 'bg-power-press')
            top2_div.classList.replace('power-press', 'power-press-rgb')

            var top3 = document.getElementById('white')
            var top3_div = top3.querySelector('div');
            top3.classList.replace('bg-power', 'bg-power-rgb')
            top3_div.classList.replace('power', 'power-rgb')

        }else{
            removeRgb2(elemento, press)
        }


    }
}

//Função que deixa as teclas brancas
function white(id) {
    var onoff = document.getElementById('onoff')
    if(onoff.classList.contains('bg-power-press')){
        var elemento = document.getElementById(id)
        var press = elemento.querySelector('div');
        var rgb = document.getElementById('rgb');
        var rgb_div = rgb.querySelector('div');
        var rgb2 = document.getElementById('rgb2');
        var rgb_div2 = rgb2.querySelector('div');

        if (elemento.classList.contains('bg-power')){
            elemento.classList.replace('bg-power', 'bg-power-press')
            press.classList.replace('power', 'power-press')
            document.getElementById('pagina').classList.add('white');
            document.getElementById('pagina').classList.remove('rgb');
            document.getElementById('valor').classList.replace('consoler', 'consoler-white');
        }else if (elemento.classList.contains('bg-power-rgb')){
            elemento.classList.replace('bg-power-rgb', 'bg-power-press')
            press.classList.replace('power-rgb', 'power-press')
            document.getElementById('pagina').classList.add('white');
            document.getElementById('pagina').classList.remove('rgb');
            document.getElementById('valor').classList.replace('consoler', 'consoler-white');
        }
        else{
            elemento.classList.replace('bg-power-press', 'bg-power')
            press.classList.replace('power-press', 'power')
            document.getElementById('pagina').classList.remove('white');
            document.getElementById('pagina').classList.remove('rgb');
            document.getElementById('valor').classList.replace('consoler-white', 'consoler');
        }

        removeRgb(rgb, rgb_div)
        removeRgb2(rgb2, rgb_div2)
    }
}

// Liga e desliga a calculadora
function onoff(id){
    var power = document.getElementById(id)
    var white = document.getElementById('white')
    var white_div = white.querySelector('div');
    var rgb = document.getElementById('rgb');
    var rgb_div = rgb.querySelector('div');
    var rgb2 = document.getElementById('rgb2');
    var rgb_div2 = rgb2.querySelector('div');

    document.getElementById('pagina').classList.remove('white');
    document.getElementById('pagina').classList.remove('rgb');

    removeRgb(rgb, rgb_div)
    removeRgb2(rgb2, rgb_div2)
    removeWhite(white, white_div)

    if (power.classList.contains('bg-power')){
        power.classList.add('white')
        power.classList.replace('bg-power', 'bg-power-press')
        power.querySelector('div').classList.replace('power', 'power-press')
    }else{
        erase_all('ce')
        power.classList.replace('bg-power-press', 'bg-power')
        power.classList.remove('white')
        power.querySelector('div').classList.replace('power-press', 'power')
    }
}

document.addEventListener('keydown', function(event) {

    // Verifica se a tecla pressionada é um número de 0 a 9
    if ((event.key >= '0' && event.key <= '9') || (event.key == ',')) {
        adicionarCaractere(event.key);
    }else if (event.key == '+' || event.key == '-' || event.key == '/' || event.key == '*') {
        if (event.key == '*'){
            operate('X')
        }else{
            operate(event.key)
        }
    }else if (event.key == 'Enter'){
        calcular();
    }else if (event.key == 'Delete' || event.key == 'Backspace'){
        erase('erase')
    }
});

// Função para limpar a tela da calculadora
function limpar() {
    document.getElementById('valor').innerText = '';
}

// Função para adicionar um caractere à tela da calculadora
function adicionarCaractere(caractere) {
    var onoff = document.getElementById('onoff')
    if(onoff.classList.contains('bg-power-press')){
    var valor = document.getElementById('valor').innerText;
    var elemento = document.getElementById('valor');

    if(valor.length < 14){   
        elemento.innerText = valor + caractere;
        if(valor.includes(',')){
            if(caractere == ','){
                elemento.innerText = valor;
            }else{
                elemento.innerText = valor + caractere;
            }
        }
    }}
}

// Função para casos Nulos
function casoNulo(x, valor2) {
    var valor1 = document.getElementById('valor').innerText;
    if (valor1 === '') {
        // result = valor2.replace(new RegExp(x, 'g'), '').replace(/\s/g, '');
        document.getElementById('valor').innerText = valor2;
    }
}

// Função para calcular o resultado da expressão na tela
function calcular() {
    var valor1 = document.getElementById('valor').innerText;
    var valor2 = document.getElementById('valor2').innerText;

                if (valor2.includes(' -')) {
                if (valor1 == '') {
                    number = valor2.replace(/\-|\s/g, '');
                    document.getElementById('valor').innerText = number;
                    document.getElementById('valor2').innerText = "";
                }else
                if (valor2.includes('+')) {
                    number = valor2.replace(/\+|\s/g, '');
                    var numero2 = parseFloat(number);
                    var numero1 = parseFloat(valor1);
                    var resultado = numero1 + numero2;
                    resultado = String(resultado);
                    resultado = encurtarString(resultado);
                    document.getElementById('valor').innerText = resultado;
                    document.getElementById('valor2').innerText = "";
                }else
                if (valor2.includes(' -')) {
                    valor2 = valor2.slice(0, -2);
                    var numero2 = parseFloat(valor2);
                    var numero1 = parseFloat(valor1);
                    var resultado = numero2 - numero1;
                    resultado = String(resultado);
                    document.getElementById('valor').innerText = resultado;
                    document.getElementById('valor2').innerText = "";
                }
                else {
                    var numero2 = parseFloat(valor2);
                    var numero1 = parseFloat(valor1);
                    var resultado = numero2 - numero1;
                    resultado = String(resultado);
                    resultado = encurtarString(resultado);
                    document.getElementById('valor').innerText = resultado;
                    document.getElementById('valor2').innerText = '';
                }
            }else if (valor2.includes('+')) {
                if (valor1 == '') {
                    number = valor2.replace(/\+|\s/g, '');
                    document.getElementById('valor').innerText = number;
                    document.getElementById('valor2').innerText = "";
                }else{
                    valor2 = valor2.replace(/\+|\s/g, '');
                    var numero2 = parseFloat(valor2);
                    var numero1 = parseFloat(valor1);
                    var resultado = numero1 + numero2;
                    resultado = String(resultado);
                    resultado = encurtarString(resultado);
                    document.getElementById('valor').innerText = resultado;
                    document.getElementById('valor2').innerText = '';
                }
            }else if (valor2.includes('X')) {
                if (valor1 == '') {
                    number = valor2.replace(/\X|\s/g, '');
                    document.getElementById('valor').innerText = number;
                    document.getElementById('valor2').innerText = "";
                }else{
                    valor2 = valor2.replace(/\X|\s/g, '');
                    var numero2 = parseFloat(valor2);
                    var numero1 = parseFloat(valor1);
                    var resultado = numero1 * numero2;
                    resultado = String(resultado);
                    resultado = encurtarString(resultado);
                    document.getElementById('valor').innerText = resultado;
                    document.getElementById('valor2').innerText = '';
                }
            }else if (valor2.includes('/')) {
                if (valor1 == '') {
                    number = valor2.replace(/\+|\s/g, '');
                    document.getElementById('valor').innerText = number;
                    document.getElementById('valor2').innerText = "";
                }else{
                    valor2 = valor2.replace(/\/|\s/g, '');
                    var numero2 = parseFloat(valor2);
                    var numero1 = parseFloat(valor1);
                    var resultado = numero2 / numero1;
                    resultado = String(resultado);
                    resultado = encurtarString(resultado);
                    document.getElementById('valor').innerText = resultado;
                    document.getElementById('valor2').innerText = '';
                }
            }
    }

    function encurtarString(str) {
      if (str.length > 11) {
        str = str.substring(0, 11);
        return str + '...';
      }
      return str;
    }

    // Função para apagar um dígito da tela
    function erase(valor) {
        var onoff = document.getElementById('onoff')
        if(onoff.classList.contains('bg-power-press')){
            var tela = document.getElementById('valor');
    
            if (valor === 'erase') {
                if (tela.innerText.includes('...')) {
                    tela.innerText = tela.innerText.replace(/\.\.\./g, '');
                }else{
                    // Se o botão de apagar for clicado, remova o último caractere da tela
                    var textoAtual = tela.innerText;
                    tela.innerText = textoAtual.slice(0, -1); // Remove o último caractere
                }
            } else {
                // Se for outro botão, apenas adicione o caractere correspondente à tela
                tela.innerText += valor;
            }
        }
    }

    // Função para apagar todos os dígitos da tela
    function erase_all(type) {
        var onoff = document.getElementById('onoff')
        if(onoff.classList.contains('bg-power-press')){
            var valor1 = document.getElementById('valor');
            var valor2 = document.getElementById('valor2');
            if(type == 'c'){
                valor1.innerText = ''
            }else{
                valor1.innerText = ''
                valor2.innerText = ''
            }
        }
    }

    // Função para inverter o sinal
    function invert(){
        var onoff = document.getElementById('onoff')
        if(onoff.classList.contains('bg-power-press')){
            var valor = document.getElementById('valor').innerText;
            if (valor.includes('-')){
                number = valor.replace(/\-|\s/g, '');
                document.getElementById('valor').innerText = number;
            }else if (valor != ''){
                document.getElementById('valor').innerText = '-'+valor;
            }
        }
    }

// Função para gerenciar a operação escolhida
function operate(op){
    var onoff = document.getElementById('onoff');

    var valor1 = document.getElementById('valor').innerText;
    var valor2 = document.getElementById('valor2').innerText;
    valor1 = valor1.replace(/\.\.\./g, '');
    valor2 = valor2.replace(/\.\.\./g, '');
    valor1 = valor1.replace('e', '');
    valor2 = valor2.replace('e', '');
    valor1 = valor1.replace(',', '.');
    valor2 = valor2.replace(',', '.');

    if(onoff.classList.contains('bg-power-press')){
        var valor1 = document.getElementById('valor').innerText;
        var valor2 = document.getElementById('valor2').innerText;
        valor1 = valor1.replace(/\.\.\./g, '');
        valor2 = valor2.replace(/\.\.\./g, '');
        valor1 = valor1.replace('e', '');
        valor2 = valor2.replace('e', '');
        valor1 = valor1.replace(',', '.');
        valor2 = valor2.replace(',', '.');
        
        function calculateAndSetResult(operator) {
            valor1 = parseFloat(valor1);
            valor2 = parseFloat(valor2.replace(operator, ''));
            var resultado;
    
            switch (operator) {
                case '+':
                    resultado = valor2 + valor1;
                    break;
                case '-':
                    resultado = valor2 - valor1;
                    break;
                case '/':
                    resultado = valor2 / valor1;
                    break;
                case 'X':
                    resultado = valor2 * valor1;
                    break;
            }
    
            document.getElementById('valor2').innerText = resultado + ' ' + op;
            document.getElementById('valor').innerText = '';
        }
    
        if (valor1 !== '' && valor2 !== '') {
            if (valor2.includes(' +')) {
                calculateAndSetResult('+');
            } else if (valor2.includes(' -')) {
                calculateAndSetResult('-');
            } else if (valor2.includes(' /')) {
                calculateAndSetResult('/');
            } else if (valor2.includes(' X')) {
                calculateAndSetResult('X');
            }
        } else {
            if (valor1 === '-') {
                erase_all();
            } else if (valor2 === '') {
                document.getElementById('valor2').innerText = valor1 + ' ' + op;
                document.getElementById('valor').innerText = '';
            } else if (valor1 === '' && valor2 !== '') {
                valor2 = valor2.replace(/ \+| \-| X| \//, ' ' + op);
                document.getElementById('valor2').innerText = valor2;
            } else {
                var total2 = parseFloat(valor2.replace(/\s[+\-X/]/g, ''));
                var total1 = parseFloat(valor1);
                var finalResult;
    
                switch (op) {
                    case '+':
                        finalResult = total1 + total2;
                        break;
                    case '-':
                        finalResult = total2 - total1;
                        break;
                    case '/':
                        finalResult = total2 / total1;
                        break;
                    case 'X':
                        finalResult = total1 * total2;
                        break;
                }
    
                document.getElementById('valor2').innerText = finalResult + ' ' + op;
                document.getElementById('valor').innerText = '';
            }
        }
    }
    
    }
