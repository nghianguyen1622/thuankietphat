





jQuery(document).ready(function($) {	
	$('#shipping-information .shipping-radio .radios-group input').on('click', 
	function(e) {	
		
		var value = this.getAttribute("value");		
		var tbody = this.closest("tbody");		
		var trs = tbody.getElementsByTagName("tr");
		
		if (value == "1") {
			/*-- Get the information of current user --*/
			
		}
		
		if (value == "2") {			
			for (var i=1; i<trs.length; i++) {
				
				var inputs = trs[i].getElementsByTagName("input");				
				for (var j=0; j<inputs.length; j++) {
					inputs[j].setAttribute("value", "");
				}
				
				var textareas = trs[i].getElementsByTagName("textarea");
				for (var j=0; j<textareas.length; j++) {
					textareas[j].value = "";
				}
			}
			
		}
		
		if (value == "3") {
			/*-- Get the information from popup - Center List --*/
			
		}
	});	
	
});








jQuery(document).ready(function($) {		
	
	$('#make-a-payment .payment-method-radios li input').on('click', function(e) {			

		var officeForm = this.closest(".office-form");
		var formCards = officeForm.getElementsByClassName("form-card");
		
		var value = this.getAttribute("value");

		for (var i=0; i<formCards.length; i++) {
			
			if (formCards[i].getAttribute("data-method") == value) {				
				if (formCards[i].classList.contains("active") == false) {
					for (var j=0; j<formCards.length; j++) {
						$(formCards[j]).slideUp(500);
						formCards[j].classList.remove("active");	
					}
					formCards[i].classList.add("active");	
					$(formCards[i]).slideDown(500);
				}
			}
					
		}
		
	});
	

	
	$('#make-a-payment .cards-selection li').on('click', function(e) {	
		
		var formCard = this.closest(".form-card");
		
		var cardTypes = formCard.getElementsByClassName("card-type");
		var wCards = formCard.getElementsByClassName("w-card");
		
		var value = this.getAttribute("data-index");
		
		if (this.classList.contains("active") == false) {
			for (var i=0; i<cardTypes.length; i++) {
				if (cardTypes[i].getAttribute("data-card") == value) {
					cardTypes[i].classList.add("active");	
					$(cardTypes[i]).slideDown(500);
				} else {
					cardTypes[i].classList.remove("active");
					$(cardTypes[i]).slideUp(500);
				}
					
			}	
			
			for (var i=0; i<wCards.length; i++) {
				wCards[i].classList.remove("active");					
			}			
			
			this.classList.add("active");
		}
	});
	





});








jQuery(document).ready(function($) {
	$('.payment-method.credit-card .card-type li input').on('click', function(e) {
		var value = this.getAttribute("value");

		var tbody = this.closest("tbody");
		var cardTypeTrs = tbody.getElementsByClassName("card-type-tr");

		for (var i = 0; i < cardTypeTrs.length; i++) {
			var _dataCard = cardTypeTrs[i].getAttribute("data-card");

			if (_dataCard == value) {
				cardTypeTrs[i].classList.add("active");
			}
			else {
				cardTypeTrs[i].classList.remove("active");
			}
		}

	});

});








$('#checkout .credit-card .card-number input').keydown(function() {
	var nextInput = $(this).next().next();
	if (this.value.length > 3) {
		nextInput.focus();
	}
});


$('#checkout .credit-card .validity .input-2-digits').keydown(function() {
	if (this.value.length > 1) {
		var nextInput = $(this).next().next();
		nextInput.focus();
	}
});



jQuery(document).ready(function($) {
	$('input[class="input-10-digits"]').keypress(function() {
    	if (this.value.length >= 10) {
       	 return false;
   		}
	});


	$('input[class="input-6-digits"]').keypress(function() {
	    if (this.value.length >= 8) {
	        return false;
	    }
	});
	
	
	$('.input-4-digits').keypress(function() {
	    if (this.value.length >= 4) {
	        return false;
	    }
	});
	
	$('.input-2-digits').keypress(function() {
	    if (this.value.length >= 2) {
	        return false;
	    }
	});

});





jQuery(document).ready(function($) {	

	$('.method-list .radios-group li input').on('click', function(e) {

		var _section = this.closest("section");		
		var paymentMethods = _section.getElementsByClassName("payment-method");
		
		var value = this.getAttribute("value");
		
		if (this.checked == true) {
			for (var i=0; i<paymentMethods.length; i++) {
				paymentMethods[i].classList.remove("active-method");				
			}

			for (var i=0; i<paymentMethods.length; i++) {
				var dataMethod = paymentMethods[i].getAttribute("data-method");
				if (dataMethod == value) {
					paymentMethods[i].classList.add("active-method");	
				}
			}
		}		
	});	
	
});












jQuery(document).ready(function($) {	
	$('.payment-method .card-type li input').on('click', function(e) {	
		var value = this.getAttribute("value");
		
		var tbody = this.closest("tbody");
		var cardTypeTrs = tbody.getElementsByClassName("card-type-tr");
		
		for (var i=0; i<cardTypeTrs.length; i++) {
			var _dataCard = cardTypeTrs[i].getAttribute("data-card");
			
			if (_dataCard == value) {
				cardTypeTrs[i].classList.add("active");
			}
			else {
				cardTypeTrs[i].classList.remove("active");
			}
		}
		
		
	});	
	
});










