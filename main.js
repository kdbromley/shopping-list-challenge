

function generateItemElement(item) {
    return `
    <li data-item-id="${item.id}>
    <span class="shopping-item js-shopping-item ${item.checked ? "shopping-item__checked" : ''}">${item.name}</span>
    <div class ="shopping-item-controls">
    <button class="shopping-item-toggle js-item-toggle">
    span class="button-label">check</span>
    </button>
    <button class="shopping-item-delete js-item-delete">
    <span class="button-label">delete</span>
    </button>
    </div>
    </li>`;
}

function generateShoppingItemsString(shoppingList) {
    console.log("genertating shopping list element");
    //need to iterate over ea item in STORE and gen <li> w right text and class to reflect properties of item
    //map over items in STORE - calling new fn (generateItemElement on ea to gen item string)
    //then join indiv item strings into one big string to be returned by this fn
    const items = shoppingList.map((item) => generateItemElement(item));
    return items.join()
    
    //this is a hard coded list
    return `
    <li>apples</li>
    <li>oranges</li>
    <li>milk</li>
    <li>bread</li>
    `;
}

function renderShoppingList() {
    //render shopping list in the DOM
    const shoppingListItemsString = '<li>apples</li>'
    generateShoppingItemsString(STORE);
    //steps
    //render items in <ul>, jQ targets '.js-shopping-list to insert <li>'s
    /*for each item in STORE generate string representing <li> with
        -item name rendered as inner text
        -item's index in STORE set as data attb on <li>
        -items checked state (t/f) rendered as pres/absence of CSS class */
    //Join together indiv item strings into one long string
    //insert <li>s string inside .js-shopping-list <ul> in the DOM
    $('.js-shopping-list').html(shoppingListItemsString)



    console.log('`renderShoppingList` ran');
}

function handleNewItemSubmit() {
    //this function will be responsible for when users add a neww shopping list item
    //target input element with id #js-shopping-list-form with event listener for .submit()
    //event function preventDefault and then push item to STORE
    //render/update shopping list STORE
    console.log('`handleNewItemSubmit` ran');
}

function handleItemCheckClicked() {
    //fn will be responsible for when users click the check button on shopping list item
    //target <ul> class to bind event listener for click on check button
    //event function target li (climb DOM tree) then find .js-shopping-item and toggleClass __checked class
    //render/update shopping list STORE with new checked : t/f 
    console.log('`handleItemCheckClicked` ran'):
}

function handleDeleteItemClicked() {
    //fn for when users want to delete a shopping list item
    //target ul class to bind event listener for click on delete button
    //event function target closest li and remove
    //render/update shopping list STORE with item removed
    console.log('`handleDeleteItemClicked`ran');
}

//callback fn when page loads
//responsible for init rendering shopping list and activating indiv fn
function handleShoppingList() {
    renderShoppingList();
    handleNewItemSubmit();
    handleItemCheckClicked();
    handleDeleteItemClicked();
}

//when page loads call handleShoppingList
$(handleShoppingList);