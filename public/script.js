console.log("virus");

const particlesJSON = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: false,
        value_area: 8049.305944649181
      }
    },
    color: {
      value: "#4aff9f"
    },
    shape: {
      type: "image",
      stroke: {
        width: 3,
        color: "#ffffff"
      },
      polygon: {
        nb_sides: 9
      },
      image: {
        src: "/virus.png",
        width: 150,
        height: 150
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 50,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 100,
      color: "#ffffff",
      opacity: 10,
      width: 10
    },
    move: {
      enable: true,
      speed: 10,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: true,
        rotateX: 1362.9002517356944,
        rotateY: 8818.766334760376
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "bubble"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: false
};

particlesJS("particles-js", particlesJSON);
