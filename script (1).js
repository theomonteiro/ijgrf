
(function() {
    emailjs.init("Ls67Eh5H4lb5toL9I");
})();


const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

// Evento de envio
form.addEventListener('submit', function(event) {
    event.preventDefault();

    status.innerHTML = "Sending...";

    // Envia via EmailJS
    emailjs.sendForm('service_2zpg102', 'template_ij8nt7h', this)
        .then(() => {
            status.innerHTML = "Message sent successfully!";
            form.reset();
        }, (err) => {
            status.innerHTML = "Failed to send. Try again.";
            console.error('Erro:', err);
        });
});

gsap.registerPlugin(ScrollTrigger);

const items = gsap.utils.toArray('.item');


if (items.length > 0) {
    items[0].classList.add('active');
}

items.forEach((item, i) => {
  ScrollTrigger.create({
    trigger: item,
    start: "top center", 
    end: "bottom center", 
    onEnter: () => {

      items.forEach(el => el.classList.remove('active'));
      item.classList.add('active');
    },
    onLeaveBack: () => {

      if (i === 0) {
        items[0].classList.add('active');
      } else {
        items.forEach(el => el.classList.remove('active'));
        items[i - 1].classList.add('active');
      }
    },
    onEnterBack: () => {
      items.forEach(el => el.classList.remove('active'));
      item.classList.add('active');
    }
  });
});