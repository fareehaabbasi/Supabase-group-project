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

const container = document.getElementById("courseContainer");

let courseIndex = 1;

courseGroups.forEach((group) => {
  container.innerHTML += `<div class='col-12'><h3 class='section-heading'>${group.title}</h3></div>`;

group.items.forEach((course) => {

  const imageSrc = picsOfCourses[course]; // <-- pick correct image
console.log(imageSrc);

  const card = `
    <div class="col-lg-6 col-md-6 col-sm-12">
      <div class="course-card">
        <img class="course-image" src="${imageSrc}">
        <div class="course-body">
          <h5 class="fw-bold">${course}</h5>
          <p class="small mb-1">Instructor: John Doe</p>
          <p class="small mb-2">Level: Beginner • Duration: 6 Weeks</p>
          <span style="color: gold;">★★★★★</span>
        </div>
        <a class="btn btn-course">View Course</a>
      </div>
    </div>`;
    
  container.innerHTML += card;
});

});
