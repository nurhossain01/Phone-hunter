// phone data loadind
const loadPhone = async(search) =>{
  const url = `https://openapi.programming-hero.com/api/phones?search=${search}`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhone(data.data);

}

// search your Phones button
const searchPhones = () =>{
  // start toggle
  toggleSpinner(true);
  const searchfield = document.getElementById('search-field');
  const searchText = searchfield.value;
  searchfield.value = '';
  loadPhone(searchText);

}


// phone data display
const displayPhone = phones =>{
  const cardContainer = document.getElementById('card-container');
  cardContainer.textContent = '';
  if(phones.length > 10){
    phones = phones.slice(0, 10)
  }
  // alert smg phones
  const alertMassges = document.getElementById('alert-massege');
  if(phones.length === 0){
    alertMassges.classList.remove('d-none');
  }
  else{
    alertMassges.classList.add('d-none')
  }
  phones.forEach(phone =>{
    console.log(phone)
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('col');
    cardDiv.innerHTML=`
    <div class="card w-75 m-auto p-2">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${phone.brand}</h5>
              <h5 class="card-title">${phone.phone_name
              }</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

              <button onclick="detailsButton('${phone.slug}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Show details</button>
          </div>`;
    cardContainer.appendChild(cardDiv);      
  })
  toggleSpinner(false);
}

// spnner toggle
const toggleSpinner = isLoading =>{
  const toggleSpinner = document.getElementById('toggle-spnner');
  if(isLoading){
    toggleSpinner.classList.remove('d-none');
  }
  else{
    toggleSpinner.classList.add('d-none');
  }
}

// load phone details
const detailsButton = async id =>{
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  const  res = await fetch(url);
  const data = await res.json();
  displayDetails(data.data)
}
const displayDetails = phone =>{
  console.log(phone)
const titleText = document.getElementById('exampleModalLabel');
titleText.innerText = phone.name;
const phoneDetails = document.getElementById('phone-details');
phoneDetails.innerHTML = `
<img src = "${phone.image}">
<p>Release date: ${phone.releaseDate ? phone.releaseDate : 'No Release Date Found'}</p>
<p>Name: ${phone.name}</p>
// <p>Stories: ${phone.mainFeatures.memory ? phone.mainFeatures.memory : 'No Stories'}</p>
<p>Display Size: ${phone.mainFeatures.displaySize ? phone.mainFeatures.displaySize : 'No display size found'}</p>
`;

}

// enter key down
document.getElementById('search-field').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    const searchfield = document.getElementById('search-field');
  const searchText = searchfield.value;
  searchfield.value = '';
  loadPhone(searchText);
  }
});

// loadPhone('phone')