<script> import P5 from 'p5-svelte';

const sketch = (p5) => {
    let t = 0; // time variable

    p5.setup = () => {
        const container = document.getElementById('p5-container');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.clientHeight * .75;

    p5.createCanvas(containerWidth, containerHeight);
        p5.noStroke(); 
        p5.fill('#ed225d');
        p5.textSize(18); // set text size
        p5.textFont('courier new'); // set text font
        p5.textAlign(p5.CENTER, p5.CENTER); // set text alignment
    };

    p5.draw = () => {
        p5.background(10, 10, 10, 75); // translucent background (creates trails)

        // make a x and y grid of text
        for (let x = 0; x <= p5.width; x = x + 80) {
            for (let y = 0; y <= p5.height; y = y + 50) {

                // starting point of each text depends on mouse position
                const xAngle = p5.map(p5.mouseX, 0, p5.width, -2 * p5.PI, 4 * p5.PI, true);
                const yAngle = p5.map(p5.mouseY, 0, p5.height, -4 * p5.PI, 4 * p5.PI, true);

                // and also varies based on the text's location
                const angle = xAngle * (x / p5.width) + yAngle * (y / p5.height);

                // each text moves in a circle
                const myX = x + 275 * p5.cos(2 * p5.PI * t + angle);
                const myY = y + 175 * p5.sin(2 * p5.PI * t + angle);

                // use width and height to center the text
                p5.text('our    email    is   nycsoundpeople@gmail.com', myX - p5.width/3, myY - p5.height/2);

            }
        }

        t = t + 0.001; // update time
    };

    // add this function to resize the canvas when the window changes
    p5.windowResized = () => {
    const container = document.getElementById('p5-container');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.clientHeight;
    p5.resizeCanvas(containerWidth, containerHeight);
  };
  window.onresize = p5.windowResized;
//   windowResized(); try if above doesnt help resize issues
};

</script>

<P5 {sketch} />