

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
     	    jon : {
 
                "name":"jon",
                "healthPoints": 120,
                "attackPoints": 8,
                "counterAttackPoints": 25
            },
 
 
            daenerys : {
            	"name":"daenerys",
            	"healthPoints": 100,
            	"attackPoints": 20,
            	"counterAttackPoints": 10
            },


            nightKing : {
            	"name":"nightKing",
            	"healthPoints": 150,
            	"attackPoints": 25,
            	"counterAttackPoints": 30
            },

            cersei : {
            	"name":"cersei",
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
        	$(".enemiesArea>img").prop("disabled",true);
   		});//end of click event handler



        $("body").on("click", "#attack", function(){



        		var temp;
                                                //need to get yourcharacter first that was clicked
				var yourCharacter  = $("#yourCharacter>img").attr('alt');
				var defender  = $("#defenderArea>img:visible").attr('alt');      

				console.log(yourCharacter);
				console.log(defender);

				console.log(characters[yourCharacter].healthPoints);
				console.log(characters[defender].attackPoints);

				//var myChar = yourCharacter.split(".");
				//var defenderChar = defender.split(".");

				//console.log(myChar);
				//console.log(defenderChar);


				//console.log(characters[myChar].healthPoints);
                //console.log(characters[defenderChar]);

                //var newHealthPoints_myChar;
                //var newHealthPoints_DefenderChar;



                                                
                console.log("for the first attack");
                console.log(characters[yourCharacter].healthPoints);
                console.log(characters[defender].healthPoints);
                console.log(characters[yourCharacter].attackPoints);
                console.log(characters[defender].attackPoints);
                console.log("attackCount Before " + attackCount);
                attackCount++;
                temp = characters[yourCharacter].attackPoints * attackCount;              
                console.log("temp " + temp);

                characters[defender].healthPoints = characters[defender].healthPoints - temp;




                characters[yourCharacter].healthPoints = characters[yourCharacter].healthPoints - characters[defender].attackPoints;

                console.log("State after the first attack");
                console.log(characters[yourCharacter].healthPoints);
                console.log(characters[defender].healthPoints);
                console.log(temp);
                console.log(characters[defender].attackPoints);

                console.log("You attacked " + characters[defender].name + " for damage of " + temp );
                console.log(characters[defender].name + " attacked you back " + " for damage of " + characters[defender].attackPoints );

                console.log("attackCount " + attackCount);


                if(characters[defender].healthPoints < 0 ){
                	console.log("You win");
                	console.log("You have defeated " + characters[defender].name + "." + "You can choose to fight another enemy" );
                		
                	$("#defenderArea>img").hide();
                	$(".enemiesArea>img").prop("disabled",false);
                     // and enemies not reached 0
                     //call for selection of another defender
           		 }             
         				 //else if(characters[myChar].healthPoints < 0)
                         //call for resetting the game
                         //disable attach button
                         //restart the game
						//	}


        });



        $("body").on("click", "#restartGame", function(){
        	$("#defenderArea>img").show();
        	//$("#defenderArea").appendTo("#yourCharacter");
        	$("#yourCharacter>img").appendTo("#characters");
        	$("#defenderArea>img").appendTo("#characters").removeClass("enemies").addClass("allChar");


        });


    });