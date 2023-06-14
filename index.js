function scuberGreetingForFeet(distance){
	if(distance <= 400){
		return "This one is on me!"}

	else if (distance > 2000 && distance <= 2500){
		return "I will gladly take your thirty bucks."
	}
	else (distance > 2500)
		return "No can do."
}
// console.log(scuberGreetingForFeet(199));
  
function ternaryCheckCity(city){
  return city ==='NYC' ? 'Ok, sounds good.' : 'No go.';
}
// console.log(ternaryCheckCity('NYC'));

function switchOnCharmFromTip(generous){
	let result;
	switch (generous){
	case "generous":
		result = "Thank you so much.";
		break;
	case "not as generous":
		result = "Thank you.";
		break;
	default:
		result = "Bye.";
		break;
	}

	return result;
}
// console.log(switchOnCharmFromTip('generous'));