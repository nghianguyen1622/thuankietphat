




var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);






var player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		height: '390',
		width: '640',
		videoId: 'M7lc1UVf-VE',
		playerVars: {
			'playsinline': 1
		},
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
	});
}


function onPlayerReady(event) {
	event.target.playVideo();
}


var done = false;

function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.PLAYING && !done) {
		setTimeout(stopVideo, 6000);
		done = true;
	}
}

function stopVideo() {
	player.stopVideo();
}























jQuery(document).ready(function($) {	
	var w_videos = document.querySelectorAll(".w-video");
	if (w_videos.length > 0) {
		for (var i=0; i<w_videos.length; i++) {
			if (w_videos[i].classList.contains("slide-video") == false) {
				initializeWowVideo(w_videos[i]);
			}			
		}
	}	
});









function initializeWowVideo (w_video) {
	
	var thumbnail = w_video.querySelector(".thumbnail");
	var video = w_video.querySelector("video");
	
	var _play = w_video.querySelector(".play");
	var _pause = w_video.querySelector(".pause");
	
	if (_play) {
		_play.addEventListener("click", function (e) {
			e.preventDefault();
			e.stopPropagation();
			video.play();
		});
	}
	
	
	if (w_video.classList.contains("slide-video")) {
		if (w_video.classList.contains("onplay") == false) {
			video.play();
		}
	}
	
	w_video.addEventListener("click", function () {
		if (w_video.classList.contains("onplay") == false) {
			video.play();
		}
	});
	
	
	video.onplay = function(e) {
		video.setAttribute("controls", "");
		var _w_video = this.closest(".w-video");
		w_video.classList.remove("onpause");
		w_video.classList.add("onplay");		
	};
	
	video.onended = function(e) {
		var _w_video = this.closest(".w-video");
		w_video.classList.remove("onplay");
		w_video.classList.remove("onpause");
	};
	
}


function pauseOtherVideos (w_videos, index) {
	for (var i=0; i<w_videos.length; i++) {
		if (index != i) {
			var video = w_videos[i].querySelector("video");
			if (video.paused == false) {
				video.pause();
			}
		}		
	}	
}




jQuery(document).ready(function($) {		
	$('#toggle-dropdown').on('click', function(e) {
		e.preventDefault();
		var dropdownMenu = document.getElementById("dropdown-menu");
		if (dropdownMenu.classList.contains("closed")) {
			$(dropdownMenu).slideDown(300);
			dropdownMenu.classList.remove("closed");
			} else {
			$(dropdownMenu).slideUp(300);
			dropdownMenu.classList.add("closed");
		}
		
	});		
});



















jQuery(document).ready(function($) {
	const draggableWrapper = document.querySelector('.draggable-items-wrapper');
	
	if (draggableWrapper) {
		let isDown = false;
		let startX;
		let scrollLeft;
		
		var start_movement = 0;
		var end_movement = 0;	
		
		draggableWrapper.addEventListener('mousedown', (e) => {
			e.stopPropagation();
			isDown = true;
			draggableWrapper.classList.add('active');
			startX = e.pageX - draggableWrapper.offsetLeft;
			scrollLeft = draggableWrapper.scrollLeft;
			
			start_movement = e.pageX;
		});
		
		
		draggableWrapper.addEventListener('mouseleave', () => {
			isDown = false;
			draggableWrapper.classList.remove('active');
		});
		
		
		draggableWrapper.addEventListener('mouseup', (e) => {
			isDown = false;
			draggableWrapper.classList.remove('active');
			end_movement = e.pageX;
		});
		
		
		draggableWrapper.addEventListener('mousemove', (e) => {
			if (!isDown) return;
			e.preventDefault();
			const x = e.pageX - draggableWrapper.offsetLeft;
			const walk = (x - startX) * 1;
			draggableWrapper.scrollLeft = scrollLeft - walk;
		});
		
		
		$('.draggable-items-wrapper a').on('click', function(e) {
			e.preventDefault();
			var movement = end_movement - start_movement;
			if ((movement < 5) && (movement > -5)) {
				window.location.href = this.getAttribute("href");
			}
		});
	}	
	
});










