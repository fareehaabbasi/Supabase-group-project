const courseGroups = [
  {
    title: "Web Development / Programming Courses",
    items: [
      "HTML & CSS (Basics of Web)",
     
      "JavaScript (Basic to Intermediate)",
      "React JS",
      "MongoDB",
      "MERN Stack (Complete)",
    ],
  },
  {
    title: "Libraries",
    items: ["TypeScript", "Next.js"],
  },
  {
    title: "UI / Tools",
    items: ["Tailwind CSS", "Bootstrap", "Figma to HTML"],
  },
  {
    title: "Career Skills",
    items: ["Freelancing", "Portfolio Building", "Git & GitHub"],
  },
  {
    title: "API / Data Handling",
    items: [
      "Database Fundamentals (SQL basics)",
      "API Development",
      "REST & JSON",
      "Authentication (JWT)",
    ],
  },
];
const picsOfCourses = {
  "HTML & CSS (Basics of Web)": "./assets/images/1.jpeg",
  "JavaScript (Basic to Intermediate)": "./assets/images/2.png",
  "React JS": "./assets/images/3.jpg",
  "MongoDB": "./assets/images/4.png",
  "MERN Stack (Complete)": "./assets/images/5.jpeg",

  "TypeScript": "./assets/images/6.jpeg",
  "Next.js": "./assets/images/7.jpeg",

  "Tailwind CSS": "./assets/images/8.jpeg",
  "Bootstrap": "./assets/images/9.png",
  "Figma to HTML": "./assets/images/10.png",

  "Freelancing": "./assets/images/11.jpeg",
  "Portfolio Building": "./assets/images/12.jpeg",
  "Git & GitHub": "./assets/images/13.jpeg",

  "Database Fundamentals (SQL basics)": "./assets/images/14.png",
  "API Development": "./assets/images/15.jpeg",
  "REST & JSON": "./assets/images/16.jpeg",
  "Authentication (JWT)": "./assets/images/17.jpeg"
};

