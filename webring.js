// CONFIG

const glitchPlaylist = "https://glitch.com/@adriencateracom/webring-test";
const glitchWebRingPage = "https://tricky-jumpy-powder.glitch.me";
const webRingTitle = "Test Ring";

// - - - - - - - - - - -

// base glitch API request url:
const glitchAPIbaseurl = "https://api.glitch.com/v1/collections/by/fullUrl/projects?fullUrl=";
const dataString = glitchPlaylist.replace('https://glitch.com/@', '');
const dataUrl = glitchAPIbaseurl + dataString;
console.log("data source: " + dataUrl);

const theList = []; // Initialize an empty list to store the "domain" values

async function fetchData() {
	try {
		const response = await fetch(dataUrl); // Fetch data from the URL
		
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();
		
		data.items.forEach(item => {
			theList.push(item.domain);
		});

		//console.log('The List of Domains:', theList);

		const currentHostname = window.location.hostname; // e.g. "hello.glitch.me"
		const currentSubdomain = currentHostname.replace('.glitch.me', ''); // e.g. "hello"
		
		const currentIndex = theList.indexOf(currentSubdomain);

		if (currentIndex !== -1) {
			const prevIndex = (currentIndex - 1 + theList.length) % theList.length;
			const nextIndex = (currentIndex + 1) % theList.length;

			const prevLink = `https://${theList[prevIndex]}.glitch.me/`;
			const nextLink = `https://${theList[nextIndex]}.glitch.me/`;

			console.log('Previous Link:', prevLink);
			console.log('Next Link:', nextLink);

			// Build webring nav
			var navContents = "";
			navContents += '\n<link  rel="stylesheet" href="' + glitchWebRingPage + '/webring.css">';
			navContents += '\n<a href="' + prevLink + '"><span>Prev</span></a>';
			navContents += '\n<a href="' + glitchWebRingPage + '">' + webRingTitle + '</a>';
			navContents += '\n<a href="' + nextLink + '"><span>Next</span></a>';
			const ringNav = document.getElementById('Webring');
			ringNav.innerHTML = navContents;
		
		} else {
			console.log('This domain is not in the playlist.');
		}

	} catch (error) {
		console.error('Error fetching data:', error);
	}
}//fetchData()

window.onload = function(){
	fetchData();
};//window.onload