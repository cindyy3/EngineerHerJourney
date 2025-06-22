// Quiz data with all 15 questions
const questions = [
  {
    question: "How do you most like to spend your free time?",
    answers: {
      "Solving puzzles or playing strategy games.": ["Data Scientist", "Software Engineer"],
      "Tinkering with a DIY project.": ["Mechanical Engineer", "Civil Engineer"],
      "Exploring and spending time in nature.": ["Environmental Engineer"],
      "Diving into a new book or documentary.": ["Aerospace Engineer", "Biomedical Engineer"],
      "Experimenting with creative hobbies like baking or crafting.": ["Chemical Engineer"]
    }
  },
  {
    question: "What kind of impact do you most want to have on the world?",
    answers: {
      "Make everyday life easier for people.": ["Software Engineer", "Electrical Engineer"],
      "Protect the planet and create sustainable solutions.": ["Environmental Engineer", "Civil Engineer"],
      "Invent something that pushes the boundaries of technology.": ["Aerospace Engineer", "Data Scientist", "Chemical Engineer", "Mechanical Engineer"],
      "Improve people's health and well-being.": ["Biomedical Engineer"]
    }
  },
  {
    question: "Which of these sounds most exciting to you?",
    answers: {
      "Working outdoors on big projects, like building bridges or homes.": ["Civil Engineer", "Environmental Engineer"],
      "Researching how to improve materials or chemicals to make them safer.": ["Chemical Engineer", "Electrical Engineer"],
      "Analyzing trends and predicting patterns to solve real-world problems.": ["Data Scientist"],
      "Designing a product for people to use every day.": ["Software Engineer", "Mechanical Engineer", "Biomedical Engineer", "Aerospace Engineer"]
    }
  },
  {
    question: "How would you approach a problem?",
    answers: {
      "Think creatively and come up with an out-of-the-box idea.": ["Environmental Engineer", "Aerospace Engineer"],
      "Find patterns and analyze the situation carefully.": ["Data Scientist", "Electrical Engineer"],
      "Break it into smaller steps and try different solutions until it works.": ["Software Engineer", "Mechanical Engineer", "Civil Engineer"],
      "Research and study the problem to understand it completely beforehand.": ["Biomedical Engineer", "Chemical Engineer"]
    }
  },
  {
    question: "What excites you about the future?",
    answers: {
      "Inventing new tools or technology.": ["Aerospace Engineer", "Software Engineer"],
      "Finding ways to protect our planet and natural resources.": ["Environmental Engineer", "Civil Engineer"],
      "Solving mysteries in science or biology.": ["Biomedical Engineer", "Chemical Engineer"],
      "Using data to predict and solve big problems.": ["Data Scientist", "Electrical Engineer"]
    }
  },
  {
    question: "How do you feel about working in a team?",
    answers: {
      "I love working together to solve problems.": ["Civil Engineer", "Environmental Engineer", "Biomedical Engineer", "Chemical Engineer"],
      "I prefer working independently but sharing ideas when needed.": ["Software Engineer", "Data Scientist", "Electrical Engineer"],
      "I like leading projects and helping others stay organized.": ["Mechanical Engineer", "Aerospace Engineer"]
    }
  },
  {
    question: "What's your go-to study strategy?",
    answers: {
      "Making detailed notes": ["Data Scientist", "Chemical Engineer"],
      "Sketching diagrams and using visuals": ["Civil Engineer", "Aerospace Engineer"],
      "Doing hands-on practice": ["Mechanical Engineer", "Electrical Engineer"],
      "Teaching the concept to others": ["Software Engineer", "Environmental Engineer"]
    }
  },
  {
    question: "If you had to describe yourself in one word, it would be…",
    answers: {
      "Inventive": ["Electrical Engineer", "Software Engineer", "Chemical Engineer"],
      "Logical": ["Data Scientist", "Aerospace Engineer"],
      "Adventurous": ["Civil Engineer", "Mechanical Engineer"],
      "Compassionate": ["Biomedical Engineer", "Environmental Engineer"]
    }
  },
  {
    question: "What kind of puzzle do you enjoy the most?",
    answers: {
      "Jigsaw puzzles": ["Civil Engineer", "Mechanical Engineer", "Environmental Engineer"],
      "Logic puzzles or brain teasers": ["Data Scientist", "Software Engineer"],
      "Escape rooms and murder mysteries": ["Aerospace Engineer", "Electrical Engineer"],
      "Sudoku": ["Chemical Engineer", "Data Scientist"]
    }
  },
  {
    question: "You just got superpowers! What's your ability?",
    answers: {
      "Building and upgrading tech gadgets": ["Electrical Engineer", "Mechanical Engineer", "Aerospace Engineer"],
      "Healing and creating magic potions": ["Biomedical Engineer", "Chemical Engineer"],
      "Controlling the weather": ["Civil Engineer", "Environmental Engineer"],
      "Reading minds": ["Data Scientist", "Software Engineer"]
    }
  },
  {
    question: "In the friend group, you are…",
    answers: {
      "The mom friend": ["Mechanical Engineer", "Electrical Engineer", "Biomedical Engineer"],
      "The planner": ["Civil Engineer", "Environmental Engineer"],
      "The gossip": ["Data Scientist", "Aerospace Engineer"],
      "The life of the party": ["Software Engineer", "Chemical Engineer"]
    }
  },
  {
    question: "When studying, what are you typically listening to?",
    answers: {
      "Upbeat pop or rap": ["Software Engineer", "Mechanical Engineer"],
      "Calm, instrumental classical": ["Biomedical Engineer", "Data Scientist"],
      "White noise": ["Environmental Engineer", "Civil Engineer"],
      "Playing a TV show episode on the side": ["Chemical Engineer", "Aerospace Engineer"],
      "Nothing - I need total silence to focus": ["Electrical Engineer"]
    }
  },
  {
    question: "What is your worst nightmare at school?",
    answers: {
      "Forgetting to study and failing a test": ["Data Scientist", "Biomedical Engineer"],
      "Getting stuck in a group project where no one listens": ["Civil Engineer", "Environmental Engineer"],
      "Having to write a super long essay": ["Software Engineer", "Electrical Engineer"],
      "Being forced to sit through a long, boring lecture": ["Mechanical Engineer", "Aerospace Engineer", "Chemical Engineer"]
    }
  },
  {
    question: "When thinking about a project, what part excites you the most?",
    answers: {
      "The process of figuring out what needs to be done and creating a plan.": ["Civil Engineer", "Mechanical Engineer"],
      "Experimenting and brainstorming different solutions to see what works.": ["Biomedical Engineer", "Chemical Engineer", "Environmental Engineer"],
      "Analyzing the outcome and improving based on the results.": ["Data Scientist", "Electrical Engineer"],
      "Watching everything come together after all the hard work.": ["Software Engineer", "Aerospace Engineer"]
    }
  },
  {
    question: "When you were little, what did you most want to be when you grew up?",
    answers: {
      "Detective": ["Data Scientist", "Software Engineer"],
      "Astronaut": ["Aerospace Engineer", "Mechanical Engineer"],
      "Construction Worker": ["Civil Engineer", "Mechanical Engineer"],
      "The President": ["Electrical Engineer", "Data Scientist"],
      "Doctor": ["Biomedical Engineer", "Chemical Engineer"]
    }
  }
];

