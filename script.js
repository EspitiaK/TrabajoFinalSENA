function verificarRespuestas(){

	var total = 5;
	var puntos = 0;

	var myFrom = document.forms["quizform"];
	var respuestas = ["b", "a", "b", "d", "c"];

	for(var i = 1; i <= total; i++){
		if(myFrom["p" + i].value === null || myFrom["p" + i].value === ""){
			alert("por favor responde la pregunta " + i);
			return false;
		}else{
			if (myFrom["p" + i].value === respuestas[i - 1]){
				puntos++;
			}
		}
	}

	var resultado = document.getElementById("resultado");
	resultado.innerHTML = '<h3>Obtuvistes <span>'+ puntos +'</span> de <span>'+ total +' puntos</span><h3>';

	return false;
}
	

