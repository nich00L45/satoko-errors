browser.webRequest.onCompleted.addListener(details => {
    if (details.statusCode >= 400 && details.statusCode <= 404) {
      const errorType = details.statusCode;
      const errorPage = browser.extension.getURL(errorType + ".html");
      browser.tabs.create({url: errorPage});
      console.log("satoko (" + errorType + ") generated");
    }
  }, { urls: ["<all_urls>"] });