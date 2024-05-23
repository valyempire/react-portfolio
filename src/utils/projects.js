import landing_page_img from "../images/Landing Page Project img.png";
import flight_website_img from "../images/flight-project-html-css.png";
import quiz_app_javascript_img from "../images/Quiz App.png";
import weather_app_img from "../images/Weather App.png";
import hangman_img from "../images/hangman.png";
import game_platform_img from "../images/game-platform.png";
import mern_recipes_img from "../images/mern-recipes.png";
import shop_website_img from "../images/shop-website.png";

export const projects = [
  {
    id: 0,
    title: "Landing Page",
    date: "20/07/2022",
    description:
      "I developed the Landing Page project as part of my coursework at SkillBrain School, where I established a solid foundation in HTML and CSS.",
    image: landing_page_img,
    tags: ["HTML", "CSS"],
    category: "html-css",
    github: "https://github.com/valyempire/landing-page-html-css",
    webapp: "https://landing-page-vali.netlify.app/",
  },
  {
    id: 1,
    title: "Flight Website",
    date: "17/05/2024",
    description:
      "This project involves the development of a flight booking website using HTML and CSS. Through this project, I have gained a deeper understanding of how to create and style a professional website, focusing on user experience and the visual aspects of web design.",
    image: flight_website_img,
    tags: ["HTML", "CSS"],
    category: "html-css",
    github: "https://github.com/valyempire/flight-website-html-css",
    webapp: "https://flight-website-vali.netlify.app/",
  },
  {
    id: 2,
    title: "Quiz App",
    date: "17/05/2024",
    description:
      "From creating the Quiz App project with HTML, CSS, and JavaScript, I learned how to structure web applications using HTML to create the app's structure and CSS to style the user interface. I used JavaScript to manipulate the Document Object Model (DOM) and make the interface dynamic, allowing users to interact with the quiz. I managed the application's state, such as the current questions, user score, and remaining time for each question. I learned to integrate external APIs, such as the Open Trivia Database, to fetch quiz questions from various categories and difficulties. I added interactive functionalities by handling user events, such as clicks and answer selections, and implemented loading animations and progress bars to provide visual feedback to users. This project provided valuable hands-on experience in developing interactive and dynamic web applications, solidifying my knowledge in frontend development.",
    image: quiz_app_javascript_img,
    tags: ["HTML", "CSS", "JavaScript"],
    category: "javascript",
    github: "https://github.com/valyempire/quiz-app-javascript",
    webapp: "https://quiz-app-javascript-vali.netlify.app/",
  },

  {
    id: 3,
    title: "Weather App",
    date: "18/05/2024",
    description:
      "This project involved building a weather forecast application. I utilized the OpenWeatherMap API to retrieve real-time weather data and hourly forecasts. The application allows users to input the city name and display the current temperature, weather description, and an hourly forecast for the next 24 hours. For creating the user interface, I utilized HTML and CSS, while JavaScript was used for dynamic functionality. The project helped me understand how to integrate APIs into web applications and work with real-time data to provide users with useful information.",
    image: weather_app_img,
    tags: ["HTML", "CSS", "JavaScript"],
    category: "javascript",
    github: "https://github.com/valyempire/weather-app-js",
    webapp: "https://weather-app-js-vali.netlify.app/",
  },
  {
    id: 4,
    title: "Game Platform",
    date: "",
    description:
      "The Game Platform project is a advanced web application designed to help users explore a variety of video games. This project serves as a practical example to deepen understanding of intermediate React concepts and best practices. This project helped me understand: Filtering and Sorting, Search Functionality, Responsive Design, Reusable Components, State Management, Client-Side Routing, API Integration, and Performance Optimization.",
    image: game_platform_img,
    tags: ["React", "Typescript", "React Router", "React Query", "Zustand"],
    category: "react",
    github: "https://github.com/valyempire/game-platform-react",
    webapp: "https://game-platform-vali.netlify.app/",
  },
  {
    id: 5,
    title: "Hangman",
    date: "20/06/2023",
    description:
      "I developed the Hangman project using React and Styled Components, enhancing my frontend development skills. I learned how to structure and manage state in a React application, apply styles with Styled Components, and create interactivity within the app. The project demonstrates a deep understanding of React and how modern technologies can be integrated to create engaging web experiences.",
    image: hangman_img,
    tags: ["React", "Typescript", "Styled-Components"],
    category: "react",
    github:
      "https://github.com/valyempire/hangman-typescript-styled-components",
    webapp: "https://vali-hangman.netlify.app/",
  },

  {
    id: 6,
    title: "Shopping Website",
    date: "",
    description:
      "This project has been a personal challenge aimed at creating a website with a shopping website that provides users with the ability to access detailed information about each product, allowing them to add it to their wishlist or place it in the shopping cart. Through the completion of this project, I have enhanced my skills in React Router, pagination, constructing an image carousel, product sorting, and implementing search functionality within the page.",
    image: shop_website_img,
    tags: ["React", "Typescript", "Styled-Components"],
    category: "react",
    github: "https://github.com/valyempire/shoping-cart-react-typescript",
    webapp: "https://shopping-website-vali.netlify.app/",
  },
  // {
  //   id: 7,
  //   title: "SmartBrain",
  //   date: "29/06/2023",
  //   description:
  //     "Full-stack React.JS web app that uses a Machine Learning API from Clarifai to identify faces on images. Allows users to create accounts and login to track number of images processed. Using a backend server developed using Node.JS and Express.JS, hosted REST API to handle requests and responses to process tasks (register account, login, detect faces on image).",
  //   image: "",
  //   tags: ["React", "Node.js ", "Express", "PostgreSQL"],
  //   category: "full-stack",
  //   github: "https://github.com/valyempire/smart-brain-app-react",
  //   webapp: "https://rainbow-marigold-47837b.netlify.app/",
  // },
  {
    id: 8,
    title: "Recipes App",
    date: "3/3/2024",
    description:
      "This project is a full-stack MERN-based cooking recipe application, featuring user authentication. Explore the world of culinary delights as you create, delete, and save your favorite recipes with ease.",
    image: mern_recipes_img,
    tags: ["React", "Node.js ", "Express", "MongoDB"],
    category: "full-stack",
    github: "https://github.com/valyempire/mern-recipe-server",
    webapp: "https://github.com/valyempire/mern-recipe-app",
  },
];

export const gitHubTitle = "See the code on my Github profile";

export const liveTitle = "See my project live";
