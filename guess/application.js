$(document).ready(function(){
	var random_num = Math.floor((Math.random()*100) + 1);

	$("#submit").click(function(){
		console.log("testing");
		var guess = $("input[name=Awesomeness]").val();
		if(guess == random_num){
			$("#response").html("Good job!");
		} else if(guess < random_num){
			$("#response").html("Guess higher!");
		} else if(guess > random_num){
			$("#response").html("Guess lower");
		}
	});
});
