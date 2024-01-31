// Listen for clicks on the extension icon
chrome.action.onClicked.addListener((tab) => {
    // Execute content script when the extension icon is clicked
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['contentScript.js']
    });
  });
  