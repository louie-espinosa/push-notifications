"use strict"

console.log("Hello, World!");

const button = document.querySelector('button')
  button.addEventListener("click", function() {
  Notification.requestPermission().then(permission => {
    alert(permission)
  })
})
