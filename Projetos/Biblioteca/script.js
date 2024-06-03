
var emailL = document.getElementById('emailL')
var senhaL = document.getElementById('senhaL')
var hs = new Map();

//PS: EM AMBAS AS FUNÇÕES DEVO COLOCAR UM LOOP PARA CASO O USUARIO
//JA EXISTA, ELE NÃO CADASTRE NOVAMENTE

function cadastrar(){

    if(emailC.value===emailL.value ){
    
        alert('Usuario ja cadastrado, tente logar!')

    } else {
        alert('Funciona! Usuario cadastrado!')
        hs.set(senhaL.value, emailL.value);
        //EM EMAIL, DEVO COLOCAR UM USUARIO
    }

}

function logar(){

    var emailC = document.getElementById('emailC')
    var senhaC = document.getElementById('senhaL')

    if(emailC.value===emailL.value && senhaC.value===senhaL.value){

        alert('Usuario encontrado!')

    } else {

        alert('Usuario não cadastrado, tente logar!')

    }

    hs.forEach((valor, chave) =>{

        //POR COISAS COMO ESSA QUE NÃO GOSTO DE JS

    });

}