const dataPanel = document.querySelector('#dataPanel')
const menuArray = [
  {
  id:1,
  img:"https://scontent.ftpe4-1.fna.fbcdn.net/v/t39.30808-6/292623292_5202497973174577_9156669263922117542_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=n9FVbwmlGg8AX86q6Ck&_nc_ht=scontent.ftpe4-1.fna&oh=00_AT-8dlwipIfObe7oSsjInPtNFR0mrGZV8e9AdwMSOg9R0g&oe=62D7D80F",
  food:"蔬菜可樂餅",
  description:"好吃",
  price:90,
  },
  {
  id: 2,
  img:"https://scontent.ftpe4-2.fna.fbcdn.net/v/t39.30808-6/292237291_5202498149841226_548160562424196115_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=OqlhP0ox9DgAX_HVb5Y&_nc_ht=scontent.ftpe4-2.fna&oh=00_AT-sQ-axqr5ckp2lKxt9gftNJ5QmE0X-SbyzVUqZlTtgKg&oe=62D6B5B6",
  food:"起司＆蔬菜可樂餅",
  description:"好好吃",
  price:120,
  },
]
const menuTitle = ["精選蔬食(蛋奶素)"]


function displayMenu (title,data) {
  let htmlContent = ""
  title.forEach(titleName => {
    `<h2 class="menu-title text-center" style="color:#b59f6b">${title[titleName]}</h2>`
  data.forEach(card => {
   
      htmlContent += `
<div class="cards">
<div class="card m-10 p-10" style="width: 18rem;">
  <img src="${card.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${card.food}</h5>
    <p class="card-text">${card.description}
    </p>
    <p>$${card.price}</p>
    <a href="#" class="btn btn-primary ">加入購物車</a>
  </div>
</div>
</div>
` 
})
  })
  dataPanel.innerHTML = htmlContent
}
displayMenu(menuTitle,menuArray)
