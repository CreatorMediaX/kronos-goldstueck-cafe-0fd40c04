document.addEventListener('DOMContentLoaded', function() {
  // Load menu items
  fetch('data/menu.json')
    .then(response => response.json())
    .then(data => {
      const menuContainer = document.getElementById('menu-items');
      menuContainer.innerHTML = '';
      
      if (data.length === 0) {
        menuContainer.innerHTML = `
          <div class="empty-state">
            <h3>Keine Einträge gefunden</h3>
            <p>Unsere Speisekarte wird gerade aktualisiert. Schau später nochmal vorbei!</p>
          </div>
        `;
        return;
      }
      
      data.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'card menu-item';
        menuItem.dataset.category = item.category;
        menuItem.innerHTML = `
          <h3>${item.name}</h3>
          <p class="menu-item-description">${item.description}</p>
          <p class="menu-item-price">${item.price.toFixed(2)} €</p>
        `;
        menuContainer.appendChild(menuItem);
      });
      
      // Set up filter buttons
      setupMenuFilters();
    })
    .catch(error => {
      console.error('Error loading menu:', error);
      const menuContainer = document.getElementById('menu-items');
      menuContainer.innerHTML = `
        <div class="empty-state">
          <h3>Speisekarte konnte nicht geladen werden</h3>
          <p>Bitte versuche es später noch einmal.</p>
        </div>
      `;
    });
  
  // Load opening hours
  fetch('data/hours.json')
    .then(response => response.json())
    .then(data => {
      const hoursContainer = document.getElementById('opening-hours');
      hoursContainer.innerHTML = '';
      
      if (data.length === 0) {
        hoursContainer.innerHTML = `
          <div class="empty-state">
            <h3>Keine Öffnungszeiten verfügbar</h3>
            <p>Bitte ruf uns an oder schau später nochmal vorbei.</p>
          </div>
        `;
        return;
      }
      
      data.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.className = 'opening-day';
        dayElement.innerHTML = `
          <span class="opening-day-name">${day.day}</span>
          <span class="opening-day-hours">${day.hours}</span>
        `;
        hoursContainer.appendChild(dayElement);
      });
    })
    .catch(error => {
      console.error('Error loading opening hours:', error);
      const hoursContainer = document.getElementById('opening-hours');
      hoursContainer.innerHTML = `
        <div class="empty-state">
          <h3>Öffnungszeiten konnten nicht geladen werden</h3>
          <p>Bitte versuche es später noch einmal.</p>
        </div>
      `;
    });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
});

function setupMenuFilters() {
  const filterButtons = document.querySelectorAll('.menu-filter');
  const menuItems = document.querySelectorAll('.menu-item');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Update active state
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      const category = this.dataset.category;
      
      // Filter items
      menuItems.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
      
      // Check if any items are visible
      const visibleItems = Array.from(menuItems).filter(item => 
        item.style.display !== 'none'
      );
      
      if (visibleItems.length === 0) {
        const menuContainer = document.getElementById('menu-items');
        menuContainer.innerHTML = `
          <div class="empty-state">
            <h3>Keine Einträge in dieser Kategorie</h3>
            <p>Wir haben aktuell keine ${category === 'kaffee' ? 'Kaffeespezialitäten' : 'Kuchen'} im Angebot.</p>
          </div>
        `;
      }
    });
  });
}
