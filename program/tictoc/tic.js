var i=0;
$(document).ready(function () {

	$("#one").click(function (){
	   print(this);
	   i++;
		});
	$("#two").click(function (){
	print(this);
	i++;
	});
	$("#three").click(function (){
	print(this);
	i++;
	});
	$("#four").click(function (){
	print(this);
	i++;
	});
	$("#five").click(function (){
	print(this);
	i++;
	});
	$("#six").click(function (){
	print(this);
	i++;
	});
	$("#seven").click(function (){
	print(this);
	i++;
	});
	$("#eight").click(function (){
	print(this);
	i++;
	});
	$("#nine").click(function (){
	print(this);
	i++;
	});
function print(x){
	if(i%2==0){
	$(x).css({'background-image':'url(ticCross.png)','background-size':'cover'});
	$(x).text("x");
	$(x).off("click");
	check();
	}
	else{
	$(x).css({'background-image':'url(ticO.png)','background-size':'cover'});
	$(x).text("o");
	$(x).off("click");
	check();
	}	
}

function check(){
	var c=0;
if(($("#one").text()=="x")&&($("#two").text()=="x")&&($("#three").text()=="x")||
	($("#four").text()=="x")&&($("#five").text()=="x")&&($("#six").text()=="x")||
	($("#seven").text()=="x")&&($("#eight").text()=="x")&&($("#nine").text()=="x")||
	($("#one").text()=="x")&&($("#four").text()=="x")&&($("#seven").text()=="x")||
	($("#two").text()=="x")&&($("#five").text()=="x")&&($("#eight").text()=="x")||
	($("#three").text()=="x")&&($("#six").text()=="x")&&($("#nine").text()=="x")||
	($("#one").text()=="x")&&($("#five").text()=="x")&&($("#nine").text()=="x")||
	($("#three").text()=="x")&&($("#five").text()=="x")&&($("#seven").text()=="x")){
	$("p").text("x-win");
	c=1;
}
else
if(($("#one").text()=="o")&&($("#two").text()=="o")&&($("#three").text()=="o")||
	($("#four").text()=="o")&&($("#five").text()=="o")&&($("#six").text()=="o")||
	($("#seven").text()=="o")&&($("#eight").text()=="o")&&($("#nine").text()=="o")||
	($("#one").text()=="o")&&($("#four").text()=="o")&&($("#seven").text()=="o")||
	($("#two").text()=="o")&&($("#five").text()=="o")&&($("#eight").text()=="o")||
	($("#three").text()=="o")&&($("#six").text()=="o")&&($("#nine").text()=="o")||
	($("#one").text()=="o")&&($("#five").text()=="o")&&($("#nine").text()=="o")||
	($("#three").text()=="o")&&($("#five").text()=="o")&&($("#seven").text()=="o"))
	{
		c=1;
			$("p").text("o-win");
}
else
if(i>7)
			$("p").text("draw");
}
});