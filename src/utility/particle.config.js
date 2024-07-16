export const ParticlesConfig = {
    autoplay: true,
    backgroundMode: {
        enable: true,
        zIndex: 1,
    },
    fullScreen: {
    enable: false,
    zIndex: -1,
    },
    particles: {
        color: {
          value: '#ddd',
        },
        links: {
          color: '#ffffff',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: 'none',
          enable: true,
          outMode: 'bounce',
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            value_area: 800,
          },
          value: 30,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'circle',
        },
        size: {
          random: true,
          value: 6,
        },
      },

      detectRetina: true,
  };