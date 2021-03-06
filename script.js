

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

function addItemToShoppingList(itemName) {
    console.log(`Adding "${itemName}" to shopping list`);
    STORE.push({id: cuid(), name: itemName, checked: false});
}


function handleNewItemSubmit() {
    //this function will be responsible for when users add a neww shopping list item
    //target input element with id #js-shopping-list-form with event listener for .submit()
    $('#js-shopping-list-form').submit(function(event) {
    //preventDefault
    event.preventDefault();
    //get name of new item from text input in form
    const newItemName = $('.js-shopping-list-entry').val();
    console.log(newItemName);
    //clear out val from input so new items can be added
    $('.js-shopping-list-entry').val('');

    //create object rep new item + add to STORE --> new function
    addItemToShoppingList(newItemName);
    //render/update shopping list STORE
    renderShoppingList();
    })
    
}

function toggleCheckedForListItem(itemId) {
    console.log('Toggling checked property for item with id + ' itemId);
    const item = STORE.find(item => item.id === itemId)
    item.checked = !item.checked;  
}

function getItemIdFromElement(item) {
    return $(item)
    .closest('li')
    .data('item-id')
}

function handleItemCheckClicked() {
    //fn will be responsible for when users click the check button on shopping list item
    //target <ul> class to bind event listener for click on check button
    $('.shopping-list').on('click', '.js-item-toggle', event => {
        console.log('handleItemCheckClicked ran');
    //retrieve item's id from data attb --> new fn
    const itemId = getItemIdFromElement(event.currentTarget);
    toggleCheckedForListItem(itemId);
    renderShoppingList();
    
    })
    
    //toggle checked property for item in store 
    //render/update shopping list STORE with new checked : t/f 
    console.log('`handleItemCheckClicked` ran');
}

function handleDeleteItemClicked() {
    // this function will be responsible for when users want to delete a shopping list
    //event listener (delegation) targeting ul class for click on delete item button
    $('.js-shopping-list').on('click', `.js-item-delete`, event => {
      console.log('`handleDeleteItemClicked` ran');
      //get id same as clicked 
      const itemId = getItemIdFromElement(event.currentTarget);
      //fn delete from STORE 
      deleteItemFromShoppingList(itemId);
      //re-renderShoppingList (will remove li from DOM)
      renderShoppingList();
  
    })
    console.log('`handleDeleteItemClicked` ran')
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