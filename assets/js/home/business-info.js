









jQuery(document).ready(function($) {	
	var regis_form = document.querySelector('.regis-form');;

	var _tabsNav = regis_form.querySelector(".tabs-nav");
	var _tabsNavLis = _tabsNav.getElementsByTagName("li");
	var _tabContents = regis_form.getElementsByClassName("tab-content");	
	
	$('.regis-form .tabs-nav li').on('click', function(e) {			
		e.preventDefault();	
		if (this.classList.contains("active") == false) {
			for (var i=0; i<_tabsNavLis.length; i++) {
				_tabsNavLis[i].classList.remove("active");
			}
			
			for (var i=0; i<_tabContents.length; i++) {
				$(_tabContents[i]).slideUp(500);				
			}
			
			this.classList.add("active");
			var _index = this.getAttribute("data-index");
			
			for (var i=0; i<_tabContents.length; i++) {
				if (_tabContents[i].getAttribute("data-tab") == _index) {
					$(_tabContents[i]).slideDown(500);
				}
			}			
		}
		
	});
	
});
















// jQuery(document).ready(function($) {	

// 	$('#business-info .regis-tab li').on('click', function(e) {		


// 		var registration = document.querySelector("#registration");
	
// 		var regis_form = this.closest(".regis-form");		
// 		var regis_tab = this.closest(".regis-tab");		
		
// 		var nav_lis = regis_tab.querySelectorAll("li");
// 		var tab_contents = regis_form.querySelectorAll(".regis-content .tab-content");
		
// 		if (this.classList.contains("active") == false) {
// 			for (var i=0; i<tab_contents.length; i++) {
// 				//$(tab_contents[i]).slideUp(500);
// 				if (tab_contents[i].classList.contains("active")) {
// 					turnOffTabContent(tab_contents[i]);
// 				}				
// 			}
			
// 			var li_index = this.getAttribute("data-index");
			
// 			for (var i=0; i<tab_contents.length; i++) {
// 				var content_index = tab_contents[i].getAttribute("data-tab");
// 				if (li_index == content_index) {
// 					//$(tab_contents[i]).slideDown(1500);
// 					turnOnTabContent(tab_contents[i]);
// 				}
// 			}
			
			
// 			window.scrollTo(0, registration.offsetTop);
			
			
// 			for (var i=0; i<nav_lis.length; i++) {
// 				nav_lis[i].classList.remove("active");
// 			}
			
// 			this.classList.add("active");
// 		}
		

		
// 	});
	


// });




// function turnOffTabContent (tab_content) {
// 	tab_content.classList.remove("active");
// 	tab_content.style.transition = "all ease-in-out .5s";
// 	tab_content.style.transform = "translateX(-100%)";
// 	tab_content.style.opacity = "0";
// }

// function turnOnTabContent (tab_content) {
// 	tab_content.classList.add("active");
// 	tab_content.style.transition = "all ease-in-out .5s";
// 	tab_content.style.transform = "translateX(100%)";	
// 	setTimeout (function () {
// 		tab_content.style.transform = "translateX(0)";
// 		tab_content.style.opacity = "1";	
// 	}, 500)	
	
// }







/* 
jQuery(document).ready(function($) {	

	$('#registration .regis-tab li').on('click', function(e) {			

		var recruitForm = this.closest(".regis-form");
		
		var tabContent = recruitForm.getElementsByClassName("tab-content");
		var tabNames = recruitForm.getElementsByClassName("tab-names");
		
		var value = this.getAttribute("data-index");
		
		if (this.classList.contains("active") == false) {
			for (var i=0; i<tabContent.length; i++) {
				if (tabContent[i].getAttribute("data-tab") == value) {
					tabContent[i].classList.add("active");	
					$(tabContent[i]).fadeIn(100);
				} else {
					tabContent[i].classList.remove("active");
					$(tabContent[i]).fadeOut(100);
				}
					
			}	
			
			for (var i=0; i<tabNames.length; i++) {
				tabNames[i].classList.remove("active");					
			}			
			
			this.classList.add("active");
		}
		
	});
	


}); */