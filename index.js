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
    
    $('ul').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
    });

    $('ul').on('click', '.shopping-item-toggle', function(event) {
      $(this).closest('li').find('.shopping-item').toggleClass('.shopping-item__checked');
    })
});
