const scriptURL = 'https://script.google.com/macros/s/AKfycbww3_4YXGrlJsxOXgYTnl-UTSSl27r0zudfV9rInFVJhCMbc8Vt6-2CtAmbIsIXQdYJNw/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => alert("Gracias por tu mensaje!"))
 .then(() => { window.location.reload(); })
 .catch(error => console.error('Error!', error.message))
})



