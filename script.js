var listaHTML = $('#lista');
var id = 0;

function addItem(){
  let element = $('#text').val();
  id += 1;
  if(element != ''){
    $( `<div class='elemento' id='${id}'>
    <p class='texto'>${element}</p>
    <button class='delete' type="submit"> <img src="img/borrar.png" height ="8" width="10" /></button>
    <button class='edit' type="submit"> <img src="img/edit.png" height ="8" width="10" /></button>
    </div>` 
    ).appendTo( listaHTML );
    
    $('.delete').click(deleteItem);

    $('.edit').click(editItem);

    $('#text').val('');

  }

  //subir();
}  

function deleteItem(){
  $(this).parent().remove();
}

function editItem(){  

  if($('#text').val() != ''){
    $(this).parent().children('p').text($('#text').val());
  }

/*   var edit = $(this).parent().attr("id");
  $('#text').val($(this).parent().children('p').text());
  $('#submit').hide();
  $('#edit').show(); */
}

function deleteAll(){
  $('#lista').empty();
  id = 0;
}

/* function submitEdit(){
  $(`#${id}`).parent().children('p').text($('#text').val());
} */

/* function subir(){
  localStorage.setItem("lista",JSON.stringify(listaHTML.all));
} */





$(document).ready(function(){
  $("#submit").click(addItem);
  $("#edit").click(submitEdit);
  $("#deleteAll").click(deleteAll);

/*   if (localStorage.lista){
    listaHTML.all = JSON.parse(localStorage.lista);  
  } */
});