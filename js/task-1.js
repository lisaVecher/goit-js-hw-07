const categorieList = document.querySelector("#categories");
const categorieItem = categorieList.querySelectorAll(".item");

console.log(`Number of categories: ${categorieItem.length}`);

const elements = document.querySelectorAll("#categories .item");

elements.forEach((el) => {
  let heading = el.querySelector("h2").textContent;
  let howMuch = el.querySelectorAll("li").length;

  console.log(`Category: ${heading}`);
  console.log(`Elements: ${howMuch}`);
});
