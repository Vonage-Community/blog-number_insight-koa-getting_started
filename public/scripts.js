const phone = document.querySelector('input')
const submit = document.querySelector('button')
const insights = document.querySelector('code')

submit.addEventListener('click', send, false)

function send(event) {
  fetch('/submit', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      phone: phone.value
    })
  })
  .then(function(res){ return res.json() })
  .then(function(insight){ parseInsight(insight) })
  .catch(function(error){ console.log(error) })
}

function parseInsight(data) {
  insights.innerHTML = JSON.stringify(data, null, 2)
}