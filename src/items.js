var items = [{
    id: 1,
    name: "Coca-Cola",
    amount: "0,5 l",
    price: 1290,
    category: "Soda"
},{
    id: 2,
    name: "Bombay",
    amount: "0,04 l",
    price: 1390,
    category: "Shot"  
},{
    id: 3,
    name: "Jack Daniel's",
    amount: "0,04 l",
    price: 1390,
    category: "Shot"
},{
    id: 4,
    name: "Jack & Coke",
    amount: "0,3 l",
    price: 3390,
    category: "Longdrink"
},{
    id: 5,
    name: "Bacardi & Coke",
    amount: "0,3 l",
    price: 3390,
    category: "Longdrink"
},{
    id: 6,
    name: "Jana Mentes",
    amount: "0,5 l",
    price: 990,
    category: "Water"
},{
    id: 6,
    name: "Jana Mentes",
    amount: "0,5 l",
    price: 990,
    category: "Water"
},];



const itemPlace = document.getElementById('itemPlace');
const cardContainer = document.createElement('div');
cardContainer.className = 'row';
itemPlace.appendChild(cardContainer);

const cardElements = items.map(item => {
    const card = document.createElement('div');
    card.className = 'card-item';
    card.innerHTML = `
    <div class="card" id="itemButton">
    <div class="card-body">
    <h5 class="card-title" id="itemName">${item.name}</h5>
    <h6 class="card-subtitle" id="itemAmount">${item.amount}</h6>
    <p class="card-text" id="itemPrice">${item.price} Ft</p>
    </div>
    </div>
    `;
    card.addEventListener('click', function() {
        addItemToList(item.name, item.price);
    });
    return card;
});

cardElements.forEach(card => {
    cardContainer.appendChild(card);
});

// Utolsó lépésként illeszd be az itemPlace-be
itemPlace.appendChild(cardContainer);





