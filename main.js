// BLOCO PARA VALIDAÇÃO DE EMAIL
// -----------------------------------------
function checarEmail(){
    if(ducument.forms[0].email.value == "" || 
       documents.forms[0].email.value.indexOF('@') == -1 ||
       documents.forms[0].email.value.indexOF('.') == -1)
       {
        alert("Por favor, informe um email válido");
        return false;
    }else{
        alert("Email informado com sucesso!");
        document.getElementById("email").innerHTML = document.forms[0].email.value
    }
}



// ------------------------------------------



// CODIGO DE VERIFICAÇÃO DE EMAIL DIGITADO
// ------------------------------------------

function verifica(){
    if(document.forms[0].email.value == 0){
        alert("Por favor, corno, informe um e-mail");
        document.frmEnvia.email.focus();
        return false;
    }
    return true;
}

// ------------------------------------------