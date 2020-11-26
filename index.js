$(function() {
    $('#js-shopping-list-form').submit(function(event) {
        //prevent default form submit behavior
        event.preventDefault();
        //make placeholder var for input item string
        const newItem = $('input#shopping-list-entry').val();
        //append unordered list element which contains shopping list items
        //append new <li> with <button>s 
        //use ` vs ' (like in fizzbuzz drill code) bc need to use ${} to reference var defined above 
        $('ul').append(`
        <li>
        <span class="shopping-item">${newItem}</span>
        <div class="shopping-item-controls">
        <button class="shopping-item-toggle"><span class="button-label">check</span></button>
        <button class="shopping-item-delete"> <span class="button-label">delete</span></button>
        </div>
        </li>`);
    });    
    //'ul' in index.html so will exist at page load - use for event listener
    //specify click on delete button (class="shopping-item-delete")
    $('ul').on('click', '.shopping-item-delete', function(event) {
        //target closest li - .closest moves upwards so it will target current item li
        //<li> holds entire current shopping list item including buttons
        $(this).closest('li').remove();
    });
    //ditto 'ul' for event listener
    //specify click on check button (class="shopping-item-toggle")
    $('ul').on('click', '.shopping-item-toggle', function(event) {
      // target closest 'li' bc .closest includes current element
      //so .closest(span) would just target span for check toggle button
      //<li> high enough in DOM tree to move down w .find() to locate <span> for item string
      $(this).closest('li').find('.shopping-item').toggleClass('.shopping-item__checked');
    });
});
