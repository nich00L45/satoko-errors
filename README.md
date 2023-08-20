# Satoko Errors for Firefox
A small, silly project I made based on this Twitter post: https://twitter.com/0rionX99/status/1282621799780450304?s=20
Whenever the browser receives a 400/401/403/404 response from a website, it brings up a tab with the part of the image corresponding to the error code. 

<p float="left">
  <img src="images/satoko400.png" width="25%" />
  <img src="images/satoko401.png" width="25%" /> 

</p>
<p float="left">
  <img src="images/satoko403.png" width="25%" />
  <img src="images/satoko404.png" width="25%" /> 
</p>

This project was originally a Chrome extension, and so far I've only made it have feature parity with the Chrome version. I haven't looked into how viable injecting an image into Firefox's default error pages would be, but I may look into it in the future (no promises!)

## How to Install
As a word of caution, I will again specify that I'm new to making extensions, so use this at your own risk. There's very little code involved, so in theory not much can go wrong, but just figured I'd get that disclaimer out there! Now, if you do want to install this, either clone the git repo to your computer through your method of choice (for those who are familiar with git), or for those less familiar with GitHub, click the green "<> Code" button towards the top right of the page, then select "Download ZIP." Once the .zip file is downloaded, unzip it to a new folder.

At the moment, I've only tried adding it as a temporary extension. Since I don't intend for this to be used long-term anyways, I think that should be fine. In order to add a temporary extension to Firefox, enter `about:debugging#/runtime/this-firefox` into your search bar, then click the "Load Temporary Add-on" button and select the file's manifest.json from your file explorer. This should load the extension!

To test it, you can go anywhere you want that might trigger a 4xx error. To trigger a 404, I recommend going somewhere like https://google.com/satoko, which is a page that doesn't exist, and will thus trigger the error. 

Have fun! 

![Funny Satoko Icon](images/icon.png)
