const wrapper = document.querySelectorAll("article.item-list");

wrapper.forEach((article) => {
  const shoeColors = article.querySelectorAll("div.color-circle");
  const shoeImg = article.querySelector("img");

  shoeColors.forEach((color) => {
    color.addEventListener("click", function () {
      shoeImg.src = `./img/${shoeImg.id}_${color.id}.jpg`;
    });
  });
  return;
});
