// Code to run when extension gets installed
chrome.runtime.onInstalled.addListener(function() {
	// Add code to run after install
	//
	// Demo Code:
	// chrome.storage.sync.set({color: '#3aa757'}, function() {
	//   console.log("The color is green.");
  // });
  alert('Extension Installed!')
});
