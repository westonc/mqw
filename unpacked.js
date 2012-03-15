/* non-packed version of the JavaScript code in responsive.html */
function mqw(ids) {
	for(var d=document,link,media,capture,i=0; i<ids.length; i++) {
		if( (link=d.getElementById(ids[i]))
		 && (media=l.getAttribute('media')) ) { 
			if(!link.m) 
				link.m = media;
			link.setAttribute('media',
				(c=link.m.match(/min-width:\s*(\d+)/))
				&&
				c[1]< ( d.documentElement.clientWidth || (d.body&&d.body.offsetWidth) || this.innerWidth) ?
					'screen' :
					link.m
			);
		}
	}
}
window.onresize = function () { mqw(['css480','css640']); } 
mqw(['css480','css640']);
