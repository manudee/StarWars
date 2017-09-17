function first() {
	var c1 = 10;

    second();
    console.log("c1 " + c1);
    function second() {
    	var c2 = 20;
        third();
        function third() {
        	var c3 = 30;
            fourth();
            function fourth() {
            	var c4 = 40;
            	console.log("c3 "+ c3);
            	console.log("c1 "+ c1);
                // do something
            }
        }
    }   
}
first();