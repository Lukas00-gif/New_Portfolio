const codigoSecreto = "monument";
// const imagemSecreta = document.querySelectorAll('.imagem_Secreta');

    let Temporizador, Temp;
    let SequenciaCaracteres = [];

       window.addEventListener('keydown', function(evento){
          clearTimeout(Temporizador);
          const TeclaPressionada = evento.key;
          SequenciaCaracteres.push(TeclaPressionada);
          const FraseCaractere = SequenciaCaracteres.join('');

          if (FraseCaractere.includes(codigoSecreto)){
                //console.log("VOCE ACERTOOU");

                document.querySelector('.imagem_Secreta').style.visibility = 'visible';
                document.querySelector('.imagem_Secreta').style.opacity = 1;

                Temp = setTimeout(function(){
                  document.querySelector('.imagem_Secreta').style.visibility = 'hidden';
                  document.querySelector('.imagem_Secreta').style.opacity = 0;
                },2000);
                SequenciaCaracteres = [];
                //aumentar o tempo de visualizar
          }
         console.log(SequenciaCaracteres);
         Temporizador = setTimeout(function(){
            SequenciaCaracteres = [];
          },1000);
       })