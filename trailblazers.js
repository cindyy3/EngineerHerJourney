// Trailblazers data
const trailblazers = [
  {
    id: 1,
    name: "Ada Lovelace",
    imageName: "ada",
    shortDescription: "Mathematician, writer, and the first computer programmer.",
    description: `Ada Lovelace was the daughter of the famous poet Lord Byron and his wife, Annabella Milbanke. She showed an early interest in mathematics, an unusual pursuit for women in the 19th century. She worked alongside Charles Babbage, a mathematician and inventor, who created the concept for the first mechanical computer, the Analytical Engine.
      
      Lovelace's most significant contribution came from her work on Babbage's machine. She realized the machine could do more than calculate numbers — it could be programmed to perform any mathematical task. In 1843, she wrote an algorithm for the Analytical Engine, making her the first computer programmer in history.
      
      Despite living in an era when women were discouraged from studying mathematics, Lovelace's brilliance could not be ignored, and her work laid the foundation for the digital age. Today, the programming language Ada is named in her honor, and she remains a role model for women in computing.`
  },
  {
    id: 2,
    name: "Mary Jackson",
    imageName: "mary",
    shortDescription: "NASA's first African American female engineer.",
    description: `Mary Jackson was a mathematician and aerospace engineer who worked at NASA's Langley Research Center. She earned a degree in mathematics and physical science from the University of Hampton and joined NASA in 1951 as a research mathematician.
      
      Jackson made significant contributions to aerodynamics, especially in the design of aircraft and spacecraft. She overcame racial and gender barriers to become NASA's first African American female engineer. Jackson also mentored other women in engineering, advocating for greater representation of African American women at NASA.
      
      Her achievements were largely unrecognized during her career, but in 2019 she was awarded the Congressional Gold Medal, and her story was featured in the film Hidden Figures.`
  },
  {
    id: 3,
    name: "Radia Perlman",
    imageName: "radia",
    shortDescription: "Known as the 'Mother of the Internet'. Invented the Spanning Tree Protocol.",
    description: `Radia Perlman is a computer scientist and engineer widely known for her invention of the Spanning Tree Protocol (STP), which is fundamental to the functioning of computer networks today. She received her bachelor's degree in mathematics from MIT and later earned a Ph.D. in computer science from MIT as well.
      
      Perlman's Spanning Tree Protocol revolutionized networking, making it possible for computers to talk to each other over vast distances in a reliable and organized manner, which was critical for the development of the Internet. This work made her known as the 'Mother of the Internet'.
      
      In addition to her contributions to networking, Perlman also created "Internet Routing for Dummies", a well-known guide to networking. Her work has earned her the IEEE Internet Award, and she has been inducted into the Internet Hall of Fame. Perlman has spent decades advocating for more women to enter the tech field.`
  },
  {
    id: 4,
    name: "Katherine Johnson",
    imageName: "katherine",
    shortDescription: "NASA mathematician who was critical to the success of US crewed spaceflights.",
    description: `Katherine Johnson was a mathematician who worked for NASA. Despite the challenges of racial and gender discrimination, she became one of the first African American women to work as a physicist and mathematician at NASA. She earned a degree in mathematics and French from West Virginia University and worked at NASA's Langley Research Center.
      
      Johnson's most famous work was calculating the trajectories for John Glenn's historic orbital flight in 1962, and she was also critical to the success of the Apollo moon landing. Johnson's mathematical calculations were instrumental in ensuring the success and safety of early space missions.
      
      Johnson's legacy is celebrated in the film Hidden Figures, which chronicles her life and the impact of her work at NASA. She received numerous awards throughout her life, including the Presidential Medal of Freedom in 2015.`
  },
  {
    id: 5,
    name: "Grace Hopper",
    imageName: "hopper",
    shortDescription: "Computer scientist who developed the first compiler.",
    description: `Grace Hopper was a mathematician and a rear admiral in the U.S. Navy. She earned her Ph.D. in mathematics from Yale University and was recruited by the U.S. Navy during World War II to work on the Mark I computer, which she was one of the first programmers of. After the war, she continued to work on developing computer systems.
      
      Hopper is best known for her development of the COBOL programming language, which made it possible for people without specialized technical knowledge to write software, making programming far more accessible. She also popularized the term "debugging" after removing an actual moth from a computer that was malfunctioning.
      
      She was awarded the National Medal of Technology in 1991 and the Presidential Medal of Freedom in 2016. Hopper's legacy is also celebrated through the annual Grace Hopper Celebration, the world's largest gathering of women in computing.`
  },
  {
    id: 6,
    name: "Lillian M. Gilbreth",
    imageName: "lillian",
    shortDescription: "One of the first industrial engineers and a pioneer in efficiency studies.",
    description: `Lillian M. Gilbreth was one of the earliest industrial engineers and a pioneer in the field of management. She graduated with a Ph.D. in Psychology from the University of Brown, but her work in psychology was always deeply intertwined with industrial engineering and human factors. She and her husband, Frank Gilbreth, worked together on time and motion studies.
      
      Gilbreth's most influential work was in the development of motion study techniques, which aimed to increase productivity in industries like manufacturing and healthcare. She also contributed to the design of kitchen equipment that increased the efficiency of household tasks, which had a lasting impact on domestic engineering.

      Gilbreth was the first woman to be elected to the American Society of Mechanical Engineers and became the first female engineer to be elected to the National Academy of Engineering. She was also one of the first female professors of engineering at Purdue.`
  },
  {
    id: 7,
    name: "Ellen Ochoa",
    imageName: "ellen",
    shortDescription: "The first Hispanic woman in space and former director of NASA's Johnson Center.",
    description: `Ellen Ochoa is a trailblazing electrical engineer, former astronaut, and the first Hispanic woman to travel to space. Born in 1958 in Los Angeles, she earned a bachelor's degree in physics from San Diego State University and a master's and Ph.D. in electrical engineering from Stanford University. Her early research focused on optical systems and image processing.

      In 1990, Ochoa was selected as a NASA astronaut, travelling to in space in 1993 aboard the Space Shuttle Discovery. She flew on four missions, spending over 1,000 hours in space and contributing to research on Earth's atmosphere and the effects of microgravity.
      
      Beyond her spaceflights, Ochoa made history again as the first Hispanic director of NASA's Johnson Space Center (2013–2018), where she led advancements in human spaceflight. She has received numerous accolades, including NASA's Distinguished Service Medal, the Congressional Hispanic Caucus Medal, and an induction into the U.S. Astronaut Hall of Fame.`
  },
  {
    id: 8,
    name: "Hedy Lamarr",
    imageName: "hedy",
    shortDescription: "Hollywood actress who developed frequency-hopping technology.",
    description: `Hedy Lamarr was an Austrian-American actress and inventor. She is best known for her work as a Hollywood star during the Golden Age of film, but she was also an accomplished inventor. Lamarr's passion for technology led her to develop a frequency-hopping spread spectrum technology that would eventually be used in Wi-Fi, GPS, and Bluetooth.
      
      Lamarr's invention was a crucial development in wireless communication and was initially intended for military use to prevent enemies from jamming torpedo guidance systems during World War II. Though the technology wasn't immediately adopted, it became a foundation for modern communication systems.
      
      In 1997, Lamarr and her co-inventor, George Anthiel, were awarded the Electronic Frontier Foundation (EFF) Pioneer Award for their innovative work in wireless communication.`
  },
  {
    id: 9,
    name: "Mae Jemison",
    imageName: "mae",
    shortDescription: "The first Black woman in space and advocate for science education.",
    description: `Mae Jemison made history as the first Black woman in space and has contributed to both engineering and medicine. Born in 1956, she earned a chemical engineering degree from Stanford and a medical degree from Cornell. Before becoming an astronaut, she worked as a doctor and served in the Peace Corps. Her passion for space led her to NASA, where she was selected as an astronaut in 1987.
      
      On September 12, 1992, Jemison flew aboard the Space Shuttle Endeavour, conducting experiments on human adaptation to space. She spent over 190 hours in orbit, contributing to scientific research on weightlessness and human health in space.

      Beyond NASA, she founded The Jemison Group, which develops technology for healthcare in developing countries, and launched The Earth We Share, a STEM education initiative. She also led NASA's 100 Year Starship Project, advancing research for deep-space travel. Her achievements have earned her inductions into the National Women's Hall of Fame and International Space Hall of Fame.`
  },
  {
    id: 10,
    name: "Debbie Sterling",
    imageName: "debbie",
    shortDescription: "Founder of GoldieBlox, creating toys to inspire girls to become engineers.",
    description: `Debbie Sterling is a mechanical engineer and the founder of GoldieBlox, a toy company that aims to inspire girls to become engineers and problem-solvers. Sterling graduated with a degree in Mechanical Engineering from Stanford University, where she was one of the few women in her class. Her personal experiences of being discouraged from pursuing engineering early on led her to create a company that would challenge stereotypes and help girls see the fun side of engineering.
      
      GoldieBlox, launched in 2012, was created to provide girls with the tools to develop engineering skills through construction toys and activities. Sterling's vision was to make engineering accessible, fun, and engaging for young girls, helping them develop critical thinking, problem-solving, and spatial skills.
      
      The company received widespread media attention, including being featured in Forbes' 30 Under 30 for Education and Business. Sterling also won the National Association of Women Business Owners' Rising Star Award. Through her company, she has made an immense impact on gender equality in STEM by changing the way girls think about engineering.`
  },
  {
    id: 11,
    name: "Kalpana Chawla",
    imageName: "kalpana",
    shortDescription: "The first woman of Indian origin in space and NASA astronaut.",
    description: `Kalpana Chawla was a trailblazing aerospace engineer and the first Indian woman in space. Born in India in 1961, she pursued her passion for aviation early on, earning a degree in aeronautical engineering before moving to the U.S. for graduate studies. She earned a master's and PhD in aerospace engineering and later worked at NASA's Ames Research Center. In 1994, she was selected as a NASA astronaut.
      
      Chawla made her first spaceflight in 1997 aboard Space Shuttle Columbia, operating the shuttle's robotic arm and conducted microgravity experiments. She flew again on STS-107 in 2003, where her crew conducted over 80 experiments. Tragically, the mission ended in disaster when Space Shuttle Columbia disintegrated upon reentry, but her contributions to space exploration left a lasting impact.
      
      Chawla received numerous posthumous honors, including India's highest civilian awards, the Padma Vibhushan and the Congressional Space Medal of Honor. Several institutions, spacecraft, and scholarships now bear her name.`
  },
  {
    id: 12,
    name: "Fei-Fei Li",
    imageName: "feifei",
    shortDescription: "AI pioneer who created ImageNet and advocates for human-centered AI.",
    description: `Fei-Fei Li, a trailblazer in artificial intelligence (AI) and computer vision, was born in China in 1976 and moved to the U.S. for her studies. She earned a Ph.D. in Electrical Engineering from Caltech and is currently a professor at Stanford University, where she leads the Stanford Artificial Intelligence Lab (SAIL). Her research focuses on developing AI systems that understand human visual perception.
      
      Li is best known for creating ImageNet, a large-scale database that helped propel deep learning in computer vision. ImageNet's dataset enabled significant advances in AI, particularly in object recognition and technologies like self-driving cars and facial recognition. Li has also been an advocate for ethical AI, emphasizing the need for human-centered approaches and addressing bias in algorithms.

      She co-founded AI4ALL, a nonprofit that works to increase diversity in AI by providing educational opportunities for underrepresented youth, especially women. She has received numerous accolades, including being named to Time's 100 Most Influential People and winning the ACM Prize in Computing.`
  }
];

