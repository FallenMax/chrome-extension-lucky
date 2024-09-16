chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    title: "I'm Feeling Lucky",
    contexts: ['selection'],
    id: 'feeling-lucky',
  })
})

chrome.contextMenus.onClicked.addListener(function (info) {
  chrome.tabs.create({
    url: 'https://www.google.com/search?q=' + encodeURIComponent(info.selectionText) + '&btnI=Im+Feeling+Lucky',
    active: false,
  })
})
