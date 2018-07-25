function undisplayNewsandUpdates() {
	document.getElementById('newsandupdates').style.visibility = 'collapse';
	document.getElementById('newsandupdates_off').style.visibility = 'collapse';
	document.getElementById('newsandupdates_on').style.visibility = 'visible';
}
function undisplaySiteNews() {
	document.getElementById('sitenews').style.visibility = 'collapse';
	document.getElementById('sitenews_off').style.visibility = 'collapse';
	document.getElementById('sitenews_on').style.visibility = 'visible';
}
function displaySiteNews() {
	document.getElementById('sitenews').style.visibility = 'visible';
	document.getElementById('sitenews_off').style.visibility = 'visible';
	document.getElementById('sitenews_on').style.visibility = 'collapse';
}

function displayNewsandUpdates() {
	document.getElementById('newsandupdates').style.visibility = 'visible';
	document.getElementById('newsandupdates_off').style.visibility = 'visible';
	document.getElementById('newsandupdates_on').style.visibility = 'collapse';
}