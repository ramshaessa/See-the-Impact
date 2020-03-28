
//make global variable that holds an object
//create an object. Within object, have attribute healthiness
//Healthiness will be a scale from 1 to 10
//When you drag one of the objects and drop it to your character, add functions that read healthiness attribute 
//Based on that number, it would generate response. 

//How to attach javascript object to HTML element 
//Learn more about whole drag and drop object. Keep track of object being dragged

//if healthiness is greater than 5
//unhealthy food- bloated, heavy (making the belly area wider. Change the color.)
//New class- drag and drop 
//Red- food is bad/unhealthyness. Green- Healthy food

//Make a new tap (Write HTML forum- make it look nice)



window.addEventListener("load", function() {
    const fill = document.querySelectorAll('.fill');
    const empty = document.querySelector('.dropzone');

    //Fill Listeners
    for (const element of fill) {
        element.addEventListener('dragstart', dragStart);
        element.addEventListener('dragend', dragEnd);
        element.addEventListener('drag', drag);
    }
    

    
        empty.addEventListener('dragover', dragOver);
        empty.addEventListener('dragenter', dragEnter);
        empty.addEventListener('dragleave', dragLeave);
        empty.addEventListener('drop', dragDrop);
})
    //Drag functions 
    function dragStart() {
        this.className += 'hold';
        setTimeOut(() => (this.className = 'invisible'), 0)

    }

    function dragEnd() {
        this.className = 'fill';


    }

    function drag(e) {
        ev.preventDefault();
            e.target.style.left = (ev.clientX - element.style.width) + "px" 
            e.target.style.top =  (ev.clientY - element.style.height) + "px";

    }

    function dragOver(e) {
        e.preventDefault();

    }

    function dragEnter(e) {
        e.preventDefault();
        this.className += 'hovered';

    }


    function dragLeave() {
        this.className = 'empty'

    }

    function dragDrop() {
        this.className = 'empty';
        this.append(fill);


    }

    
    
    //Generate draggable img elements.
    /*var draggables = this.document.getElementsByClassName('dragelement');
    for(let element of draggables) {
        element.addEventListener("drag", function(ev) {
            ev.preventDefault();
            element.style.left = (ev.clientX - element.style.width) + "px" 
            element.style.top =  (ev.clientY - element.style.height) + "px";
        })
    }

    */