"use strict"

console.log("Hello, World!");

//need conditional to run if permission is granted

const button = document.querySelector('button')
  button.addEventListener("click", function() {
  Notification.requestPermission().then(permission => {
    if(permission === 'granted') {
      new Notification("Example ")
    }
  })
})
