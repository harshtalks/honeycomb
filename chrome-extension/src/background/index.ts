import 'webextension-polyfill';

chrome.action.onClicked.addListener(function () {
  const newURL = chrome.runtime.getURL('honeycomb/index.html');
  chrome.tabs.create({ url: newURL });
});
