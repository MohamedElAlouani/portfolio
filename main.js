$(document).ready(function() {
	var nameCollapsed = false;
	$(".name").click(function() {
		if (nameCollapsed === false) {  
			nameCollapsed = true;
			$("#notInitial1").fadeOut(200).animate({width: "0%"}, 300).dequeue();
			$("#notInitial2").fadeOut(200).animate({width: "0%"}, 300).dequeue();
			$(".main").delay(200).fadeIn(100);
		}
		else {
			nameCollapsed = false;
			$(".po > div").css("opacity", "0");
			$(".ab > div").css("opacity", "0");				
			$(".co > div").css("opacity", "0");
			$("#eins").css("transform", "rotate(0deg)");
			$("#zwei").css("transform", "rotate(0deg)");
			$("#drei").css("transform", "rotate(0deg)");
			$("#wahed").css("transform", "rotate(0deg)");
			$("#jouj").css("transform", "rotate(0deg)");
			$("#tlata").css("transform", "rotate(0deg)");	
			$("#one").css("transform", "scale(1,1)");
			$("#two").css("transform", "scale(1,1)");
			$("#three").css("transform", "scale(1,1)");	
			aboutClicked = false;
			contactClicked = false;
			portfolioClicked = false;										
			setTimeout(function() {
				$(".info").css("height", "0px")	;
			}, 200);
			setTimeout(function() {	
				$(".uselessStrip").css("width", "0px");	
			}, 400);
			setTimeout(function() {		
				$("#notInitial1").animate({width: "467px"}, 300).fadeIn(150).dequeue();
				$("#notInitial2").animate({width: "251px"}, 300).fadeIn(150).dequeue();
				$(".main").fadeOut(100);
			}, 600);	
		}
	});

	$(".portfolio").mouseenter(function() {
		$("#textPortfolio").css("opacity", "0.5");
	});

	$(".portfolio").mouseleave(function() {
		$("#textPortfolio").css("opacity", "0");
		$("#textPortfolio").css("margin-top", "70px");
	});

	$(".about").mouseenter(function() {
		$("#textAbout").css("opacity", "0.5");
	});

	$(".about").mouseleave(function() {
		$("#textAbout").css("opacity", "0");
		$("#textAbout").css("margin-top", "70px");
	});

	$(".contact").mouseenter(function() {
		$("#textContact").css("opacity", "0.5");
	});

	$(".contact").mouseleave(function() {
		$("#textContact").css("opacity", "0");
		$("#textContact").css("margin-top", "70px");		
	});

	var aboutClicked = false;
	$(".about").click(function() {
		if (aboutClicked === false) {
			$(".uselessStrip").css("width", "550px");
			if (portfolioClicked === true || contactClicked === true) {
				$(".info").css("height", "0px");
				$(".po > div").css("opacity", "0");
				$(".co > div").css("opacity", "0");	
				setTimeout(function() {
					$(".info").css("height", "280");
				}, 500)	
				setTimeout(function() {
					$(".ab > div").css("opacity", "1");
				}, 900);
			}
			else {						
				$(".info").delay(500).css("height", "280px");
				setTimeout(function() {
					$(".ab > div").css("opacity", "1");
				}, 400);
			}
			if (portfolioClicked === true) {
				$("#eins").css("transform", "rotate(-360deg)");
				$("#zwei").css("transform", "rotate(-360deg)");
				$("#drei").css("transform", "rotate(-360deg)");	
				portfolioClicked = false;		
			}
			if (contactClicked === true) {
				$("#one").css("transform", "scale(1,1)");
				$("#two").css("transform", "scale(1,1)");
				$("#three").css("transform", "scale(1,1)");		
				contactClicked = false;		
			}
			$("#wahed").css("transform", "rotate(30deg)");
			$("#jouj").css("transform", "rotate(60deg)");
			$("#tlata").css("transform", "rotate(90deg)");
			$("#textAbout").css("opacity", "1")
			$("#textAbout").css("margin-top", "60px")	
			aboutClicked = true;
		}
		else {
			$(".ab > div").css("opacity", "0");
			$(".info").css("height", "0");
			setTimeout(function() {
				$(".uselessStrip").css("width", "0px");
			}, 500);
			$("#wahed").css("transform", "rotate(-90deg)");
			$("#jouj").css("transform", "rotate(-90deg)");
			$("#tlata").css("transform", "rotate(-90deg)");	
			$("#textAbout").css("opacity", "0.5")
			$("#textAbout").css("margin-top", "70px")	
			aboutClicked = false;	
		}
	});

	var portfolioClicked = false;
	$(".portfolio").click(function() {
		if (portfolioClicked === false) {
			$(".uselessStrip").css("width", "550px");
			if (aboutClicked === true || contactClicked === true) {
				$(".info").css("height", "0px");
				$(".ab > div").css("opacity", "0");
				$(".co > div").css("opacity", "0");
				setTimeout(function() {
					$(".info").css("height", "280");
				}, 500)	
				setTimeout(function() {
					$(".po > div").css("opacity", "1");
				}, 900);				
			}
			else {
				$(".info").css("height", "280px");
				setTimeout(function() {
					$(".po > div").css("opacity", "1");
				}, 400);	
			}	
			if (aboutClicked === true) {
				$("#wahed").css("transform", "rotate(-90deg)");
				$("#jouj").css("transform", "rotate(-90deg)");
				$("#tlata").css("transform", "rotate(-90deg)");	
				aboutClicked = false;
			}
			if (contactClicked === true) {
				$("#one").css("transform", "scale(1,1)");
				$("#two").css("transform", "scale(1,1)");
				$("#three").css("transform", "scale(1,1)");		
				contactClicked = false;		
			}
			$("#eins").css("transform", "rotate(30deg)");
			$("#zwei").css("transform", "rotate(60deg)");
			$("#drei").css("transform", "rotate(90deg)");
			$("#textPortfolio").css("opacity", "1")
			$("#textPortfolio").css("margin-top", "60px")
			portfolioClicked = true;
		}
		else {
			$(".po > div").css("opacity", "0");
			$(".info").css("height", "0");
			setTimeout(function() {
				$(".uselessStrip").css("width", "0px");
			}, 500);
			$("#eins").css("transform", "rotate(-360deg)");
			$("#zwei").css("transform", "rotate(-360deg)");
			$("#drei").css("transform", "rotate(-360deg)");	
			$("#textPortfolio").css("opacity", "0.5")
			$("#textPortfolio").css("margin-top", "70px")				
			portfolioClicked = false;	
		}
	});

	var contactClicked = false;
	$(".contact").click(function() {
		var oneHW = [0.7, 0.8, 0.9, 1.1, 1.2, 1.3][Math.floor(Math.random() * 6)];
		var twoHW = [0.7, 0.8, 0.9, 1.1, 1.2, 1.3][Math.floor(Math.random() * 6)];
		var threeHW = [0.7, 0.8, 0.9, 1.1, 1.2, 1.3][Math.floor(Math.random() * 6)];	
		if (contactClicked === false) {
			$(".uselessStrip").css("width", "550px");
			if (aboutClicked === true || portfolioClicked === true) {
				$(".info").css("height", "0px");
				$(".po > div").css("opacity", "0");
				$(".ab > div").css("opacity", "0");
				setTimeout(function() {
					$(".info").css("height", "280");
				}, 500);
				setTimeout(function() {
					$(".co > div").css("opacity", "1");
				}, 900);	
			}
			else {
				$(".info").css("height", "280px");
				setTimeout(function() {
					$(".co > div").css("opacity", "1");
				}, 400);
			}
			if (aboutClicked === true) {
				$("#wahed").css("transform", "rotate(-90deg)");
				$("#jouj").css("transform", "rotate(-90deg)");
				$("#tlata").css("transform", "rotate(-90deg)");	
				aboutClicked = false;
			}
			if (portfolioClicked === true) {
				$("#eins").css("transform", "rotate(-360deg)");
				$("#zwei").css("transform", "rotate(-360deg)");
				$("#drei").css("transform", "rotate(-360deg)");		
				portfolioClicked = false;		
			}			
			$("#one").css("transform", "scale(" + oneHW + "," + oneHW + ")");
			$("#two").css("transform", "scale(" + twoHW + "," + twoHW + ")");
			$("#three").css("transform", "scale(" + threeHW + "," + threeHW + ")");
			$("#textContact").css("opacity", "1");
			$("#textContact").css("margin-top", "60px");
			contactClicked = true;
		}
		else {
			$(".co > div").css("opacity", "0");
			$(".info").css("height", "0");
			setTimeout(function() {
				$(".uselessStrip").css("width", "0px");
			}, 500);
			$("#one").css("transform", "scale(1,1)");
			$("#two").css("transform", "scale(1,1)");
			$("#three").css("transform", "scale(1,1)");	
			$("#textContact").css("opacity", "0.5");
			$("#textContact").css("margin-top", "70px");	
			contactClicked = false;	
		}
	});

});