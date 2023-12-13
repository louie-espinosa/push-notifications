"use strict"
//need conditional to run if permission is granted

const button = document.querySelector('button')
  button.addEventListener("click", function() {
  Notification.requestPermission().then(permission => {
    if(permission === 'granted') {
      new Notification("Example Notification", {
        body: "This text is written on the body property",
        data: {hello: "World"}
      })
      alert(notification.data.hello)
    }
  })
})
//created variable, notification, and added event listener (close event) to log the message upon closing notification
const notification = new Notification("example notification", {
  body: "this is more text",
  data: {hello: "Hello, World!"},
  icon: '../assets/bell_push_icon.png'
})
notification.addEventListener("close", e => {
  console.log(e.target.data.hello);
  
})


