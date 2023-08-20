# Satoko Errors for Chrome
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

Originally I wanted to have the image injected into Chrome's default error code page, but I wasn't able to find a way to do so with Google's API for Extensions (it seemed to reject it for security reasons). As such, this exension isn't practical at all, since it brings up a seperate tab that the user just has to close. Ultimately though, this was just a fun side project I decided to do in about an hour, both for some laughs and to be able to learn how to make Chrome extensions. This is very much an amateur project, as I'm more of a backend dev, so there's no doubt plenty of ways this could've been improved!

## How to Install
As a word of caution, I will again specify that I'm new to making extensions, so use this at your own risk. There's very little code involved, so in theory not much can go wrong, but just figured I'd get that disclaimer out there! Now, if you do want to install this, either clone the git repo to your computer through your method of choice (for those who are familiar with git), or for those less familiar with GitHub, click the green "<> Code" button towards the top right of the page, then select "Download ZIP." Once the .zip file is downloaded, unzip it to a new folder.

Once the project is on your computer, go into Chrome, click on the icon with the vertical ellipses ("..."), then hover over Extensions and click "Manage Extensions" (alternatively, you can just enter `chrome://extensions/` into your search bar to get to the same place).

Once there, you'll want to toggle the "Developer mode" slider at the top right of the page. Once this is done, you should have a button towards the top left that says "Load unpacked." Click that, select the folder of this project, and you should see it get added to your list of extensions!

To test it, you can go anywhere you want that might trigger a 4xx error. To trigger a 404, I recommend going somewhere like https://google.com/satoko, which is a page that doesn't exist, and will thus trigger the error. 

Have fun! 

![Funny Satoko Icon](images/icon.png)
