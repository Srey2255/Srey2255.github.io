$(document).ready(function(){
	var random_num = Math.floor((Math.random()*100) + 1);

	$("#submit").click(function(){
		
		var guess = $("input[name=Awesomeness]").val();
		console.log(guess);
		if(guess == random_num){
			$(".box").html("Good job!");
		} else if(guess < random_num){
			$(".box").html("Guess higher!");
		} else if(guess > random_num){
			$(".box").html("Guess lower");
		}
	});
});
