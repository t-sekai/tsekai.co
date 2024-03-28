document.addEventListener('DOMContentLoaded', (event) => {
    const draggable = document.querySelector('.wrapper');
    let isDragging = false;
    let mouseX, mouseY;

    const onMouseDown = (e) => {
        draggable.style.transition = 'none';
        isDragging = true;
        mouseX = e.clientX;
        mouseY = e.clientY;
    };

    const onMouseMove = (e) => {
        if (isDragging) {
            const dx = e.clientX - mouseX;
            const dy = e.clientY - mouseY;
            draggable.style.transform = `translate(${dx}px, ${dy}px)`;
        }
    };

    const onMouseUp = () => {
        if (isDragging) {
            draggable.style.transition = 'transform 0.5s ease';
            draggable.style.transform = `translate(${0}px, ${0}px)`;
            isDragging = false;
        }
    };

    draggable.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});