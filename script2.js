
document.addEventListener("DOMContentLoaded", () => {
  
  
  const cursorDot = document.querySelector(".custom-cursor-dot");
  const cursorOutline = document.querySelector(".custom-cursor-outline");
  if (cursorDot && cursorOutline) {
    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;
   
    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    });
   
    const animateOutline = () => {
     
      outlineX += (mouseX - outlineX) * 0.12;
      outlineY += (mouseY - outlineY) * 0.12;
      cursorOutline.style.left = `${outlineX}px`;
      cursorOutline.style.top = `${outlineY}px`;
      requestAnimationFrame(animateOutline);
    };
    animateOutline();
   
    const hoverTargets = document.querySelectorAll("a, button, .project-card, .skills-card, .timeline-content");
    hoverTargets.forEach((target) => {
      target.addEventListener("mouseenter", () => {
        cursorOutline.classList.add("hovered");
      });
      target.addEventListener("mouseleave", () => {
        cursorOutline.classList.remove("hovered");
      });
    });
  }
  
  const loopTexts = document.querySelectorAll(".hero-loop-text");
  if (loopTexts.length > 0) {
    let currentIndex = 0;
    setInterval(() => {
      
      const current = loopTexts[currentIndex];
      current.style.opacity = 0;
      current.style.transform = "translateY(-20px)";
      current.classList.remove("text-active");
     
      currentIndex = (currentIndex + 1) % loopTexts.length;
      
      const next = loopTexts[currentIndex];
      
      
      next.style.transition = "none";
      next.style.transform = "translateY(20px)";
      
      
      next.offsetHeight;
    
      next.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      next.style.opacity = 1;
      next.style.transform = "translateY(0)";
      next.classList.add("text-active");
    }, 3000);
  }
  

  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    // Initial Hero Animation on Page Load
    gsap.from(".hero-greeting", {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power4.out",
      delay: 0.2
    });
    gsap.from(".hero-name", {
      opacity: 0,
      y: 60,
      duration: 1.2,
      ease: "power4.out",
      delay: 0.4
    });
    gsap.from(".hero-loop", {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
      delay: 0.7
    });
    gsap.from(".navbar", {
      opacity: 0,
      y: -20,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.8
    });
    const sectionTitles = document.querySelectorAll(".section-title");
    sectionTitles.forEach((title) => {
      gsap.from(title, {
        opacity: 0,
        x: -40,
        duration: 0.8,
        scrollTrigger: {
          trigger: title,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });
    });
    gsap.from(".about-card", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-card",
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });
    const timelineItems = document.querySelectorAll(".timeline-item");
    timelineItems.forEach((item) => {
      const dot = item.querySelector(".timeline-dot");
      const content = item.querySelector(".timeline-content");
      
      gsap.from(dot, {
        scale: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: item,
          start: "top 80%"
        }
      });
      gsap.from(content, {
        opacity: 0,
        x: 50,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 80%"
        }
      });
    });
    const skillCards = document.querySelectorAll(".skills-card");
    skillCards.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: "power2.out",
        delay: index * 0.2, 
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 80%"
        }
      });
    });
    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: "power2.out",
        delay: index * 0.15, 
        scrollTrigger: {
          trigger: ".work-grid",
          start: "top 80%"
        }
      });
    });
    gsap.from(".contact-methods", {
      opacity: 0,
      x: -50,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".contact-grid",
        start: "top 80%"
      }
    });
    gsap.from(".contact-socials", {
      opacity: 0,
      x: 50,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".contact-grid",
        start: "top 80%"
      }
    });
  } else {
    
    console.warn("GSAP CDN not reached. Animations running in static/fallback mode.");
  }
});