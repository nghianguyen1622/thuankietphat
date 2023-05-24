










jQuery(document).ready(function($) {	
	
	var mobileMainMenu = document.getElementById("mobile-main-menu");
	var _subMenus = mobileMainMenu.getElementsByClassName("sub-menu");
	
	
	
	var _btns = mobileMainMenu.getElementsByClassName("btn-open-sub");
	for (var i=0; i<_btns.length; i++) {
		_btns[i].setAttribute("data-index", i);
	}
	
	
	
	$('#mobile-main-menu .btn-open-sub').on('click', function(e) {	
		e.preventDefault();	
		var _subMenu = this.parentElement.nextElementSibling;
		
		
		var index = this.getAttribute("data-index");
		var state = false;
		if (this.classList.contains("opened")) {
			state = true;
		}
		
		for (var i=0; i<_subMenus.length; i++) {
			if (_subMenus[i].classList.contains("closed") == false) {
				$(_subMenus[i]).slideToggle();
				_subMenus[i].classList.toggle("closed");
				_btns[i].classList.toggle("opened");
			}
		}
		
		if (state == false) {
			$(_subMenu).slideToggle();
			_subMenu.classList.toggle("closed");
			this.classList.toggle("opened");
		}
	});
	
});






jQuery(document).ready(function($) {	
	var mobileMenu = document.getElementById("mobile-menu");	
	$('#mobile-toggle').on('click', function(e) {	
		e.preventDefault();	
		mobileMenu.classList.remove("closed");
	});	
});



jQuery(document).ready(function($) {	
	var mobileMenu = document.getElementById("mobile-menu");	
	$('#mobile-toggle-off').on('click', function(e) {	
		e.preventDefault();	
		mobileMenu.classList.add("closed");
	});	
});





jQuery(document).ready(function($) {	
	var subPagesNav = document.getElementById("subpages-nav");	
	
	if (subPagesNav) {
		var _navWrapper = subPagesNav.getElementsByClassName("nav-wrapper")[0];
		
		$('#subpages-nav .btn-open-sub').on('click', function(e) {	
			e.preventDefault();	
			this.classList.toggle("opened");
			$(_navWrapper).slideToggle();
		});
	}
	
	
});










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








function setComma(n) {
	var reg = /(^[+-]?\d+)(\d{3})/;
	n += '';
	while (reg.test(n)) {
		n = n.replace(reg, '$1' + ',' + '$2');
	}
	return n;
}





function convertToIntValue (_string) {
	return parseInt(_string.replace(/,/g, ''), 10);
}

function convertToIntString (_value) {
	return _value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}



function scrollToElement (el) {	
	var y = absolutePosition(el).top;
	console.log(y);
	var body = $("html, body");
	body.stop().animate({scrollTop:y}, 500, 'swing');	
}


function scrollToElementCenterView (el) {	
	var _top = absolutePosition(el).top;
	var y = _top - (window.innerHeight - absolutePosition(el).height)/2;
	var body = $("html, body");
	body.stop().animate({scrollTop:y}, 500, 'swing');	
}


function absolutePosition(el) {
    var
        found,
        left = 0,
        top = 0,
        width = 0,
        height = 0,
        offsetBase = absolutePosition.offsetBase;
		
    if (!offsetBase && document.body) {
        offsetBase = absolutePosition.offsetBase = document.createElement('div');
        offsetBase.style.cssText = 'position:absolute;left:0;top:0';
        document.body.appendChild(offsetBase);
    }
	
    if (el && el.ownerDocument === document && 'getBoundingClientRect' in el && offsetBase) {
        var boundingRect = el.getBoundingClientRect();
        var baseRect = offsetBase.getBoundingClientRect();
        found = true;
        left = boundingRect.left - baseRect.left;
        top = boundingRect.top - baseRect.top;
        width = boundingRect.right - boundingRect.left;
        height = boundingRect.bottom - boundingRect.top;
    }
	
    return {
        found: found,
        left: left,
        top: top,
        width: width,
        height: height,
        right: left + width,
        bottom: top + height
    };
}

function convertToZeroDecimal (str) {
	var _number = parseInt(str);
	if (_number < 10) {
		return "0" + _number;
	}
	else return _number.toString();
}





function isInsideX(pos, el) {
	var rect = el.getBoundingClientRect();
	if (pos > rect.left && pos < rect.right) {
		return true;		
	} else {
		return false;
	}
}


function isInsideY(pos, el) {
	var rect = el.getBoundingClientRect();
	if (pos > rect.top && pos < rect.bottom) {
		return true;		
	} else {
		return false;
	}
}








function getYoutubeVideoId (src) {
	var r;
	var rx = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|shorts\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
    r = src.match(rx);
    return r[1];
}












