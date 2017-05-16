setTimeout(function() {
	window.addEventListener('resize', function(e) {
		var s = document.getElementsByClassName('sidebar')[0];
			if ( window.getComputedStyle(s).display && window.innerHeight > 450 ) {
			window.addEventListener('scroll', function(e) {
				if (window.scrollY >= 65) {
					s.style.position = 'fixed';
					s.style.top = '20px';
				}

				else {
					s.style.position = 'absolute';
					s.style.top = '85px';
				}
			});
		}
	});
}, 200);