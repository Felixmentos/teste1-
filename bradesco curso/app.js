'use strick';

const switcher = document.querrySelector('.btn');
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dak-theme')
});

    var className = document.body.className;
    if(className == "light-them") {
        this.textContent == "Dark";
    else {
        this.textContent = "Light";
    }
});

console.log('current class name:' + className); 
});
