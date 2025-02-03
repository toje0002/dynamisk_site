const kategoriContainer = document.querySelector(".kategoriliste");
fetch(`https://kea-alt-del.dk/t7/api/categories/`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(kategorier) {
  const markup = kategorier.map((kategori) => `<a href="produktliste.html?category=${kategori.category}"> ${kategori.category} </a>`).join("");
  console.log(markup);
  kategoriContainer.innerHTML = markup;
}
