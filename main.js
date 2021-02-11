

const main = () => {
    const container = document.getElementById('container');
    container.style.width = '80%';
    container.style.margin = 'auto';

    const squareContainer = document.createElement('div');
    const colors = ['#16A085','#FF5733','#DAF7A6','#FFC300'];

    let colorIndex = 0;
    for(let i = 0; i < 36; i++) {
        if(colorIndex >= 4) colorIndex = 0;
        const square = document.createElement('div');
        square.style.width = '100px';
        square.style.height = '100px';
        square.style.backgroundColor = colors[colorIndex++];
        square.style.margin = '10px 5px 0 0';
        square.style.float = 'left';
        square.style.cursor = 'pointer';
        square.addEventListener('click', (e) => {
            squareContainer.removeChild(e.target);
        })
        squareContainer.appendChild(square);
    }

    container.appendChild(squareContainer);
}

main();