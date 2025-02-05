const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const category = urlParams.get("category");

const productContainer = document.querySelector(".produktliste");
fetch(`https://kea-alt-del.dk/t7/api/products?category=${category}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(produkter) {
  const markup = produkter
    .map(
      (produkt) =>
        `
      
      <article class="produkt ${produkt.discount && "rabat"} ${produkt.soldout && "udsolgt"}">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${produkt.id}.webp" alt="${produkt.productdisplayname}" />
          <img class="udsolgtbillede" src="udsolgt.webp" alt="Sold out" />
          <h3>${produkt.productdisplayname}</h3>
          <p class="pris">
            <span>Previously</span>
            DKK ${produkt.price},-
          </p>
          <div class="discount">
            <p>Now DKK ${Math.round(produkt.price - (produkt.price / 100) * produkt.discount)},-</p>
            <p>${produkt.discount}%</p>
          </div>
          <a href="produkt.html?id=${produkt.id}">Read more</a>
        </article>
        `
    )
    .join("");
  console.log(markup);
  productContainer.innerHTML = markup;
}
