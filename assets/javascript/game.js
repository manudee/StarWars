
$(document).ready(function(){
 
var attackCount = 0;
var enemiesCount;

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
            	"counterAttackPoints": 15
            },

            cersei : {
            	"name":"cersei",
            	"healthPoints": 180,
            	"attackPoints": 10,
            	"counterAttackPoints": 25
            }
        };

 
 
        $("body").on("click", ".allChar", function(){

        	$(this).siblings().appendTo("#enemies").removeClass("allChar").addClass("enemies");
        	//console.log($(this).siblings());



            //to count the number of enemies
            enemiesCount = $(".enemies").length;//try doing -1
            //console.log("Enemies available to attack " + enemiesCount);

        	$("#yourCharacter").append(this);

            });//end of click event handler
                               
        $("body").on("click", ".enemies", function(){

        	$(this).appendTo('#defenderArea');
            enemiesCount--;
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



                                                
                //console.log("before the " + attackCount + " attack");
                //console.log("your char health points " + characters[yourCharacter].healthPoints);
                //console.log("defender health points " + characters[defender].healthPoints);
                //console.log("your char attack points " + characters[yourCharacter].attackPoints);
                //console.log("defender attack points " + characters[defender].counterAttackPoints);
                //console.log("attackCount Before " + attackCount);
                attackCount++;
                temp = characters[yourCharacter].attackPoints * attackCount;              
                //console.log("temp " + temp);

                characters[defender].healthPoints = characters[defender].healthPoints - temp;




                characters[yourCharacter].healthPoints = characters[yourCharacter].healthPoints - characters[defender].counterAttackPoints;

                //do this to print the points on the image Div
               // ("#jon").append("<br>" + characters[yourCharacter].healthPoints + "<br>");

                //console.log("State after the " + attackCount + " attack");
                //console.log("your char health points " + characters[yourCharacter].healthPoints);
                //console.log("defender health points " + characters[defender].healthPoints);
                //console.log(temp);
                //console.log("your char attack points " +characters[yourCharacter].attackPoints);
                //console.log("defender counter attack points " +characters[defender].counterAttackPoints);

                $("#status3").html("Your character healthpoints are " + characters[yourCharacter].healthPoints);
                $("#status4").html("Your defender's healthpoints are  " + characters[defender].healthPoints);


                $("#status1").html("You attacked " + characters[defender].name + " for damage of " + temp );
                //console.log("You attacked " + characters[defender].name + " for damage of " + temp );
                //console.log(characters[defender].name + " attacked you back " + " for damage of " + characters[defender].counterAttackPoints );
                $("#status2").html(characters[defender].name + " attacked you back " + " for damage of " + characters[defender].counterAttackPoints );
                //console.log("attackCount " + attackCount);

                //console.log("ENEMIES COUNT " + enemiesCount);

                if(characters[defender].healthPoints <= 0 && characters[yourCharacter].healthPoints >= 0){
                	//console.log("You win");

                     $("#status1").empty();
                     $("#status2").empty();
                     $("#status3").empty();
                     $("#status4").empty();

                     $("#status1").html("You have defeated " + characters[defender].name + "." + " You can choose to fight another enemy");

                	//console.log("You have defeated " + characters[defender].name + "." + " You can choose to fight another enemy" );
                	 

                	$("#defenderArea>img").hide();
                	$(".enemiesArea>img").prop("disabled",false);

                    if( enemiesCount=== 0 ){
                             //console.log("YOU WIN!! GAME OVER")
                             var buttonRestart = $('<input/>').attr({type:'button',  name: 'restartButton', value:'Restart Game'});
                            $("#attack").hide();
                            $("#restartGame").append(buttonRestart);
                            //console.log(buttonRestart); 

                    }
                     // and enemies not reached 0
                     //call for selection of another defender
                     //enemiesCount--;
                 }  
           		           
         				

                else if(characters[defender].healthPoints >= 0 && characters[yourCharacter].healthPoints <= 0)
                {   //console.log("You lose");
                    
                  
                    var buttonRestart = $('<input/>').attr({type:'button',  name: 'restartButton', value:'Restart Game'});
                    $("#attack").hide();
                    $("#restartGame").append(buttonRestart);
                    //console.log(buttonRestart);

                }

                else if(characters[defender].healthPoints <= 0 && characters[yourCharacter].healthPoints <= 0)//when your points go to 0 and defender's points go to zero in same attack
                {

                    $("#status1").empty();
                    $("#status2").empty();
                    $("#status3").empty();
                    $("#status4").empty();

                    $("#status1").html("Your healthPoints and your Defender's healthPoints are both below 0, please RESTART the game");



                    //var button = document.createElement("button");
                    //button.id = "buttonRestart";
                    var buttonRestart = $('<input/>').attr({type:'button',  id: 'restartButton', value:'Restart Game'});
                    //buttonRestart.id = "setButton";

                    $("#attack").hide();
                    $("#restartGame").append(buttonRestart);
                    //console.log(buttonRestart);


                }

});

        

        $("body").on("click", "#restartGame", function(){
            attackCount = 0;
            $("#defenderArea>img").show();
            $("#attack").show();
            $("#status1").empty();
            $("#status2").empty();
            $("#status3").empty();
            $("#status4").empty();
            
          
      
            $("#yourCharacter>img").appendTo("#characters");
            $("#enemies>img").appendTo("#characters").removeClass("enemies").addClass("allChar");
            $("#defenderArea>img").appendTo("#characters").removeClass("enemies").addClass("allChar");
       
            $("#characters>img").prop("disabled",false);
            //$("#setButton").hide();
            $("#buttonRestart").remove();
            characters.jon.healthPoints =120;
            characters.daenerys.healthPoints= 100;
            characters.nightKing.healthPoints=150;
            characters.cersei.healthPoints= 180;


        });


    });