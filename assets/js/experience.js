AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "FINASTRA",
    cardImage: "assets/images/experience-page/FINASTRA.jpeg",
    place: "Associate Software Engineer",
    time: "(June 2025 - Present)",
    desp: "<li>Working as a Java Backend Developer on Global PAYplus (GPP)—Finastra’s flagship payments hub.</li><li>I dive into complex Java architectures, microservices, and robust APIs to ensure high throughput, security, and strict data validation (like navigating the global ISO 20022 messaging standards).</li>",
  },
  {
    title: "ARCADE",
    cardImage: "assets/images/experience-page/ARCADE.png",
    place: "Google Aracde Program",
    time: "(Dec,2023 - Present)",
    desp: "<li>Participated in the certified Google Arcade program, where I developed skills in game design and earned various skill badges. </li><li>Gained hands-on experience in collaboration, problem-solving, and creativity through community engagement and project work. This experience deepened my understanding of the IT industry and enhanced my ability to work effectively in team settings.</li>",
  },
  {
    title: "SAP Technology INTERN",
    cardImage: "assets/images/experience-page/ECL.png",
    place: "Eastern Coalfield Limited",
    time: "(June, 2024 - July, 2024)",
    desp: "<li>During my internship at Eastern Coal Field Limited, I streamlined data integration across SAP modules, generated analytical reports to enhance decision-making, and conducted audits to ensure data quality and accuracy.</li> <li>Additionally, I collaborated with cross-functional teams to optimize workflows and customize SAP processes for our specific needs. My work aimed to improve operational efficiency from raw material purchasing to production.</li>",
  },
 
  {
    title: "AWS Intern",
    cardImage: "assets/images/experience-page/AWS.png",
    place: "InnovateOps Solutions Pvt. Ltd",
    time: "(Mar, 24 - Apr, 24)",
    desp: "<li>During my internship at AWS Services, I configured and managed Amazon EC2 instances to support scalable applications, optimized resource utilization through Auto Scaling based on traffic demands, implemented AWS S3 for secure and efficient data storage, and utilized AWS SNS to facilitate automated messaging and notifications across integrated services, enhancing overall system responsiveness.</li>",
  },
  {
    title: "Backend Intern",
    cardImage: "assets/images/experience-page/VERZEO.jpeg",
    place: "VERZEO",
    time: "(Aug, 22 - Sep, 22)",
    desp: "<li>Proficient in MongoDB, with hands-on experience in designing and optimizing document-based databases using collections and indexes to enhance query performance and data retrieval efficiency.</li><li>Skilled in implementing CRUD operations, leveraging aggregation pipelines, and using features like sharding and replication for high availability and scalability. Experienced in integrating MongoDB with Node.js and Express.js frameworks</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

// const volunteership = document.querySelector(".volunteership");
// const volunteershipcards = [
//   {
//     title: "GirlScript Summer Of Code 2020",
//     cardImage: "assets/images/experience-page/1.jpg",
//     description:
//       "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
//   },
//   {
//     title: "StudentCode-in 2020",
//     cardImage: "assets/images/experience-page/2.jpg",
//     description:
//       "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
//   },
//   {
//     title: "PClub Summer Of Code 2020",
//     cardImage: "assets/images/experience-page/3.jpg",
//     description:
//       "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
//   },
//   {
//     title: "Hakin-Codes",
//     cardImage: "assets/images/experience-page/4.jpg",
//     description:
//       "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
//   },
// ];

// const showCards = () => {
//   let output = "";
//   volunteershipcards.forEach(
//     ({ title, cardImage, description }) =>
//       (output += `        
//       <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
//       <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
//       <div class="content">
//           <h2 class="volunteerTitle">${title}</h2><br>
//           <p class="copy">${description}</p></div>
      
//       </div>
//       `)
//   );
//   volunteership.innerHTML = output;
// };
// document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "NECTF",
    subtitle: "Mentor",
    image: "assets/images/experience-page/NECTF.png",
    desp: "I participated in a hackathon where we were provided with questions and hints. We had to find solutions using the internet, and I ranked in the top 10 in all of India.",
    href: "",
  },
  
  {
    title: "ULHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/ulhacks.png",
    desp: "ULHacks is a 36 hour long hackathon organized with an aim to enable students to create a project which empowers learning.",
    href: "https://ulhacks.com/",
  },
  {
    title: "WaffleHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/wafflehacks.png",
    desp: "WaffleHacks 2021 is an upcoming 48-hour student-organized hackathon with an aim to bring technical solutions to local communities and small businesses.",
    href: "https://wafflehacks.org/",
  },
  {
    title: "Elevate Tech",
    subtitle: "Judge",
    image: "assets/images/experience-page/elevate.png",
    desp: "Elevate Hacks is an upcoming all-female virtual hackathon coming from AUGUST 14th to 15th.",
    href: "https://elevatetech.codes/",
  },
  {
    title: "PitchTeen",
    subtitle: "Judge",
    image: "assets/images/experience-page/pitchteen.png",
    desp: "PitchTeen 2.0 was a tech startup competition for female and non-binary communities in high school and college from all over the world with an aim to create a safe and encouraging place for women to help them explore tech and business fields.",
    href: "https://www.linkedin.com/company/pitchteen/about/",
  },

];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