$('.tel input').keydown(function() {
	if (this.value.length > 3) {
		var nextInput = $(this).next().next();
		nextInput.focus();
	}
});






jQuery(document).ready(function($) {
	$('.module-tabs .tabs-nav li').on('click', function(e) {
		
		var tabsNav = this.closest(".tabs-nav");
		var lis = tabsNav.getElementsByTagName("li");
		
		for (var i = 0; i < lis.length; i++) {
			lis[i].classList.remove("active");
		}
		
		this.classList.add("active");
		
		var tabIndex = this.getAttribute("data-tab");
		
		var moduleTabs = this.closest(".module-tabs");
		var tabContents = moduleTabs.getElementsByClassName("tab-content");
		
		for (var i = 0; i < tabContents.length; i++) {
			tabContents[i].classList.remove("active");
		}
		
		for (var i = 0; i < tabContents.length; i++) {
			var index = tabContents[i].getAttribute("data-tab");
			if (tabIndex == index) {
				tabContents[i].classList.add("active");
			}
		}
		
	});
});


/*------ Horizontal Chart --------*/

jQuery(document).ready(function($) {
	
	var hrCharts = document.getElementsByClassName("hr-chart");
	for (var i = 0; i < hrCharts.length; i++) {
		var valueRow = hrCharts[i].getElementsByClassName("value-row")[0];
		var lis = valueRow.getElementsByTagName("li");
		var max = 0;
		
		for (var j = 0; j < lis.length; j++) {
			var value = lis[j].children[0];
			var x = convertToIntValue(value.innerHTML);
			if (max <= x) {
				max = x;
			}
		}
		
		for (var j = 0; j < lis.length; j++) {
			var value = lis[j].children[0];
			var bar = lis[j].children[1];
			initBar(value, bar, max);
		}
	}
	
});



function initBar(value, bar, max) {
	var x = convertToIntValue(value.innerHTML);
	var _height = x / max * 150;
	bar.style.height = _height + "px";
}




/*--------- Calendar ---------*/

jQuery(document).ready(function($) {
	$('.calendar-table td').on('click', function(e) {
		
		var this_day = this.getAttribute("data-day");
		
		var calendar = this.closest(".calendar");
		var calendarSupportTable = calendar.getElementsByClassName("calendar-support-table")[0];
		
		var trs = calendarSupportTable.getElementsByTagName("tr");
		
		if (this_day) {
			if (calendarSupportTable.style.display != "none") {
				
				for (var i = 0; i < trs.length; i++) {
					trs[i].classList.remove("highlight");
				}
				
				for (var i = 0; i < trs.length; i++) {
					var data_day = trs[i].getAttribute("data-day");
					if (this_day == data_day) {
						scrollToElementCenterView(trs[i]);
						trs[i].classList.add("highlight");
					}
				}
			}
		}
		else {
			if (calendarSupportTable.style.display != "none") {
				for (var i = 0; i < trs.length; i++) {
					trs[i].classList.remove("highlight");
				}
			}
		}
	});
});








jQuery(document).ready(function($) {
	$('#terms-n-condition .row.btns a:first-child').on('click', function(e) {
		e.preventDefault();
		var _termConditions = this.closest("#terms-n-condition");
		var _lis = _termConditions.getElementsByTagName("li");
		var _url = this.getAttribute("href");
		
		if (validateTermsCondition(_lis) == true) {
			window.location.href = _url;
		}
	});
});



jQuery(document).ready(function($) {
	$('#terms-n-condition .infos li').on('click', function(e) {
		var _input = this.getElementsByTagName("input")[0];
		var _lis = this.parentElement.children;
		
		if (_input.getAttribute("id") == "checkAll") {
			if (_input.checked == true) {
				checkAll(_lis);
			}
			else {
				uncheckAll(_lis);
			}
		}
	});
});


function validateTermsCondition(_lis) {
	var result = true;
	for (var i = 0; i < _lis.length; i++) {
		var _input = _lis[i].getElementsByTagName("input")[0];
		if (_input.checked == false) {
			result = false;
		}
	}
	return result;
}


