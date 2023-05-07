import { useEffect, useRef, useState } from "react";

const BackgroundAnimation = () => {
  const canvasRef = useRef(null);
  const cursorPositionRef = useRef({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const resizeCanvas = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    function handleResize() {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      cursorPositionRef.current = { x: event.clientX, y: event.clientY };
      //   console.log(cursorPosition);
      //   setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [dimensions, cursorPosition]);

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    const particles = [];

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 1 + 3;
        this.speedX = Math.random();
        this.speedY = Math.random();
      }

      update() {
        const cursorPosition = cursorPositionRef.current;
        const dx = this.x - cursorPosition.x;
        const dy = this.y - cursorPosition.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const minDistance = 100;
        const maxDistance = 1000;
        const forceStrength = 200; // Adjust this value to change the force strength

        // Attraction force towards the cursor
        const attractionForce = Math.max(
          0,
          Math.min(1, (maxDistance - distance) / (maxDistance - minDistance)),
        );

        // Repulsion force when moving away from the cursor
        const repulsionForce = 1 - attractionForce;

        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;

        // Apply attraction force on particle speed
        if (distance < maxDistance) {
          this.speedX -=
            (forceDirectionX * attractionForce * forceStrength) / 20;
          this.speedY -=
            (forceDirectionY * attractionForce * forceStrength) / 20;
        }

        // Apply repulsion force on particle speed
        const maxSpeed = 4; // Adjust this value to limit the particle speed
        this.speedX =
          Math.sign(this.speedX) * Math.min(Math.abs(this.speedX), maxSpeed);
        this.speedY =
          Math.sign(this.speedY) * Math.min(Math.abs(this.speedY), maxSpeed);

        // Update the position based on speed
        this.x += this.speedY;
        this.y += this.speedX;

        // Wrap particles around the edges of the canvas
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    function init() {
      for (let i = 0; i < 100; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
      }
    }

    function drawBlackHole(ctx, x, y, radius) {
      // Draw the black hole
      ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();

      // Draw concentric circles with varying opacity
      const numCircles = 3;
      for (let i = 1; i <= numCircles; i++) {
        ctx.beginPath();
        ctx.arc(x, y, radius + i * 2, 0, Math.PI * 2);
        ctx.closePath();
        ctx.strokeStyle = `rgba(0, 0, 0, ${0.05 * (numCircles - i + 1)})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        // Connect nearby particles with lines
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // If the distance between two particles is less than a threshold, draw a line
          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
            ctx.stroke();
          }
        }

        const cursorPosition = cursorPositionRef.current;
        drawBlackHole(ctx, cursorPosition.x, cursorPosition.y, 20);
      }

      requestAnimationFrame(animate);
    }

    init();
    animate();

    return () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, [dimensions]);

  //   console.log(cursorPosition);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default BackgroundAnimation;
