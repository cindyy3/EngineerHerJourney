// Timeline events
const events = [
  {
    id: 1,
    date: "1843",
    title: "Ada Lovelace Writes the First Algorithm",
    description: "Ada Lovelace, often called the first computer programmer, writes an algorithm for Charles Babbage's Analytical Engine, foreseeing the potential of computers beyond basic calculations."
  },
  {
    id: 2,
    date: "1873",
    title: "Emily Warren Roebling Oversees the Brooklyn Bridge Construction",
    description: "Emily Warren Roebling steps in to supervise the construction of the Brooklyn Bridge after her husband falls ill, becoming one of the first women to play a pivotal role in civil engineering."
  },
  {
    id: 3,
    date: "1876",
    title: "First Woman to Earn an Engineering Degree",
    description: "Elizabeth Bragg became the first woman in the U.S. to earn an engineering degree from an American university at UC Berkeley."
  },
  {
    id: 4,
    date: "1919",
    title: "Edith Clarke Becomes a Trailblazing Electrical Engineer",
    description: "Edith Clarke becomes the first woman to earn an electrical engineering degree from MIT and later invents the Clarke Calculator, which simplified power line calculations."
  },
  {
    id: 5,
    date: "1935",
    title: "Elsie MacGill Becomes the First Female Aircraft Designer",
    description: "Known as the 'Queen of the Hurricanes,' Elsie MacGill designs aircraft for WWII and pioneers advancements in aviation safety and production methods."
  },
  {
    id: 6,
    date: "1939",
    title: "First Female Engineer at NASA",
    description: "Kitty O'Brien Joyner made history as the first female engineer at NASA, breaking gender barriers in the field of aerospace engineering and contributing to the early stages of space exploration."
  },
  {
    id: 7,
    date: "1942",
    title: "Women Help Build the First Computer",
    description: "Women like Jean Jennings Bartik and six others program the ENIAC (Electronic Numerical Integrator and Computer), one of the world's first computers, during WWII."
  },
  {
    id: 8,
    date: "1949",
    title: "Mary Sherman Morgan Invents Rocket Fuel",
    description: "Mary Sherman Morgan develops Hydyne, a fuel that helps launch the first successful American satellite into orbit."
  },
  {
    id: 9,
    date: "1969",
    title: "Apollo 11 Software",
    description: "Margaret Hamilton led the development of the onboard software for Apollo 11, ensuring the mission's success by creating the first software system to support a lunar landing and safely guide astronauts to the moon."
  },
  {
    id: 10,
    date: "1985",
    title: "First Woman in Space from the US",
    description: "Sally Ride became the first American woman in space aboard the Space Shuttle Challenger, highlighting the vital role of women in aerospace engineering."
  },
  {
    id: 11,
    date: "1992",
    title: "First Black Woman in Space",
    description: "Mae Jemison became the first Black woman astronaut in space, orbiting Earth aboard the Space Shuttle Endeavour."
  },
  {
    id: 12,
    date: "2006",
    title: "Sheryl Sandberg Joins Facebook",
    description: "Sheryl Sandberg becomes COO of Facebook, shaping its growth into one of the most influential tech companies in the world."
  },
  {
    id: 13,
    date: "2014",
    title: "Megan Smith Appointed U.S. Chief Technology Officer",
    description: "Megan Smith, an engineer and tech entrepreneur, becomes the first female CTO of the United States, advocating for diversity in STEM fields."
  },
  {
    id: 14,
    date: "2019",
    title: "First All-Female Spacewalk",
    description: "Christina Koch and Jessica Meir completed NASA's first all-woman spacewalk, successfully repairing the International Space Station's power system."
  },
  {
    id: 15,
    date: "2022",
    title: "Ritu Karidhal Leads India's Space Mission",
    description: "Ritu Karidhal, known as the 'Rocket Woman of India,' leads India's Mars Orbiter Mission and plays a key role in the Chandrayaan-2 lunar mission."
  }
];

document.addEventListener('DOMContentLoaded', () => {
  generateTimeline();
  
  setupScrollAnimations();
});

function generateTimeline() {
  const timelineContainer = document.querySelector('.timeline-container');
  
  events.forEach((event, index) => {
    const timelineItem = document.createElement('div');
    timelineItem.className = `timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`;
    
    timelineItem.innerHTML = `
      <div class="timeline-card">
        <div class="timeline-card-content">
          <div class="timeline-date">${event.date}</div>
          <h3 class="timeline-title">${event.title}</h3>
          <p class="timeline-description">${event.description}</p>
        </div>
      </div>
    `;
    
    timelineContainer.appendChild(timelineItem);
  });
}

function setupScrollAnimations() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  timelineItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.05}s`;
    observer.observe(item);
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const currentFocus = document.activeElement;
    const currentIndex = Array.from(timelineItems).findIndex(item => 
      item.contains(currentFocus) || item === currentFocus
    );
    
    if (currentIndex !== -1) {
      e.preventDefault();
      let nextIndex;
      
      if (e.key === 'ArrowDown') {
        nextIndex = (currentIndex + 1) % timelineItems.length;
      } else {
        nextIndex = (currentIndex - 1 + timelineItems.length) % timelineItems.length;
      }
      
      timelineItems[nextIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
      timelineItems[nextIndex].focus();
    }
  }
});

document.querySelectorAll('.timeline-item').forEach(item => {
  item.setAttribute('tabindex', '0');
  item.addEventListener('focus', () => {
    item.style.outline = '2px solid var(--color-pink)';
    item.style.outlineOffset = '4px';
  });
  item.addEventListener('blur', () => {
    item.style.outline = 'none';
  });
});