const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const id = urlParams.get("id");

let productContainer = document.querySelector("main");
fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
    <div class="produktmain ${data.discount && "rabat"} ">
    <h2>${data.productdisplayname}</h2>
    <div class="billede-container">
      <img src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp" alt="${data.productdisplayname}" />
      <img class="udsolgtbillede ${data.soldout && "udsolgt"}" src="udsolgt.webp" alt="Sold out" />
      </div>
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
            <p>Now DKK ${Math.round(data.price - (data.price / 100) * data.discount)},-</p>
            <p>${data.discount}%</p>
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
      </div>
    `;
  });
