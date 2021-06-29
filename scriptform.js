<script type="text/javascript">
 function validaForm()
 {
    erro = false;
    if($('#nome').val() == '')
    {
        alert('Você precisa preencher o campo Nome');erro = true;
    }
    if($('#email').val() == '' && !erro)
    {
        alert('Você precisa preencher o campo E-mail');erro = true;
    }
    if($('#mensagem').val() == '' && !erro)
    {
        alert('Você precisa preencher o campo Mensagem');erro = true;
    }

    //se nao tiver erros
    if(!erro)
    {
        $('#formulario_contato').submit();
    }
 }
</script>