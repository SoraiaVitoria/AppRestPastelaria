$("#telefone").mask("(00) 0000-0000");
$("#cpf").mask("000.000.000-00");
$("#compra-fiado").mask("0000");
$("#dia-fiado").mask("0000");

function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
  
      reader.onload = function (e) {
        $('#foto-display').attr('src', e.target.result).width(100).height(100);
      };
  
      reader.readAsDataURL(input.files[0]);
    }
}

switch($('#grupo option:selected').val()){
  case '0':
    $('#grupo option:selected').html('Atendente')
  break;
  case '1':
    $('#grupo option:selected').html('Caixa')
  break;
  case '2':
    $('#grupo option:selected').html('Adm')
  break;
  default:
    $('#grupo option:selected').html('')
}