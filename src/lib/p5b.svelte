<script> import P5 from 'p5-svelte';

p5.setup = () => {
  const container = p5.parent; // Get a reference to the grid container
  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;

  p5.createCanvas(containerWidth, containerHeight);
        p5.background(64);
        // Create object
        bug = new Jitter();
        // Set text coordinates
        textX = p5.width / 2;
        textY = p5.height / 2;
    };

    p5.draw = () => {
        p5.background(64);
        // Display text
        p5.fill(255);
        p5.textAlign(p5.CENTER, p5.CENTER);
        p5.text("Hello", textX, textY);
        // Move and display bug
        bug.move();
        bug.display();
    };


    container.addEventListener('resize', () => {
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;
      p5.resizeCanvas(containerWidth, containerHeight); // Resize on grid container change

};

// Jitter class class Jitter { constructor() { this.x = p5.random(p5.width); // use p5.random and p5.width instead of random and width this.y = p5.random(p5.height); // use p5.random and p5.height instead of random and height this.diameter = p5.random(10, 30); // use p5.random instead of random this.speed = 1; }

move() {
    // Calculate distance and angle between bug and text
    let d = p5.dist(this.x, this.y, textX, textY); // use p5.dist instead of dist
    let a = p5.atan2(textY - this.y, textX - this.x); // use p5.atan2 instead of atan2
    // Move bug towards text based on distance and angle
    if (d > 10) {
        this.x += Math.cos(a) * this.speed; // use Math.cos instead of cos
        this.y += Math.sin(a) * this.speed; // use Math.sin instead of sin
    }
}

display() {
    p5.fill(255);
    p5.ellipse(this.x, this.y, this.diameter, this.diameter); // use ellipse instead of ellipse
}

} </script>

<P5 {sketch} />