// Career descriptions
const careerDescriptions = {
  "Software Engineer": "Software engineers design, build, and maintain the programs and apps we use every day on our phones, computers, and other devices. They write code to create everything from social media apps to video games to new tools that help businesses thrive. These engineers work to make sure software is functional, user-friendly, and secure. If you enjoy solving problems, thinking logically, and making things work, software engineering could be a great fit. You'll be using your creativity and tech skills to design the future of technology!",
  "Civil Engineer": "Civil engineers design and build the infrastructure that makes our world function - like roads, bridges, and buildings. They plan and oversee large construction projects, making sure structures are safe, functional, and built to last. If you love working on big, practical projects and making a lasting impact on your community, civil engineering is where you can put your problem-solving skills to use. It's all about designing spaces where people can live, work, and move around safely.",
  "Environmental Engineer": "Environmental engineers work to protect the planet by finding ways to address environmental problems. They design systems to reduce pollution, create clean energy, and manage waste. These engineers focus on sustainability and helping the Earth stay healthy for future generations. Whether it's cleaning up polluted areas or developing eco-friendly technologies, environmental engineers strive to make a positive impact on the planet.",
  "Mechanical Engineer": "Mechanical engineers design and create machines and devices that make life easier, from household gadgets to large engines. They work on projects that involve moving parts, like cars, airplanes, or robots. If you love taking things apart to understand how they work and enjoy thinking about how different pieces come together to create something new, mechanical engineering might be perfect for you. It's about turning ideas into reality through innovation, design, and a hands-on approach.",
  "Data Scientist": "Data scientists work with large amounts of data to uncover patterns and insights that can help make decisions. They use math, statistics, and computer programming to analyze data and turn it into useful information. Data scientists help companies and organizations make informed choices, whether it's predicting trends in business or solving issues in healthcare. If you enjoy puzzles and love working with numbers and tech, data science could be a great match for you.",
  "Biomedical Engineer": "Biomedical engineers apply engineering principles to healthcare and medicine. They design medical devices, like artificial limbs, and improve equipment used in hospitals, such as diagnostic machines. Biomedical engineers work to make health-related technologies better, safer, and more accessible. Their innovations improve the quality of life for patients and help doctors provide better care.",
  "Chemical Engineer": "Chemical engineers transform raw materials into useful products like food, medicine, and energy. They work with chemicals and materials to create processes that are safe, efficient, and cost-effective. If you're curious about how everyday products are made and enjoy chemistry, chemical engineering is a field where you can explore those endless possibilities.",
  "Aerospace Engineer": "Aerospace engineers design and build aircraft and spacecraft, working on everything from airplanes to rockets to satellites. They focus on making sure these vehicles are safe, efficient, and able to perform their jobs in the sky or in space. Aerospace engineers push the boundaries of what is possible in aviation and space exploration, developing the technology that allows us to explore our universe.",
  "Electrical Engineer": "Electrical engineers design systems that power everything from the lights in your house to the devices you use every day. They work with electricity and electronics to make sure that everything works efficiently and safely. If you're interested in understanding how electricity works and enjoy solving technical problems, electrical engineering offers a practical and impactful way to shape the world around you!"
};

