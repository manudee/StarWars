

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
var enemiesCount = 0;

var characters  = {
     	    jon : {
 
                "name":"jon",
                "healthPoints": 120,
                "attackPoints": 8,
                "counterAttackPoints": 25,

                setPoints: function(){
                console.log("HELLO POINTS " + this.healthPoints);
                console.log("HELLO NAME " + this.name);
                //console.log("healthPoints " + this.healthPoints );
               }
            },
 
 
            daenerys : {
            	"name":"daenerys",
            	"healthPoints": 100,
            	"attackPoints": 20,
            	"counterAttackPoints": 10,

                setPoints: function(){
                console.log("HELLO POINTS " + this.healthPoints);
                console.log("HELLO NAME " + this.name);
                //console.log("healthPoints " + this.healthPoints );
               }
            },


            nightKing : {
            	"name":"nightKing",
            	"healthPoints": 150,
            	"attackPoints": 25,
            	"counterAttackPoints": 15,

                setPoints: function(){
                console.log("HELLO POINTS " + this.healthPoints);
                console.log("HELLO NAME " + this.name);
                //console.log("healthPoints " + this.healthPoints );
               }
            },

            cersei : {
            	"name":"cersei",
            	"healthPoints": 180,
            	"attackPoints": 10,
            	"counterAttackPoints": 25,

                setPoints: function(){
                console.log("HELLO POINTS " + this.healthPoints);
                console.log("HELLO NAME " + this.name);
                //console.log("healthPoints " + this.healthPoints );
               }
            }
        };

 
 
        $("body").on("click", ".allChar", function(){

        	$(this).siblings().appendTo("#enemies").removeClass("allChar").addClass("enemies");
        	console.log($(this).siblings());



            //to count the number of enemies
            enemiesCount = $(".enemies").length;
            console.log("Enemies available to attack " + enemiesCount);

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

				//console.log(yourCharacter);
                //console.log(typeof yourCharacter);
				//console.log(defender);

				//console.log(characters[yourCharacter].healthPoints);
				//console.log(characters[defender].attackPoints);

				//var myChar = yourCharacter.split(".");
				//var defenderChar = defender.split(".");

				//console.log(myChar);
				//console.log(defenderChar);


				//console.log(characters[myChar].healthPoints);
                //console.log(characters[defenderChar]);

                //var newHealthPoints_myChar;
                //var newHealthPoints_DefenderChar;



                                                
                console.log("before the " + attackCount + " attack");
                console.log("your char health points " + characters[yourCharacter].healthPoints);
                console.log("defender health points " + characters[defender].healthPoints);
                console.log("your char attack points " + characters[yourCharacter].attackPoints);
                console.log("defender attack points " + characters[defender].counterAttackPoints);
                console.log("attackCount Before " + attackCount);
                attackCount++;
                temp = characters[yourCharacter].attackPoints * attackCount;              
                //console.log("temp " + temp);

                characters[defender].healthPoints = characters[defender].healthPoints - temp;




                characters[yourCharacter].healthPoints = characters[yourCharacter].healthPoints - characters[defender].counterAttackPoints;

                console.log("State after the " + attackCount + " attack");
                console.log("your char health points " + characters[yourCharacter].healthPoints);
                console.log("defender health points " + characters[defender].healthPoints);
                //console.log(temp);
                console.log("your char attack points " +characters[yourCharacter].attackPoints);
                console.log("defender attack points " +characters[defender].counterAttackPoints);


                $("#status1").html("You attacked " + characters[defender].name + " for damage of " + temp );
                console.log("You attacked " + characters[defender].name + " for damage of " + temp );
                console.log(characters[defender].name + " attacked you back " + " for damage of " + characters[defender].counterAttackPoints );
                $("#status2").html(characters[defender].name + " attacked you back " + " for damage of " + characters[defender].counterAttackPoints );
                console.log("attackCount " + attackCount);

                console.log("ENEMIES COUNT " + enemiesCount);
                if(characters[defender].healthPoints <= 0 && characters[yourCharacter].healthPoints >= 0 && enemiesCount !=0){
                	//console.log("You win");
                	console.log("You have defeated " + characters[defender].name + "." + "You can choose to fight another enemy" );
                	
                	$("#defenderArea>img").hide();
                	$(".enemiesArea>img").prop("disabled",false);
                     // and enemies not reached 0
                     //call for selection of another defender
                     enemiesCount--;
                 }  
                else if(characters[defender].healthPoints <= 0 && characters[yourCharacter].healthPoints >= 0 && enemiesCount === 0){
                        console.log("YOU WIN!! GAME OVER")
                          var buttonRestart = $('<input/>').attr({type:'button',  name: 'restartButton', value:'Restart Game'});
                            $("#attack").hide();
                            $("#restartGame").append(buttonRestart);
                            console.log(buttonRestart);

                }
           		           
         				

                else if(characters[defender].healthPoints >= 0 && characters[yourCharacter].healthPoints <= 0)
                {   console.log("You lose");
                    
                  
                  var buttonRestart = $('<input/>').attr({type:'button',  name: 'restartButton', value:'Restart Game'});
                    $("#attack").hide();
                    $("#restartGame").append(buttonRestart);
                    console.log(buttonRestart);

                }




        });



        $("body").on("click", "#restartGame", function(){
            attackCount = 0;
            $("#defenderArea>img").show();
            $("#attack").show();
            $("#status1").empty();
            $("#status2").empty();
            $("#restartGame").hide();
            //$("#defenderArea").appendTo("#yourCharacter");
            $("#yourCharacter>img").appendTo("#characters");
            $("#defenderArea>img").appendTo("#characters").removeClass("enemies").addClass("allChar");

        });


    });