const courseDetails = {
  "HTML & CSS (Basics of Web)": {
    instructor: "Alice Smith",
    level: "Beginner",
    duration: "4 Weeks",
    rating: "★★★★★",
    description: "Learn the fundamentals of web development with HTML and CSS. Build your first web pages, understand styling, layouts, and responsive design.",
    syllabus: ["HTML basics", "CSS basics", "Flexbox & Grid", "Responsive Design", "Project: Personal Webpage"],
    image: picsOfCourses["HTML & CSS (Basics of Web)"]
  },
  "JavaScript (Basic to Intermediate)": {
    instructor: "John Doe",
    level: "Beginner to Intermediate",
    duration: "6 Weeks",
    rating: "★★★★★",
    description: "Master JavaScript basics and intermediate concepts. Learn DOM manipulation, events, functions, and start building interactive web apps.",
    syllabus: ["Variables & Data Types", "Functions", "DOM Manipulation", "Events", "Project: ToDo App"],
    image: picsOfCourses["JavaScript (Basic to Intermediate)"]
  },
  "React JS": {
    instructor: "Sarah Johnson",
    level: "Intermediate",
    duration: "8 Weeks",
    rating: "★★★★★",
    description: "Learn React from scratch: components, props, state, hooks, and routing. Build dynamic, modern web applications with React JS.",
    syllabus: ["JSX & Components", "State & Props", "Hooks", "Routing", "Project: React Website"],
    image: picsOfCourses["React JS"]
  },
  "MongoDB": {
    instructor: "Michael Lee",
    level: "Beginner to Intermediate",
    duration: "5 Weeks",
    rating: "★★★★☆",
    description: "Learn MongoDB, a NoSQL database, and how to store, query, and manage data efficiently for modern web applications.",
    syllabus: ["Database Basics", "CRUD Operations", "Aggregation", "Indexes", "Project: Blog App"],
    image: picsOfCourses["MongoDB"]
  },
  "MERN Stack (Complete)": {
    instructor: "David Brown",
    level: "Intermediate",
    duration: "12 Weeks",
    rating: "★★★★★",
    description: "Become a full-stack developer with MongoDB, Express, React, and Node.js. Build complete web applications from scratch.",
    syllabus: ["MongoDB & Express", "React Basics", "Node.js & API", "Authentication", "Full MERN Project"],
    image: picsOfCourses["MERN Stack (Complete)"]
  },
  "TypeScript": {
    instructor: "Emma Wilson",
    level: "Intermediate",
    duration: "4 Weeks",
    rating: "★★★★☆",
    description: "Learn TypeScript to write safer, scalable JavaScript code. Understand types, interfaces, classes, and modern framework integration.",
    syllabus: ["Type Basics", "Interfaces & Types", "Classes & OOP", "Generics", "Project: Typed JS App"],
    image: picsOfCourses["TypeScript"]
  },
  "Next.js": {
    instructor: "Liam Martin",
    level: "Intermediate",
    duration: "6 Weeks",
    rating: "★★★★★",
    description: "Master Next.js to build server-side rendered React apps with routing, static generation, and API routes.",
    syllabus: ["Pages & Routing", "SSR & SSG", "API Routes", "Hooks & State", "Next.js Project"],
    image: picsOfCourses["Next.js"]
  },
  "Tailwind CSS": {
    instructor: "Olivia Davis",
    level: "Beginner",
    duration: "3 Weeks",
    rating: "★★★★☆",
    description: "Learn Tailwind CSS to quickly style web applications using utility-first classes. Build responsive and modern designs efficiently.",
    syllabus: ["Utility Classes", "Layouts & Flex/Grid", "Responsive Design", "Custom Components", "Project: Landing Page"],
    image: picsOfCourses["Tailwind CSS"]
  },
  "Bootstrap": {
    instructor: "Noah Thompson",
    level: "Beginner",
    duration: "3 Weeks",
    rating: "★★★★☆",
    description: "Get started with Bootstrap to create responsive websites quickly. Learn the grid system, components, and basic customization.",
    syllabus: ["Grid System", "Components", "Forms & Buttons", "Navbar & Modals", "Project: Portfolio Website"],
    image: picsOfCourses["Bootstrap"]
  },
  "Figma to HTML": {
    instructor: "Sophia Garcia",
    level: "Beginner to Intermediate",
    duration: "4 Weeks",
    rating: "★★★★☆",
    description: "Convert Figma designs to HTML/CSS. Learn layout, typography, and responsive techniques to bring designs to life.",
    syllabus: ["Figma Basics", "Layout & Typography", "CSS Implementation", "Responsive Design", "Project: Web Page Clone"],
    image: picsOfCourses["Figma to HTML"]
  },
  "Freelancing": {
    instructor: "Ethan Clark",
    level: "Beginner",
    duration: "2 Weeks",
    rating: "★★★★★",
    description: "Learn how to start freelancing in web development. Tips for creating profiles, getting clients, and managing projects successfully.",
    syllabus: ["Finding Clients", "Project Management", "Communication Skills", "Pricing & Contracts", "Portfolio Setup"],
    image: picsOfCourses["Freelancing"]
  },
  "Portfolio Building": {
    instructor: "Mia Rodriguez",
    level: "Beginner",
    duration: "3 Weeks",
    rating: "★★★★★",
    description: "Create an impressive web developer portfolio. Showcase your projects, skills, and attract potential clients or employers.",
    syllabus: ["Portfolio Planning", "Project Showcases", "About & Contact", "Responsive Design", "Deploy & Share"],
    image: picsOfCourses["Portfolio Building"]
  },
  "Git & GitHub": {
    instructor: "James Anderson",
    level: "Beginner",
    duration: "3 Weeks",
    rating: "★★★★★",
    description: "Learn Git version control and GitHub. Understand commits, branches, pull requests, and collaborating with other developers.",
    syllabus: ["Git Basics", "Branches & Merging", "Remote Repositories", "Pull Requests", "Collaborative Projects"],
    image: picsOfCourses["Git & GitHub"]
  },
  "Database Fundamentals (SQL basics)": {
    instructor: "Isabella Walker",
    level: "Beginner",
    duration: "4 Weeks",
    rating: "★★★★☆",
    description: "Learn SQL fundamentals, relational databases, queries, joins, and creating structured data for applications.",
    syllabus: ["SQL Basics", "Tables & Relations", "Queries & Joins", "Data Manipulation", "Project: Mini Database App"],
    image: picsOfCourses["Database Fundamentals (SQL basics)"]
  },
  "API Development": {
    instructor: "Alexander Hall",
    level: "Intermediate",
    duration: "5 Weeks",
    rating: "★★★★☆",
    description: "Learn to build APIs using Node.js and Express. Understand REST principles and data exchange formats.",
    syllabus: ["REST Basics", "Express Setup", "CRUD APIs", "Testing APIs", "Project: ToDo API"],
    image: picsOfCourses["API Development"]
  },
  "REST & JSON": {
    instructor: "Charlotte Allen",
    level: "Intermediate",
    duration: "4 Weeks",
    rating: "★★★★☆",
    description: "Understand RESTful APIs and JSON. Learn communication between client and server and build real-world applications.",
    syllabus: ["REST Concepts", "JSON Basics", "API Requests", "Error Handling", "Project: API Client"],
    image: picsOfCourses["REST & JSON"]
  },
  "Authentication (JWT)": {
    instructor: "Benjamin Young",
    level: "Intermediate",
    duration: "3 Weeks",
    rating: "★★★★☆",
    description: "Implement secure authentication using JWT. Learn token creation, verification, and protecting API routes.",
    syllabus: ["JWT Basics", "Login & Signup", "Token Verification", "Protected Routes", "Project: Auth System"],
    image: picsOfCourses["Authentication (JWT)"]
  }
};


