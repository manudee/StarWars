

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
 
var attackCount = 0;
var characters  = {
     	    obi : {
 
                "name": "obi",
                "healthPoints": 120,
                "attackPoints": 8,
                "counterAttackPoints": 25
            },
 
 
            luke : {
            	"name": "luke",
            	"healthPoints": 100,
            	"attackPoints": 20,
            	"counterAttackPoints": 10
            },


            darthSidious : {
            	"name": "darthSidious",
            	"healthPoints": 150,
            	"attackPoints": 25,
            	"counterAttackPoints": 30
            },

            darthMaul : {
            	"name": "darthMaul",
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
        	var temp;
                                                //need to get yourcharacter first that was clicked
				var yourCharacter  = $("#yourCharacter>button").text();
				var defender  = $("#defenderArea>button").text();      

				console.log(yourCharacter);
				console.log(defender);

				console.log(characters[yourCharacter].healthPoints);


				var myChar = yourCharacter.split(".");
				var defenderChar = defender.split(".");

				console.log(myChar);
				console.log(defenderChar);


				//console.log(characters[myChar].healthPoints);
                //console.log(characters[defenderChar]);

                //var newHealthPoints_myChar;
                //var newHealthPoints_DefenderChar;



                                                
                console.log("for the first attack");
                console.log(characters[myChar].healthPoints);
                console.log(characters[defenderChar].healthPoints);
                console.log(characters[myChar].attackPoints);
                console.log(characters[defenderChar].attackPoints);
                console.log("attackCount Before " + attackCount);
                attackCount++;
                temp = characters[myChar].attackPoints * attackCount;              
                console.log("temp " + temp);

                characters[defenderChar].healthPoints = characters[defenderChar].healthPoints - temp;




                characters[myChar].healthPoints = characters[myChar].healthPoints - characters[defenderChar].attackPoints;

                console.log("State after the first attack");
                console.log(characters[myChar].healthPoints);
                console.log(characters[defenderChar].healthPoints);
                console.log(temp);
                console.log(characters[defenderChar].attackPoints);

                console.log("You attacked " + defenderChar + "for damage of " + temp );
                console.log(defenderChar + "attacked you back " + " for damage of " + characters[defenderChar].attackPoints );

                console.log("attackCount " + attackCount);


                if(characters[defenderChar].healthPoints < 0 ){
                	console.log("You win");
                	console.log("You have defeated " + defenderChar + "." + "You can choose to fight another enemy" );
                	$(".enemiesArea>button").prop("disabled",false);
                                                // and enemies not reached 0
                                                                //call for selection of another defender
            }             
          //else if(characters[myChar].healthPoints < 0)
                                                                //call for resetting the game
                                                                //disable attach button
                                                                //restart the game


                                //            }


                            });


    });