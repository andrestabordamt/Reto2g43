function traerInformacion(){
    $.ajax({
        url:"https://g93af7ccd774cb7-db202111052038.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/library/library",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
           console.log(respuesta);
           pintarRespuesta(respuesta.items)
       } 
    });
}

function pintarRespuesta(items){
    let myTable ="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].target+"</td>";
        myTable+="<td>"+items[i].capacity+"</td>";
        myTable+="<td>"+items[i].category_id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td> <button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado").append(myTable); 
}

function guardarInformacion(){
    let myData={
        id:$("#id").val(),
        target:$("#target").val(),
        capacity:$("#capacity").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g93af7ccd774cb7-db202111052038.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/library/library",
        type:"POST",
        datatype:"JSON",
        data:myData,
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#target").val("");
            $("#capacity").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacion();
            alert("Se ha guardado el dato")
        }
    });
}

function editarInformacion(){
    let myData={
        id:$("#id").val(),
        target:$("#target").val(),
        capacity:$("#capacity").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g93af7ccd774cb7-db202111052038.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/library/library",
        type:"PUT",
        datatype:"JSON",
        data:dataToSend,
        contentType:"application/JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#target").val("");
            $("#capacity").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacion();
            alert("Se ha actualizado la información")
        }
    });
}

function borrarElemento(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g93af7ccd774cb7-db202111052038.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/library/library",
        type:"DELETE",
        datatype:"JSON",
        data:dataToSend,
        contentType:"application/JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacion();
            alert("Se ha eliminado información")
        }
    });
}

//cliente

function traerInformacioncliente(){
    $.ajax({
        url:"https://g93af7ccd774cb7-db202111052038.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
           console.log(respuesta);
           pintarRespuestacliente(respuesta.items)
       } 
    });
}

function pintarRespuestacliente(items){
    let myTable ="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].email+"</td>";
        myTable+="<td>"+items[i].age+"</td>";
        myTable+="<td> <button onclick='borrarElementocliente("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado").append(myTable); 
}

function guardarInformacioncliente(){
    let myData={
        id:$("#idcliente").val(),
        name:$("#namecliente").val(),
        email:$("#email").val(),
        age:$("#age").val(),
        
    };
    let dataToSend=JSON.stringify(myData);
    console.log(dataToSend)
    $.ajax({
        url:"https://g93af7ccd774cb7-db202111052038.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/client/client",
        type:"POST",
        datatype:"JSON",
        data:myData,
        success:function(respuesta2){
            $("#resultado2").empty();
            $("#idcliente").val("");
            $("#namecliente").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacioncliente();
            alert("Se ha guardado el dato")
        }
    });
}

function editarInformacioncliente(){
    let myData={
        id:$("#idcliente").val(),
        name:$("#namecliente").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g93af7ccd774cb7-db202111052038.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        datatype:"JSON",
        data:dataToSend,
        contentType:"application/JSON",
        success:function(respuesta){
            $("#resultado2").empty();
            $("#idcliente").val("");
            $("#namecliente").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacioncliente();
            alert("Se ha actualizado la información")
        }
    });
}

function borrarElementocliente(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g93af7ccd774cb7-db202111052038.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/client/client",
        type:"DELETE",
        datatype:"JSON",
        data:dataToSend,
        contentType:"application/JSON",
        success:function(respuesta){
            $("#resultado2").empty();
            traerInformacioncliente();
            alert("Se ha eliminado información")
        }
    });
}


//mensaje

function traerInformacionmen(){
    $.ajax({
        url:"https://g93af7ccd774cb7-db202111052038.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/message/message",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
           console.log(respuesta);
           pintarRespuestamen(respuesta.items)
       } 
    });
}

function pintarRespuestamen(items){
    let myTable ="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].messagetext+"</td>";
        myTable+="<td> <button onclick='borrarElementomen("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado3").append(myTable); 
}

function guardarInformacionmen(){
    let myData={
        id:$("#idmen").val(),
        messagetext:$("#mensajemen").val(),
        
        
    };
    let dataToSend=JSON.stringify(myData);
    console.log(dataToSend)
    $.ajax({
        url:"https://g93af7ccd774cb7-db202111052038.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/message/message",
        type:"POST",
        datatype:"JSON",
        data:myData,
        success:function(respuesta3){
            $("#resultado3").empty();
            $("#idmen").val("");
            $("#mensajemen").val("");
            traerInformacionmen();
            alert("Se ha guardado el dato")
        }
    });
}

function editarInformacionmen(){
    let myData={
        id:$("#idmen").val(),
        messagetext:$("#mensajemen").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g93af7ccd774cb7-db202111052038.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        datatype:"JSON",
        data:dataToSend,
        contentType:"application/JSON",
        success:function(respuesta3){
            $("#resultado3").empty();
            $("#id").val("");
            $("#mensajemen").val("");
            traerInformacionmen();
            alert("Se ha actualizado la información")
        }
    });
}

function borrarElementomen(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g93af7ccd774cb7-db202111052038.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/message/message",
        type:"DELETE",
        datatype:"JSON",
        data:dataToSend,
        contentType:"application/JSON",
        success:function(respuesta3){
            $("#resultado3").empty();
            traerInformacionmen();
            alert("Se ha eliminado información")
        }
    });
}