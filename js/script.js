var buttons = document.getElementsByClassName('quick-view-button');
var images = document.getElementsByClassName('product-image');

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(event) 
    {
        event.preventDefault();
        event.stopPropagation();

        for (var j = 0; j < images.length; j++) 
        {
            images[j].classList.remove('zoom');
        }

        var image = this.previousElementSibling;
        image.classList.add('zoom');
    });
}

document.body.addEventListener('click', function(event) 
{
    if (!event.target.classList.contains('quick-view-button')) 
    {
        for (var i = 0; i < images.length; i++) 
        {
            images[i].classList.remove('zoom');
        }
    }
});