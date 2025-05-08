document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a.text-barra').forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        var targetClass = this.getAttribute('data-target');
        var targetElement = document.querySelector('.' + targetClass);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });