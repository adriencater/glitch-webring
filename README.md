# [Webrings](https://en.wikipedia.org/wiki/Webring) are social networks made by the users.

This webring uses pages made on [Glitch: The friendly community where everyone builds the web](https://glitch.com)


You can see an example page at [tricky-jumpy-powder.glitch.me](https://tricky-jumpy-powder.glitch.me/)

The example playlist is at [glitch.com/@adriencateracom/webring-test](https://glitch.com/@adriencateracom/webring-test)

# Instructions

# 1. Make a hub

Make a ‘Web Ring’ host page on glitch.

This is the ‘hub’ of the web ring.

You can use the **`[Import from GitHub]`** button on glitch.com to clone this repo. (Or put thes files in a glitch project by hand.)

### 2. Note the address

In the preview window, **`[Copy Link]`**

The address will be something like **`https://some-funny-words.glitch.me/`**

You can change this in the projet settings.

# 3. Make a playlist

Make a Playlist on glitch.

Go to your project's page in **`Settings`** → **`Go to project page [↗︎]`** and click on the **`[Add to playlist]`** button. Add to a new playlist.

### 4. Note the address

The address of the paylist will be something like **`https://glitch.com/@username/playlistname`**

# 5. Configure the javascript

Open webring.js and edit the lines

	const glitchPlaylist = "https://glitch.com/@username/playlistname";

	const glitchWebRingPage = "https://some-funny-words.glitch.me";

	const webRingTitle = "Test Ring";

`glitchPlaylist` is the address of your playlist

`glitchWebRingPage` is the address of your hub

`webRingTitle` is the title of your web ring

### 6. Add more projects to your playlist

Invite some friends to make some cool stuff and add their projects to the playlist.

# 7. Include the snippet in each page of the ring

Every project needs to incude the following snippet of code in their index.html:

	<!-- Webring -->
	<div id="Webring"></div>
	<script src="https://some-funny-words.glitch.me/webring.js"></script>
	<!-- Webring -->

Replace `some-funny-words` with your hub address