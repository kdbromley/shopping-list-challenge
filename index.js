$(function addNewItem() {
    $('.js-shopping-list-form').submit(event => {
        event.preventDefault;
        const newItem = ($(this).find('input#shopping-list-entry').val());
        $('ul').append('<li><span class="shopping-item">' + ${newItem} + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');

    });
});

$(function removeItem() {
    $('ul').on('click', '.shopping-item-delete', function(event) {
        $(this).remove('li')
    })
})

/* <li>
<span class="shopping-item">oranges</span>
<div class="shopping-item-controls">
  <button class="shopping-item-toggle">
    <span class="button-label">check</span>
  </button>
  <button class="shopping-item-delete">
    <span class="button-label">delete</span>
  </button>
</div>
</li> */