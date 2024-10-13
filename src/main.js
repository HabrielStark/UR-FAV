import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

let locomotiveScroll;

// Initialize Locomotive Scroll
function initLocomotiveScroll() {
  const scrollContainer = document.querySelector('#app');
  if (scrollContainer) {
    locomotiveScroll = new LocomotiveScroll({
      el: scrollContainer,
      smooth: true,
      multiplier: 1,
      class: 'is-revealed'
    });

    locomotiveScroll.on('scroll', ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollContainer, {
      scrollTop(value) {
        return arguments.length
          ? locomotiveScroll.scrollTo(value, 0, 0)
          : locomotiveScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      }
    });
  }
}

// GSAP animations
function initAnimations() {
  // Hero section animation
  gsap.from('.hero h1', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out'
  });

  // Heart animation
  const heart = document.querySelector('.heart-animation');
  if (heart) {
    gsap.to(heart, {
      scale: 1.1,
      duration: 0.5,
      repeat: -1,
      yoyo: true
    });
  }

  // Scroll-triggered animations
  gsap.utils.toArray('.section').forEach(section => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });
  });
}

// Three.js background animation
function initBackgroundAnimation() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true });

  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
  const material = new THREE.MeshBasicMaterial({ color: 0xFF4500, wireframe: true });
  const torus = new THREE.Mesh(geometry, material);

  scene.add(torus);
  camera.position.z = 30;

  function animate() {
    requestAnimationFrame(animate);
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.01;
    renderer.render(scene, camera);
  }

  animate();

  // Handle window resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

// Initialize everything
function init() {
  initLocomotiveScroll();
  initAnimations();
  initBackgroundAnimation();
}

window.addEventListener('load', init);