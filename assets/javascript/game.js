

/*
$(document).ready(function(){

		$(".allChar").on("click", function(){

				var yourChar=$(this);
				console.log(yourChar);


				$("#yourCharacter").append(yourChar);

				var enemiesChar=$("#characters>button").siblings();
				console.log("siblings");

				enemiesChar.appendTo("#enemies").removeClass("allChar").addClass("enemiesArea");
				console.log("removed and added class");


				$(".enemiesArea").on("click", function(){

					var defenderChar = $(this);
					console.log(defenderChar);
					$("#defenderArea").append(defenderChar);
					$(".enemiesArea>button").prop("disabled",true);

				});


			

		});



});*/


$(document).ready(function(){


var characters  = {
		 "obi" : {

			"healthPoints": 120,
			"attackPoints": 8,
			"counterAttackPoints": 25
		},


		 "luke" : {

			"healthPoints": 100,
			"attackPoints": 20,
			"counterAttackPoints": 10
		},


		 "darthSidious" : {

			"healthPoints": 150,
			"attackPoints": 25,
			"counterAttackPoints": 30
		},

		 "darthMaul" : {

			"healthPoints": 180,
			"attackPoints": 10,
			"counterAttackPoints": 40
		}
};



		$("body").on("click", ".allChar", function(){
				
				$(this).siblings().appendTo("#enemies").removeClass("allChar").addClass("enemies");
				console.log($(this).siblings());
				$("#yourCharacter").append(this);

		});//end of click event handler
		
		$("body").on("click", ".enemies", function(){
	
				$(this).appendTo('#defenderArea');
				$(".enemiesArea>button").prop("disabled",true);
		});//end of click event handler



		$("body").on("click", "#attack", function(){

			//need to get yourcharacter first that was clicked
			var yourCharacter  = $("#yourCharacter>button").text();
			var defender  = $("#defenderArea>button").text();	

			console.log(yourCharacter);
			console.log(defender);


			console.log(characters[0]);


		});


});