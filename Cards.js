
const gridContainer = document.querySelector("#grid-container");

function fetchProducts(cb) {
  const url = " https://randomuser.me/api?results=20";
  fetch(url)
    .then((response) => response.json())
    .then((data) => cb(data.results));
}

function renderUI() {
  fetchProducts((data) => {
    console.log(data);

    data.forEach((element) => {
      const cardBoxContent = `
      <div class="box-card ${element.gender}">
      <div class="left-side">
        <div class="circle-image">
          <img
            src="${element.picture.large}"
          />
        </div>
      </div>
      <div class="right-side">
        <div class="header">${element.name.title} ${element.name.first} ${element.name.last}</div>
        <hr />
        <div class="details">
          <span> Age</span>
          <span>${element.dob.age}</span>
          <span>Email</span>
          <span>${element.email}</span>
          <span>Country</span>
          <span>${element.location.country}</span>
          <span>Phone</span>
          <span>${element.cell}</span>
        </div>
      </div>
    </div>
  `;
      gridContainer.innerHTML += cardBoxContent;
    });
  });
}

renderUI();