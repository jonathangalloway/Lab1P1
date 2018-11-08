<script>
document.getElementById("weather").addEventListener("change", whatToWear);
document.getElementById("event").addEventListener("change", whatToWear);
function whatToWear() {
    var eventType = document.getElementById("event").value;
    var tempFahr = document.getElementById("weather").value;
    var result = "";
    if (eventType==="" && tempFahr===""){
    	result = "Please enter a temperature and select an event type.";
    }else if (eventType!=="" && tempFahr ===""){
    	result = "Please enter a temperature.";
    }else if (eventType==="" && tempFahr !==""){
    	result = "Please select an event type.";
    }else if (eventType!=="" && tempFahr !==""){
    	result = "Since it's "+tempFahr+" degrees and you are going to a"+eventType+"event, you should wear ";
    	if (eventType === "casual"){
    		result = result + "something comfy";
    	} else if (eventType === "semi-formal"){
    		result = result + "a polo";
    	} else if (eventType === "formal"){
    		result = result + "a suit";
    	}
    	result = result+" and "
    	if (tempFahr < 54) {
    		result = result + "a coat."
    	}else if (tempFahr > 53 && tempFahr < 71){
    		result = result + "a jacket."
    	}else if (tempFahr > 70){
    		result = result + "no jacket."
    	}
    }
    document.getElementById("result").innerHTML = result;

}
</script>