document.addEventListener('DOMContentLoaded', () => {
  // Check if we're on the main trailblazers page or detail page
  const isDetailPage = window.location.pathname.includes('trailblazer-detail') || 
                      document.getElementById('detail-content');
  
  if (isDetailPage) {
    loadTrailblazerDetail();
  } else {
    generateTrailblazersGrid();
    setupScrollAnimations();
  }
});

function generateTrailblazersGrid() {
  const grid = document.getElementById('trailblazers-grid');
  if (!grid) return;
  
  trailblazers.forEach((trailblazer, index) => {
    const card = document.createElement('a');
    card.href = `trailblazer-detail.html?id=${trailblazer.id}`;
    card.className = 'trailblazer-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
      <div class="trailblazer-image" style="background-image: url('pics/${trailblazer.imageName}.jpeg?height=300&width=300&text=${encodeURIComponent(trailblazer.name)}')"></div>
      <div class="trailblazer-content">
        <h3 class="trailblazer-name">${trailblazer.name}</h3>
        <p class="trailblazer-description">${trailblazer.shortDescription}</p>
      </div>
    `;
    
    grid.appendChild(card);
  });
}

function loadTrailblazerDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = parseInt(urlParams.get('id'));
  const trailblazer = trailblazers.find(t => t.id === id);
  
  const detailContent = document.getElementById('detail-content');
  if (!detailContent) return;
  
  if (!trailblazer) {
    detailContent.innerHTML = '<div class="error-message">Trailblazer not found</div>';
    return;
  }
  
  // Update page title
  document.title = `${trailblazer.name} - EngineerHer Journey`;
  
  const paragraphs = trailblazer.description.split('\n\n').map(paragraph => 
    `<p>${paragraph.trim()}</p>`
  ).join('');
  
  detailContent.innerHTML = `
    <div class="detail-image" style="background-image: url('pics/${trailblazer.imageName}.jpeg?height=300&width=300&text=${encodeURIComponent(trailblazer.name)}')"></div>
    <div class="detail-info">
      <h1>${trailblazer.name}</h1>
      <div class="detail-description">
        ${paragraphs}
      </div>
    </div>
  `;
}

function setupScrollAnimations() {
  const cards = document.querySelectorAll('.trailblazer-card');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  cards.forEach(card => {
    observer.observe(card);
  });
}

// Add smooth scrolling for any internal links
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