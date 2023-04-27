const filled_box = document.querySelector('.filled-box');
const empty_boxes = document.querySelectorAll('.empty-boxes');

filled_box.addEventListener('dragstart', dragStart);
filled_box.addEventListener('dragend', dragEnd);

for (const empty_box of empty_boxes) {
    empty_box.addEventListener('dragover', dragOver);
    empty_box.addEventListener('dragenter', dragEnter);
    empty_box.addEventListener('dragleave', dragLeave);
    empty_box.addEventListener('drop', dragDrop);
}

function dragStart() {
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);
}
function dragEnd() {
    this.className = 'filled-box';
}
function dragOver(e) {
    e.preventDefault();
}
function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
}
function dragLeave() {
    this.className = 'empty-boxes';
}
function dragDrop() {
    this.className = 'empty-boxes';
    this.append(filled_box);
}
