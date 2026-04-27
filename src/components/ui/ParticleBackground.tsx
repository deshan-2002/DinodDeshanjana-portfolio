"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    // We use loadSlim to avoid loading unused interactions, minimizing bundle size.
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // console.log("Particles loaded", container);
  }, []);

  return (
    <div className="absolute inset-0 -z-20 w-full h-full pointer-events-auto">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        className="w-full h-full"
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fullScreen: { enable: false }, // Critical so it respects absolute positioning of the container
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
            },
            modes: {
              grab: {
                distance: 140,
                links: {
                  opacity: 0.5,
                },
              },
            },
          },
          particles: {
            color: {
              value: "#3b82f6", // tailwind brand blue-500
            },
            links: {
              color: "#6366f1", // tailwind indigo-500
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 60,
            },
            opacity: {
              value: 0.6,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
