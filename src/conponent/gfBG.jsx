import React, { useEffect, useRef } from "react";

const CanvasBackground = () => {
  const canvasRef = useRef(null);
  const stars = useRef([]);
  const animationFrameId = useRef(null);

  const maxStars = 700;
  const hue = 217;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w, h;

    const resizeCanvas = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;

      createStars();
      drawStaticStars();
    };

    const createStars = () => {
      stars.current = [];
      for (let i = 0; i < maxStars; i++) {
        stars.current.push(new Star());
      }
    };

    const drawStaticStars = () => {
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 0.8;
      ctx.fillStyle = "hsla(" + 217 + ", 64%, 6%, 1)";
      ctx.fillRect(0, 0, w, h);

      ctx.globalCompositeOperation = "lighter";
      stars.current.forEach((star) => star.draw(ctx));
    };

    const animation = () => {
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 0.8;
      ctx.fillStyle = "hsla(" + 217 + ", 64%, 6%, 1)";
      ctx.fillRect(0, 0, w, h);

      ctx.globalCompositeOperation = "lighter";
      stars.current.forEach((star) => {
        star.update();
        star.draw(ctx);
      });

      animationFrameId.current = window.requestAnimationFrame(animation);
    };

    const stopAnimation = () => {
      if (animationFrameId.current) {
        window.cancelAnimationFrame(animationFrameId.current);
      }
    };

    class Star {
      constructor() {
        this.orbitRadius = random(maxOrbit(w, h));
        this.radius = random(60, this.orbitRadius) / 6;
        this.orbitX = w / 2;
        this.orbitY = h / 2;
        this.timePassed = random(0, maxStars);
        this.speed = random(this.orbitRadius) / 5000000;
        this.alpha = random(2, 10) / 10;
      }

      update() {
        this.timePassed += this.speed;
        if (random(10) === 1 && this.alpha > 0) {
          this.alpha -= 0.05;
        } else if (random(10) === 2 && this.alpha < 1) {
          this.alpha += 0.05;
        }
      }

      draw(ctx) {
        const x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX;
        const y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY;
        ctx.globalAlpha = this.alpha;
        ctx.drawImage(
          offScreenCanvas,
          x - this.radius / 2,
          y - this.radius / 2,
          this.radius,
          this.radius,
        );
      }
    }

    const offScreenCanvas = document.createElement("canvas");
    const offCtx = offScreenCanvas.getContext("2d");
    offScreenCanvas.width = 100;
    offScreenCanvas.height = 100;
    const half = offScreenCanvas.width / 2;
    const gradient2 = offCtx.createRadialGradient(
      half,
      half,
      0,
      half,
      half,
      half,
    );
    gradient2.addColorStop(0.025, "#fff");
    gradient2.addColorStop(0.1, "hsl(" + hue + ", 61%, 33%)");
    gradient2.addColorStop(0.25, "hsl(" + hue + ", 64%, 6%)");
    gradient2.addColorStop(1, "transparent");

    offCtx.fillStyle = gradient2;
    offCtx.beginPath();
    offCtx.arc(half, half, half, 0, Math.PI * 2);
    offCtx.fill();

    function random(min, max) {
      if (arguments.length < 2) {
        max = min;
        min = 0;
      }

      if (min > max) {
        const hold = max;
        max = min;
        min = hold;
      }

      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function maxOrbit(x, y) {
      const max = Math.max(x, y);
      const diameter = Math.round(Math.sqrt(max * max + max * max));
      return diameter / 2;
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    animation();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      stopAnimation();
    };
  }, []);

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
    ></canvas>
  );
};

export default CanvasBackground;