function checkAll(_lis) {
	for (var i = 0; i < _lis.length; i++) {
		var _input = _lis[i].getElementsByTagName("input")[0];
		_input.checked = true;
	}
}

function uncheckAll(_lis) {
	for (var i = 0; i < _lis.length; i++) {
		var _input = _lis[i].getElementsByTagName("input")[0];
		_input.checked = false;
	}
}









selectOption();



function selectOption() {
	$('.dropdown-select .option').on('click', function(e) {
		/*e.stopPropagation();*/
		
		var optionValue = this.innerHTML;
		
		var dropdownSelect = this.closest(".dropdown-select");
		var liOptions = dropdownSelect.getElementsByClassName("option");
		
		for (var i = 0; i < liOptions.length; i++) {
			liOptions[i].classList.remove("active");
		}
		this.classList.add("active");
		
		
		var _selected = this.parentNode.previousElementSibling;
		var _btn = _selected.children[1];
		_selected.children[0].innerHTML = optionValue;
		_btn.classList.toggle("opened");
		$(this.parentNode).slideUp(300);
		
		
		
		var pagination = this.parentElement.parentElement.parentElement.parentElement;
		
		if (pagination) {
			var results = this.closest(".results");
			if(null !== results) {
				var all_paginations = results.getElementsByClassName("pagination");
				
				for (var i=0; i<all_paginations.length; i++) {
					var dropdown_select = all_paginations[i].getElementsByClassName("dropdown-select")[0];
					var selectedDiv = dropdown_select.getElementsByClassName("selected")[0];
					selectedDiv.children[0].innerHTML = optionValue;
				}
			}
		}
	});
}





jQuery(document).ready(function($) {
	$('.dropdown-select .selected').on('click', function(e) {
		e.stopPropagation();
		//closeAllSelect();
		var _btn = this.children[1];
		_btn.classList.toggle("opened");
		$(this.nextElementSibling).slideToggle(300);
		
		
		var value = this.getElementsByTagName("span")[0].innerHTML;
		var optionsDiv = this.nextElementSibling;
		
		var options = optionsDiv.children;
		
		if (options.length > 0) {
			for (var i=0; i<options.length; i++) {
				var option_value = options[i].innerHTML;
				if (value == option_value) {					
					options[i].classList.add("active");
				}
			}
		}		
		
	});
	
});






document.addEventListener("click", closeAllSelect);

function closeAllSelect() {
	var dropdownSelects = document.getElementsByClassName("dropdown-select");
	if (dropdownSelects.length > 0) {
		for (i = 0; i < dropdownSelects.length; i++) {
			var options = dropdownSelects[i].getElementsByClassName("options")[0];
			var btn = dropdownSelects[i].getElementsByClassName("btn-open-sub ")[0];
			
			if (btn.classList.contains("opened")) {
				$(options).slideUp(300);
				btn.classList.remove("opened");
			}
		}
	}
}





jQuery(document).ready(function($) {
	
	$('#search-product .btn-search-open').on('click', function(e) {	
		
		var main_nav = document.querySelector("#main-nav");
		
		main_nav.style.transform = "translateX(-10%)";
		main_nav.style.opacity = "0";
		
		
		var search_product = document.querySelector("#search-product");
		
		search_product.classList.remove("closed");
		search_product.classList.add("opened");
		
		
		var logo = document.querySelector("#logo");
		
		var _width = window.innerWidth;
		if (_width <= 575) {
			logo.style.transform = "translateX(-30%)";
			logo.style.opacity = "0";
		}
		
	});
	
	
	$('#search-product .btn-search-close').on('click', function(e) {	
		
		var main_nav = document.querySelector("#main-nav");		
		main_nav.style.transform = "translateX(0)";
		main_nav.style.opacity = "1";		
		
		var search_product = document.querySelector("#search-product");		
		search_product.classList.remove("opened");
		search_product.classList.add("closed");
		
		
		var logo = document.querySelector("#logo");
		
		var _width = window.innerWidth;
		if (_width <= 575) {
			logo.style.transform = "translateX(0)";
			logo.style.opacity = "1";
		}
		
	});
	
	
});
































