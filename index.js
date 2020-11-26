$(function() {
    $('.js-shopping-list-form').submit(function(event) {
        event.preventDefault;
        const newItem = $('input#shopping-list-entry').val();
        $('ul').append(`
        <li>
        <span class="shopping-item">${newItem}</span>
        <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
        <span class="button-label">check</span><
        /button><button class="shopping-item-delete">
        <span class="button-label">delete</span>
        </button>
        </div>
        </li>`);

    });
});

/* $(function removeItem() {
    $('ul').on('click', '.shopping-item-delete', function(event) {
        $(this).remove('li')
    })
}) */

// $(function )

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