document.addEventListener("DOMContentLoaded", function() {
  const mapaDiv = document.getElementById("mini-map");

  if ('IntersectionObserver' in window) {
    let observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          mapaDiv.innerHTML = `
            <a href="https://www.google.com/maps/place/R.+Chabad,+124+-+Jardim+Paulista,+São+Paulo" target="_blank" rel="noopener noreferrer" style="display: inline-block; border: 2px solid #ccc; border-radius: 8px; overflow: hidden;">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.193389216818!2d-46.6727108!3d-23.5614969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce577f80c0fc55%3A0xebdfd4a56f47cd14!2sR.%20Chabad%2C%20124%20-%20Jardim%20Paulista%2C%20São%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1753676018054!5m2!1spt-BR!2sbr"
                width="450"
                height="200"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </a>`;
          observer.unobserve(mapaDiv);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(mapaDiv);
  } else {
    // Se o navegador não suportar IntersectionObserver, carrega direto:
    mapaDiv.innerHTML = `
      <a href="https://www.google.com/maps/place/R.+Chabad,+124+-+Jardim+Paulista,+São+Paulo" target="_blank" rel="noopener noreferrer" style="display: inline-block; border: 2px solid #ccc; border-radius: 8px; overflow: hidden;">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.193389216818!2d-46.6727108!3d-23.5614969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce577f80c0fc55%3A0xebdfd4a56f47cd14!2sR.%20Chabad%2C%20124%20-%20Jardim%20Paulista%2C%20São%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1753676018054!5m2!1spt-BR!2sbr"
          width="450"
          height="200"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </a>`;
  }
});
