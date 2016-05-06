chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    title: 'I\'m Feeling Lucky',
    contexts:['selection'],
    id: 'feeling-lucky'
  })
})

chrome.contextMenus.onClicked.addListener(function(info) {
  chrome.tabs.create({
    url: 'http://www.google.com/search?q=' + info.selectionText +'&btnI=Im+Feeling+Lucky',
    active: false
  })
})