const container = document.getElementById("courseContainer");

let courseIndex = 1;

courseGroups.forEach((group) => {
  container.innerHTML += `<div class='col-12'><h3 class='section-heading'>${group.title}</h3></div>`;

group.items.forEach((course) => {

  const imageSrc = picsOfCourses[course]; // <-- pick correct image
console.log(imageSrc);

  const card = `
    <div class="col-lg-4 col-md-6 col-sm-12">
      <div class="course-card">
        <img class="course-image" src="${imageSrc}">
        <div class="course-body">
          <h5 class="fw-bold">${course}</h5>
          <p class="small mb-1">Instructor: John Doe</p>
          <p class="small mb-2">Level: Beginner • Duration: 6 Weeks</p>
          <span style="color: gold;">★★★★★</span>
        </div>
        <a class="btn btn-course" data-course="${course}">View Course</a>
      </div>
    </div>`;
    
  container.innerHTML += card;
});

});

const detailContainer = document.getElementById("courseDetailContainer");
const detailImage = document.getElementById("detailImage");
const detailTitle = document.getElementById("detailTitle");
const detailInstructor = document.getElementById("detailInstructor");
const detailLevel = document.getElementById("detailLevel");
const detailDuration = document.getElementById("detailDuration");
const detailRating = document.getElementById("detailRating");
const detailDescription = document.getElementById("detailDescription");
const detailSyllabus = document.getElementById("detailSyllabus");
const backBtn = document.getElementById("backBtn");
console.log(detailContainer);




// Show course detail
container.addEventListener("click", e => {
  if (e.target.classList.contains("btn-course")) {
    const courseName = e.target.dataset.course;
    const details = courseDetails[courseName];
    if (!details) return;

    detailImage.src = details.image;
    detailTitle.textContent = courseName;
    detailInstructor.textContent = `Instructor: ${details.instructor}`;
    detailLevel.textContent = `Level: ${details.level}`;
    detailDuration.textContent = `Duration: ${details.duration}`;
    detailRating.textContent = details.rating;
    detailDescription.textContent = details.description;

    // Render syllabus
    detailSyllabus.innerHTML = "";
    details.syllabus.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      detailSyllabus.appendChild(li);
    });

    container.style.display = "none";
    detailContainer.style.display = "block";
  }
});

// Back button
backBtn.addEventListener("click", () => {
  detailContainer.style.display = "none";
  container.style.display = "flex";
});
