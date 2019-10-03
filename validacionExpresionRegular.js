(function (){
	
	window.onload = function(){
		//i: Valida min y mayus
		const patt_usuario=/[A-Z]/i; //Patrón para usuarios
		const patt_password=/[0-9|_|A-Z]/i; //Patrón para contraseñas
		input_usr = document.getElementById("inUsr");
		input_pwd = document.getElementById("inPwd");

		function comparaExpresion(expresion, valor){
			//Expresión: Patrón a comparar con el valor.
			//Valor: Cadena/Carácter que se validará.
			var resultado="";
			var validacion=false;
			for (i_caracter in valor){
				caracter=valor.charAt(i_caracter);
				validacion=expresion.test(caracter); //Se obtiene el carácter según el indice que corresponde.
				if (validacion){//Si el caracter entra en la regla de la expresión regular.
					resultado=resultado+caracter;
				}
			}
			return resultado; //Regresa con cadena con valores válidos.
		}
		
		input_usr.onkeyup = function (){
			var usuario=input_usr.value;
			input_usr.value=comparaExpresion(patt_usuario,usuario); //Valida que toda la cadena en el campo del usuario sea válido.
		};
		
		input_pwd.onkeyup = function (){
			var password=input_pwd.value;
			input_pwd.value=comparaExpresion(patt_password,password); //Valida que toda la cadena en el campo del usuario sea válido.
		};
		
	}
		
})();
