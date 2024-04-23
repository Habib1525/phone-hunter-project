const loadphone = async(searchText=13 , isshowall)=>{
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
  const data = await res.json();
  const phones = data.data;
  //console.log(phones);
  displayphones(phones , isshowall);
}

const displayphones = (phones , isshowall) =>{
  const phonecontainer = document.getElementById('phone-container');
  phonecontainer.textContent = '';
  //console.log(phones);
  const showAllContainer = document.getElementById('show-all-container');
  if(phones.length > 12  && !isshowall){
    showAllContainer.classList.remove('hidden');
  }
  else{
    showAllContainer.classList.add('hidden')
  }
  //display all if show all button is presss else display first 12 item
  if(!isshowall){
    phones = phones.slice(0,12);
  }


   phones.forEach(phone =>{
    //console.log(phone);
    const phonecard = document.createElement('div');
    phonecard.classList = `card bg-base-100 shadow-xl`;
    phonecard.innerHTML = `
           <figure><img src="${phone.image}" /></figure>
           <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-ceenter">
              <button onclick="handleshowdetaile('${phone.slug}')" class="btn btn-primary">show Detailes</button>
            </div>
           </div>`;
        phonecontainer.appendChild(phonecard);
  })
  //loading spinner
  toggoleloaddingspinner(false);
  
}
const handleSearch =(isshowall) =>{
  toggoleloaddingspinner(true);
  const searchfield = document.getElementById('search-field');
  const searchText = searchfield.value;
 // console.log(searchText);
  loadphone(searchText , isshowall);

}

// const handleSearch2 = ()=>{
//   toggoleloaddingspinner(true);
//   const searchfield = document.getElementById('search-field2');
//   const searchText = searchfield.value;
//   //console.log(searchText);
//   loadphone(searchText);

// }
const toggoleloaddingspinner = (isloading) =>{
  const loadingspinner = document.getElementById('loading-spinner');
  if(isloading){
    loadingspinner.classList.remove('hidden');
  }
  else{
    loadingspinner.classList.add('hidden');
  }
}

const handleshowdetaile = async (id) =>{
  //console.log('click detail',id)
  const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
  const data = await res.json();
  const phone = data.data;
  //console.log(data);
  showphonedetails(phone);
    
}

const handleshowall = ()=>{
  handleSearch(true);

}

const showphonedetails = (phone) =>{
  console.log(phone);
  const phonename = document.getElementById('show-detailes-name');
  phonename.innerText = phone.name;
  const showdetails = document.getElementById('show-detail-container');
  showdetails.innerHTML = `
     <img src="${phone.image}" alt="">
    <p><span>Storage :</span>${phone.brand}</p>
  `

  a.showModal()
}
  


 loadphone();