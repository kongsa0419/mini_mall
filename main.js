
// fetch the items from JSON file
function loadItems(){
    return fetch('data/data.json')
    .then(response => response.json() )
    .then(json=>json.items); //json안에있는 items만 전달
}
function displayItems(items){
    // 부모컨테이너 안에 차곡차곡 넣어줄거임
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item => createHTMLString(item));
}

// 작은따옴표가 아니라 물결모양 아래(백택태그?): 문자열을 return할때 쓰나봄
function createHTMLString(item){ 
    return `
    <li class="item">
          <img src="${item.image}" alt="${item.type}" class="item_thumbnail"/>
          <span class="item_description">${item.type}, ${item.color}, ${item.size}, ${item.gender}</span>
    </li>
    `;
}

// main
loadItems()
.then(items =>{ //아이템을 받아 왔으면, 아래처럼 써먹겠다
    console.log(items);
    displayItems(items);
    // setEventListeners(items);
})
.catch(console.log); //에러날 경우