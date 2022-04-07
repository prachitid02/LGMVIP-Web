var Name = document.getElementById('Name')
var Email = document.getElementById('Email')
var website = document.getElementById('phone') 
var website = document.getElementById('place') 
var website = document.getElementById('branch')
var btn = document.getElementById('btn');
var cards = document.querySelector('.cards');
var Male = document.getElementById('Male')
var Female = document.getElementById('Female')
var html = document.getElementById('html')
var css = document.getElementById('css')
var javascript = document.getElementById('javascript')
var form = document.querySelector('form');
var selectImage;


btn.addEventListener('click', function () {
  let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  let values = []
  checkboxes.forEach((checkbox) => {
    values.push(checkbox.value);
  });

  if (!Name.value || !Email.value || !phone.value || !branch.value ) {
    alert('Error: Please enter all fields!')
  }
  else {
    cards.innerHTML += `
  <div class="card">
  <div class="card-body">
  <h4 class="title"><b>Name</b>:${Name.value}</h4>
  <p class="text"><b>Gender:</b>${Male.checked ? Male.value : Female.checked ? Female.value : 'Others'}</p>
  <p class="text"><b>Email:</b> ${Email.value}</p>
  <p class="text"><b>Phone:</b>${phone.value}</p>
  <p class="text"><b>Place:</b>${place.value}</p>
  <p class="text"><b>Branch:</b>${branch.value}</p>
  <pre><b>Skills:</b></pre>
  <p class="text">${values}</p>
  </div>
 
  </div>`

    alert(' Student Registered Successfully!!!!')
    form.reset()
  }
});