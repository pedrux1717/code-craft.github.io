const sections = document.querySelectorAll(".section");
    const links = document.querySelectorAll(".navbar a");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            links.forEach(link => link.classList.remove("active"));

            const activeLink = document.querySelector(
              `.navbar a[href="#${entry.target.id}"]`
            );

            if (activeLink) activeLink.classList.add("active");
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0
      }
    );

    sections.forEach(section => observer.observe(section));