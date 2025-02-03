const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const id = urlParams.get("id");

let productContainer = document.querySelector(".produktmain");
fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
    <h2>${data.productdisplayname}</h2>
      <img src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp" alt="${data.productdisplayname}" />
      <img class="udsolgtbillede" src="udsolgt.webp" alt="Sold out" />
      <div class="info">
        <div class="description">
          <h3>Description</h3>
          <p>${data.description}</p>
        </div>
        <div class="price">
          <h3>Price</h3>
          <p class="pris">
            <span>Previously</span>
            DKK ${data.price},-
          </p>
          <div class="discount">
            <p>Now DKK 600,-</p>
            <p>33%</p>
          </div>
        </div>
        <div class="kobnu">
          <form>
            <label>
              Choose a size
              <select name="size">
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </label>
          </form>
          <button>Add to basket</button>
        </div>
      </div>
    `;
  });
