 function=getData(){
 	var name= document.getElementByName('name').value;
 	var age=parsefloat(document.getElementByName('email').value);
 	var phone=parsefloat(document.getElementByName('telefono').value);
 	var address=document.getElementByName('direccion').value;

 	document.form_reg.nombreObtenido.value= nombre;
 	document.form_reg.emailObtenido.value= email;
 	document.form_reg.telefonoObtenido.value= phone;
 	document.form_reg.direccionObtenida.value= address;
 }