// Quiz state
let currentQuestionIndex = 0;
let selectedAnswers = [];
let quizStarted = false;

// DOM elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const startQuizBtn = document.getElementById('start-quiz-btn');
const tryAgainBtn = document.getElementById('try-again-btn');
const progressFill = document.getElementById('progress-fill');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const careerResult = document.getElementById('career-result');
const careerDescription = document.getElementById('career-description');

// Initialize quiz
document.addEventListener('DOMContentLoaded', () => {
  totalQuestionsSpan.textContent = questions.length;
  
  startQuizBtn.addEventListener('click', startQuiz);
  tryAgainBtn.addEventListener('click', resetQuiz);
});

function startQuiz() {
  quizStarted = true;
  currentQuestionIndex = 0;
  selectedAnswers = [];
  
  startScreen.classList.remove('active');
  quizScreen.classList.add('active');
  
  showQuestion();
}

function showQuestion() {
  const question = questions[currentQuestionIndex];
  
  // Update progress
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  progressFill.style.width = `${progress}%`;
  currentQuestionSpan.textContent = currentQuestionIndex + 1;
  
  // Update question text
  questionText.textContent = question.question;
  
  // Clear previous answers
  answersContainer.innerHTML = '';
  
  // Create answer buttons
  Object.keys(question.answers).forEach((answer, index) => {
    const button = document.createElement('button');
    button.className = 'answer-button';
    button.textContent = answer;
    button.style.animationDelay = `${index * 0.1}s`;
    
    button.addEventListener('click', () => selectAnswer(answer));
    
    answersContainer.appendChild(button);
  });
}

function selectAnswer(answer) {
  const question = questions[currentQuestionIndex];
  const careers = question.answers[answer] || [];
  
  // Add careers to selected answers
  selectedAnswers.push(...careers);
  
  // Move to next question or show results
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    setTimeout(() => {
      showQuestion();
    }, 300);
  } else {
    setTimeout(() => {
      showResults();
    }, 300);
  }
}

function showResults() {
  const topCareer = getTopCareer();
  
  quizScreen.classList.remove('active');
  resultsScreen.classList.add('active');
  
  careerResult.textContent = topCareer;
  careerDescription.textContent = careerDescriptions[topCareer];
}

function getTopCareer() {
  const careerCounts = {};
  
  selectedAnswers.forEach(career => {
    careerCounts[career] = (careerCounts[career] || 0) + 1;
  });
  
  let topCareer = "Software Engineer"; // Default
  let maxCount = 0;
  
  Object.entries(careerCounts).forEach(([career, count]) => {
    if (count > maxCount) {
      maxCount = count;
      topCareer = career;
    }
  });
  
  return topCareer;
}

function resetQuiz() {
  currentQuestionIndex = 0;
  selectedAnswers = [];
  quizStarted = false;
  
  resultsScreen.classList.remove('active');
  startScreen.classList.add('active');
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

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
  if (!quizStarted || !quizScreen.classList.contains('active')) return;
  
  const answerButtons = document.querySelectorAll('.answer-button');
  
  if (e.key >= '1' && e.key <= '9') {
    const index = parseInt(e.key) - 1;
    if (answerButtons[index]) {
      answerButtons[index].click();
    }
  }
});