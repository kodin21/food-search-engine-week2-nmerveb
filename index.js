let greetingUser = document.querySelector("#greeting");
let menuDıv = document.querySelector("#menu");
let searchArea = document.querySelector("#search");

fetch("https://jsonplaceholder.typicode.com/users/1")
.then(response => response.json())
.then(json => {greetingUser.innerText=`Hoşgeldiniz ${json.name} ~`});
//endpointten aldığı bilgiyi diziye clonelar.
var foods=[];
fetch("https://jsonplaceholder.typicode.com/todos" )
.then(response=>response.json())
.then(data=>{ foods = [...data]})
//div oluşturur.
function createDiv(food){
        menuDıv.innerHTML='';
        food.map((item)=>{
        let cardDiv = document.createElement('div');
        let cardTitle = document.createElement('p');
        let favButton = document.createElement('span');
        let heart = document.createElement('i');
        favButton.className="icon-click-area";
        favButton.setAttribute("id","heart");
        heart.className="far fa-heart icon-color"; 
        //heart.setAttribute("name",item.id);
        cardDiv.className = "cards";
        cardTitle.innerText = item.title;
        cardTitle.className ="card-title";
        cardDiv.appendChild(cardTitle);
        favButton.appendChild(heart);
        cardDiv.appendChild(favButton);
        menuDıv.appendChild(cardDiv);
  })
}
//search yapar
searchArea.addEventListener('keyup',()=>{    
    let searched = foods.filter((item)=>{
        if(item.title.includes(searchArea.value)){
            return item;
        }
    })
    createDiv(searched);
})

  



