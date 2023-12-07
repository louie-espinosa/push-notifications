"use strict"
.console.log("Hello, WOrld!");

const button = document.querySelector('button')
  button.addEventListener("click", function() {
  Notification.requestPermission().then(permission => {
    alert(permission)
  })
})
