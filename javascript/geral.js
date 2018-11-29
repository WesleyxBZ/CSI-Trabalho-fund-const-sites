function validar() {
    var nome = form1.nome.value; /* Criação de variáveis e referencia aos ids, como, nome e form1 */
    var email = form1.email.value;
    var contato = form1.contato.value;
    var dataNasc = form1.dataNasc.value;
                
    /* Validação - NOME */
                
    if(nome == ""){  /* Estruturas de decisão para avaliar o que foi digitado pelo usuário */
         alert('Preencha o campo com seu nome'); /* Se o que o usuário digitou não atende a estrututa, ela retornará com uma mensagem */
         form1.nome.focus();
         return false; }
                
     if(nome.length < 5){ /* Estruturas de decisão para avaliar o que foi digitado pelo usuário */
          alert('Digite seu nome completo'); /* Se o que o usuário digitou não atende a estrututa, ela retornará com uma mensagem */
          form1.nome.focus();
          return false; }
                
     /* Validação - EMAIL */
                
    if(email == ""){  
         alert('Preencha o campo com seu email'); 
         form1.email.focus();
         return false; }
                
    /* Validação - CONTATO */
                
    if(contato == ""){  
         alert('Preencha o campo com seu número de contato'); 
         form1.contato.focus();
         return false; }
                
    if(contato.length < 8){ 
        alert('Número de contato inválido'); 
        form1.contato.focus();
        return false; }
                
                
    /* Validação - DATA DE NASCIMENTO */
                
    if(dataNasc == ""){  
        alert('Preencha o campo com sua data de nascimento'); 
        form1.data-nasc.focus();
        return false; }
                
    if(dataNasc.length < 8){ 
        alert('Data de nascimento inválida'); 
        form1.dataNasc.focus();
        return false; }
    
}

function validarcep(){
       var cep = formCarinho.cep.value; /* Criação de variáveis e referencia aos ids, como, nome e form1 */

        /* Validação - CEP */

    if(cep == ""){  
        alert('Preencha o campo com seu CEP'); 
        form1.cep.focus();
        return false; }
                
    if(cep.length < 8){ 
        alert('CEP inválido'); 
        form1.cep.focus();
        return false; }
}

/* === FUNÇÃO DE TROCAR DE TEXTOS NA PÁGINA INDEX === */

var i=0;
mensagens=["Incrições para o curso de CSI abertas", "Não perca tempo", "Garanta sua vaga"];
var myVar=setInterval(function() {tempoMuda()}, 2500);

function tempoMuda(){
    document.getElementById("mudaTextoAsideDireito").innerHTML=mensagens[i];
    
    i++;
    
    if(i>2){
        i=0
    }
}

/* === FUNÇÃO DE TROCAR IMAGENS NA PÁGINA HORÁRIOS CSI === */

function trocaImagens1(){
                document.getElementById("imagens").src="../imagens/1.png";
            }
            function trocaImagens2(){
                document.getElementById("imagens").src="../imagens/2.png";
            }
            function trocaImagens3(){
                document.getElementById("imagens").src="../imagens/3.png";
            }