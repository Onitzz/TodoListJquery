// console.log('Hello');
// console.info('Hello');
// console.warn('Hello');
// console.error('Hello');

function Counter() {
    this.number = 0;

    this.increase = function () {
        this.number++;
    };

    this.decrease = function () {
        this.number--;
    };
}

var counterTitle = new Counter();

var title = document.getElementById('title');

title.addEventListener('mouseover', function () {
    counterTitle.increase();
    console.log(counterTitle.number);
}, false);

var inputName = document.getElementById('inputName');

var displayName = document.querySelector('#displayName');

inputName.addEventListener('keyup', function (event) {
    var value = event.target.value;

    displayName.style.color = "white";

    if (value.length >= 5) {
        displayName.style.color = 'red';
    }
    displayName.innerHTML = value;
});

function toggleBox(selector) {

    var elements = document.querySelectorAll(selector);

    elements.forEach(e => {
        var p = e.nextElementSibling;

        p.hidden = true;

        e.addEventListener('click', function (event) {
            switchHidden(p);
        }, false);
    });

}
function switchHidden(element) {
    element.hidden = element.hidden == false ? true : false;
}

toggleBox('.toggle');
toggleBox('.switchBox');