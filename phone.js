
const loadPhone = async(searchText) =>{
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhone(data.data);
}

const displayPhone = phones =>{
const cardContainer = document.getElementById('card-container');
// >>>>>> content empty>>>>>>>>>>>
cardContainer.textContent = '';

// >>>>>>> phones slice >>>>>>>
/*phones = phones.slice(0, 5);
system -1
if(phones == 0){
alert('Worning!Please search your valid phone name')
}
*/

const noPhones = document.getElementById('alart-massage')
if(phones.length === 0){
  noPhones.classList.remove('d-none')
}
else{
  noPhones.classList.add('d-none')
}

phones.forEach(phone =>{
console.log(phone);
  //>>>>>>> Display daynamic append child >>>>>>>>>>>>>>
const cardDiv = document.createElement('col');
cardDiv.innerHTML = `
      <div class="card w-75 m-auto text-danger">
            <img src="${phone.image}" class="card-img-top p-4" alt="...">
            <div class="card-body">
              <h5 class="card-title text-warning">Brand: ${phone.brand}</h5>
              <h6 class="card-title">Phone-name: ${phone.phone_name}</h6>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>`;
cardContainer.appendChild(cardDiv);
})
// >>>>>>>>Stop spinner>>>>>>>
loadSpinner(false);
}

//>>>>>>>>> Even handler phone search >>>>>>>>>>>>>> 
const searchPhone = () =>{
  console.log('ckick')
  const searchField = document.getElementById('search-field')
  const searchText = searchField.value;
  loadPhone(searchText);
  searchField.value = '';

  // >>>>>>>>> Start spinner>>>>>>>>>>
  loadSpinner(true)
}

// >>>>>>>>>> Display spinner common function >>>>>>>>>>>bojinay suport setion join korte hobe
const loadSpinner = isSpinner =>{
  const spinerSection = document.getElementById('display-spnner');
  if(isSpinner){
    spinerSection.classList.remove('d-none');
  }
  else{
    spinerSection.classList.add('d-none')
  }
}




// loadPhone('')