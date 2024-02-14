
let cards = document.querySelector(".feature-cards");
let BASE_URL = `http://localhost:3000/save`;


let filteredArr = [];
let copyArr = [];

async function getAllCards() {
  let res = await axios("http://localhost:3000/save");
  let data =  res.data;
  //copyArr = data;
  cards.innerHTML = "";
  filteredArr = filteredArr.length ? filteredArr : data;
  
 // filteredArr=data;
  filteredArr.forEach((el) => {
    cards.innerHTML += `
    <div class=f-card>
    <div class="fa">
    <div class="icon"><i class="bi bi-globe"></i></div>
    <div class="cop"><p>Linkedin</p></div>
  </div>
  <div class="fb">
    <div class="full"><p>Fulltime</p></div>
    <div class="private"><p>Private</p></div>
    <div class="urgent"><p>Urgent</p></div>
  </div>
  <div class="fc">
    <h1>${el.hh}</h1>
    <p>${el.pi}</p>
  </div>
  <div class="fd">
    <div class="cash"><p><span>${el.price} </span>|hr</p></div>
    <div class="apply"><p>Apply</p></div>

  
          </div>
          <div class="ft">
          <a  href="./details.html?id=${el.id}" class="btn btn-primary" style=" width:250px;margin:auto;"  >LEARN MORE</a>
          <div style="margin:auto; display: flex;
          justify-content: space-around; gap:20px; padding-top:10px; ">
            <a onclick=deleteBtn(${el.id}) class="btn btn-danger" >DELETE</a>
            <a onclick="editBtn(${el.id})" class="btn btn-secondary "href="./add.html?id=${el.id}">EDİT</a>
            <a onclick="addFav(${el.id})" class="btn btn-dark" >ADD FAV</a>
          </div>
          </div>
</div>
        </div>
      </div>
      </div>
        `;
  });
}
getAllCards();





function deleteBtn(id) {
  axios.delete(`${BASE_URL}/${id}`);
}

 
