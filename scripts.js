(function() {
  console.log("sanity check");
  let video = $("#video");

  // $("body").mouseenter(function(event) {
  //   console.log("hej", event.clientX);
  //   $("#video").play();
  // });

  jQuery("body").mouseenter(function() {
    autoPlayVideo("UtABTh2TZ5c", "450", "283");
  });

  function autoPlayVideo(vcode, width, height) {
    "use strict";
    $("#videoContainer").html(
      '<iframe width="' +
        width +
        '" height="' +
        height +
        '" src="https://www.youtube.com/embed/' +
        vcode +
        '?autoplay=1&loop=1&rel=0&wmode=transparent" frameborder="0" allowfullscreen wmode="Opaque"></iframe>'
    );
  }
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
          width: 0.7,
          color: "rgba(26, 102, 255, 0.2)"
        },
        polygon: {
          nb_sides: 9
        },
        image: {
          src: "logo.png",
          width: 150,
          height: 150
        }
      },
      opacity: {
        value: 0.1,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 100,
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
        color: "6200ff",
        opacity: 10,
        width: 0
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
          mode: "bubble"
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
          size: 600,
          duration: 4,
          opacity: 1,
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
})();
