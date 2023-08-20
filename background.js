chrome.webRequest.onCompleted.addListener(details => {
    if (details.statusCode >= 400 && details.statusCode <= 404) {
      const errorType = details.statusCode;
      chrome.tabs.create({url: errorType + ".html"});
      console.log("satoko (" + errorType + ") generated");
    }
  }, { urls: ["<all_urls>"] });
  