(function() {
  console.log("sanity check");

  var image = "gifs/giphy-5.gif";
  let images = ["gifs/giphy-5.gif", "gifs/boys.jpg", "cat.png"];

  changeImage();

  function changeImage() {
    setTimeout(function() {
      image = images[Math.floor(Math.random() * images.length)];
      const particlesJSON = {
        particles: {
          number: {
            value: 3,
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
              src: image,
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
            enable: false,
            distance: 100,
            color: "6200ff",
            opacity: 10,
            width: 0
          },
          move: {
            enable: true,
            speed: 5,
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
              enable: false,
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
              size: 250,
              duration: 4,
              opacity: 0.5,
              speed: 100
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
      console.log("hej", document.getElementById("particles-js").style.opacity);

      particlesJS("particles-js", particlesJSON);
      changeImage();
    }, 8000);
  }
})();
