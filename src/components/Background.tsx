import { createEffect, createSignal, onMount } from "solid-js";
import { scrollOffset, setScrollOffset } from "../App";
import resetCanvas from "../utils/resetCanvas";
import resizeCanvas from "../utils/resizeCanvas";

export default function Canvas() {
  let canvas: HTMLCanvasElement;

  function draw() {
    resetCanvas(canvas);
    const context = canvas.getContext("2d");

    const noggle = new Path2D("M3 3V6H9V3H10V6H16V0H10V2H9V0H3V2H0V5H1V3H3Z");
    const noggleWidth = canvas.width * 0.085;
    const noggleHeight = noggleWidth * 0.375;

    const angle = -12 * (Math.PI / 180);

    context.rotate(angle);
    context.translate(16, 16);

    const backgroundWidth =
      canvas.width * Math.cos(12 * (Math.PI / 180)) +
      canvas.height * Math.sin(12 * (Math.PI / 180));

    const backgroundHeight =
      canvas.height * Math.cos(12 * (Math.PI / 180)) +
      canvas.width * Math.sin(12 * (Math.PI / 180));

    const noggleCountX =
      Math.ceil(backgroundWidth / (noggleWidth + 16)) +
      Math.ceil(scrollOffset() / noggleWidth);

    const noggleCountY = Math.ceil(backgroundHeight / (noggleHeight + 16));

    for (let row = 1; row < noggleCountY + 1; row++) {
      if (row % 2 === 0) {
        // Start painting from the left
        context.translate(16, 0);

        // Move on scroll
        context.translate(-scrollOffset() / 4, 0);

        for (let col = 1; col < noggleCountX + 1; col++) {
          paintNoggle(noggle, noggleWidth, noggleHeight);

          // Move to the next noggle position in the row
          context.translate(noggleWidth + 16, 0);
        }
      } else {
        // Start painting from the right
        context.translate(backgroundWidth - noggleWidth + 16, 0);

        // Move on scroll
        context.translate(scrollOffset() / 4, 0);

        for (let col = 1; col < noggleCountX + 2; col++) {
          paintNoggle(noggle, noggleWidth, noggleHeight);

          // Move to the next noggle position in the row
          context.translate(-noggleWidth - 16, 0);
        }
      }

      // Move to the next row
      context.setTransform(1, 0, 0, 1, 0, 16 + 16 * row + noggleHeight * row);
      // setTransform unwantedly resets angle
      context.rotate(angle);
    }
  }

  function paintNoggle(
    noggle: Path2D,
    noggleWidth: number,
    noggleHeight: number
  ) {
    const context = canvas.getContext("2d");

    context.save();
    context.fillStyle = "#0C0C0C";
    context.scale(noggleWidth / 16, noggleHeight / 6);
    context.fill(noggle);
    context.restore();
  }

  onMount(() => {
    resizeCanvas(canvas, draw);

    window.addEventListener("resize", () => resizeCanvas(canvas, draw));
  });

  createEffect(draw);

  return <canvas ref={canvas} class="fixed w-[100vw] h-[100vh] bg-black" />;
}
