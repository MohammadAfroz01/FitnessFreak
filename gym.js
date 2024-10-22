document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.fade-in-target');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target); // Optional: Stop observing after animation starts
        }
      });
    }, { threshold: 0.1 });
  
    elements.forEach(element => {
      observer.observe(element);
    });
  });
  