const loadphone = async(searchText)=>{
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
  const data = await res.json();
  const phones = data.data;
  //console.log(phones);
  displayphones(phones);
}

const displayphones = phones =>{
  const phonecontainer = document.getElementById('phone-container');
  phonecontainer.textContent = '';
   phones.forEach(phone =>{
    console.log(phone);
    const phonecard = document.createElement('div');
    phonecard.classList = `card bg-base-100 shadow-xl`;
    phonecard.innerHTML = `
           <figure><img src="${phone.image}" /></figure>
           <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
           </div>`;
        phonecontainer.appendChild(phonecard);
  })

  
}
const handleSearch =() =>{
  const searchfield = document.getElementById('search-field');
  const searchText = searchfield.value;
  console.log(searchText);
  loadphone(searchText);

}
  


// loadphone();