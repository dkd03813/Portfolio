import { useEffect, useState } from "react";
// for work_images
import work1 from "../assets/images/work_images/tuneTycoon.png";
import work2 from "../assets/images/work_images/ReelGoodFlicksAlt.png";
import soundVaultImage from "../assets/images/work_images/soundVaultImage.png";
import memoryCardGameImage from "../assets/images/work_images/memoryCardGameImage.png";
import items from "../assets/images/work_images/items.png";

// works small images
import workSmall1 from "../assets/images/work_images/tuneTycoonalt.png";
import workSmall2 from "../assets/images/work_images/ReelGoodFlicks.png";
import soundVaultSmallImage from "../assets/images/work_images/soundVaultSmallImage.png";

import cart from "../assets/images/work_images/cart.png";



import img1 from "../assets/images/slider/brand-1.png";
import img2 from "../assets/images/slider/brand-2.png";
import img3 from "../assets/images/slider/brand-3.png";
import img4 from "../assets/images/slider/brand-4.png";
import img5 from "../assets/images/slider/brand-5.png";
//  icon use as img here
import icon from "../assets/images/icons/icon-1.svg";
import icon1 from "../assets/images/icons/icon-2.svg";
import icon2 from "../assets/images/icons/icon-3.svg";
import icon3 from "../assets/images/icons/icon-4.svg";
import icon4 from "../assets/images/icons/icon-5.svg";
import icon5 from "../assets/images/icons/icon-6.svg";
// contact image
import iconPhone from "../assets/images/contact/phone-call 1.png";
import iconEmail from "../assets/images/contact/email 1.png";
import iconMap from "../assets/images/contact/map 1.png";
import { CgNotes } from "react-icons/cg";
import { FaBlogger, FaRegUser} from "react-icons/fa";
import { VscDebugAll, VscGraphLine} from "react-icons/vsc";
import { AiOutlineHome } from "react-icons/ai";
import { FiCodesandbox } from "react-icons/fi";
import { RiContactsBookLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const iconDebug = <VscDebugAll />

const AllData = () => {
  const [check, setCheck] = useState(false);
  const [local, setLocal] = useState(localStorage.getItem("theme"));
  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  // dark and light theme controls
  useEffect(() => {
    const themeValue = localStorage?.getItem("theme");

    if (!themeValue) {
      setCheck(false);
      localStorage.setItem("theme", "light");
    } else {
      themeValue === "dark" && setCheck(true);
      themeValue === "light" && setCheck(false);
    }

    localStorage?.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, []);

  // Create and light theme function
  const handleTheme = (value) => {
    if (value === "light") {
      setCheck(false);
      localStorage.setItem("theme", "light");
      setLocal("light");
    } else {
      setCheck(true);
      localStorage.setItem("theme", "dark");
      setLocal("dark");
    }
    localStorage?.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  };

  // fillter portfilo data
  const handleData = (text) => {
    if (text === "All") {
      setData(workItems);
    } else {
      const findData = workItems.filter((item) => item.tag === text);
      setData(findData);
    }
  };

  // find items for portfilo  modal open
  const handleModelData = (id) => {
    const find = workItems.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  // find items for Blogs  modal open
  const handleBlogsData = (id) => {
    const find = blogsData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  // Active navlinks function
  function NavLink({
    to,
    className,
    activeClassName,
    inactiveClassName,
    ...rest
  }) {
    let location = useLocation();
    let isActive = location.pathname === to;
    let allClassNames =
      className + (isActive ? `${activeClassName}` : `${inactiveClassName}`);
    return <Link className={allClassNames} to={to} {...rest} />;
  }

  // Elements for protfilo section
  const workItems = [
    {
      id: "1",
      tag: "Web Development",
      title: "Tune Tycoon",
      img: work1,
      imgSmall: workSmall1,
      bg: "#FFF0F0",
      client: "Personal Project",
      languages: "JavaScript, HTML, CSS",
      link: "https://dkd03813.github.io/HigherOrLowerGame/",
      linkText: "Play Tune Tycoon",
      description:
        "Tune Tycoon is a fun and interactive game where users get to test their knowledge of music popularity across different time periods. Leveraging the Genius API, the game presents users with two options and challenges them to select the one that was more popular during a user-selected time period. Built using JavaScript for game logic, HTML for structure, and CSS for styling, this project showcases my ability to create engaging web applications and utilize third-party APIs effectively. Navigate through the link to immerse yourself in the world of music while challenging your intuition!",
    },
    {
      id: "2",
      tag: "Web Development",
      title: "Reel Good Flicks",
      img: work2,
      imgSmall: workSmall2,
      bg: "#FFF3FC",
      client: "Personal Project",
      languages: "HTML, CSS, JavaScript, Bootstrap",
      link: "https://dkd03813.github.io/ReelGoodFlicks/",
      linkText: "Explore Reel Good Flicks",
      description:
        "Reel Good Flicks is a movie discovery platform designed for film enthusiasts to search, explore, and favorite their must-watch movies. Utilizing the IMDB API, users can search for their favorite movies and add them to a 'Watch Later' page for easy access. The project demonstrates my proficiency in API calls, Bootstrap and CSS styling, and the creation of dynamic, responsive user interfaces. Event listeners on buttons and search fields allow for intricate manipulation of the API URL, filtering results based on specific user input. Dive into the world of cinema and explore your next favorite flick with Reel Good Flicks!",
    }
    ,
    {
      id: "3",
      tag: "Backend Project",
      title: "SoundVault - Your Melodic Oasis",
      img: soundVaultSmallImage,
      imgSmall: soundVaultImage,
      bg: "#FFF0F0",
      client: "Personal Project",
      languages: "Node.js, Express, EJS, PostgreSQL, Sequelize",
      link: "https://soundvault-uw41.onrender.com/",
      linkText: "Explore SoundVault",
      description:
        "Embark on a harmonious journey with SoundVault, where technology and music fuse into an enchanting symphony. As a backend marvel, SoundVault orchestrates a melody of Node.js, Express, EJS, PostgreSQL, and Sequelize, creating a user-centric sanctuary of musical exploration. Whether crafting personalized playlists, diving into musical gems, or relishing the thrill of data scraping, SoundVault is an ode to the power of innovation. Elevate your music experience, embrace the joy of discovery, and tune into the heartbeat of technology with SoundVault.",
    },
    {
      id: "4",
      tag: "Frontend Project",
      title: "React Memory Card Game - Unveil the Pairs",
      img: memoryCardGameImage,
      imgSmall: memoryCardGameImage,
      bg: "#F5F7FF",
      client: "Personal Project",
      languages: "React.js, HTML, CSS, JavaScript, Bootstrap, Vite",
      link: "https://memory-card-game-h0qw.onrender.com/",
      linkText: "Experience the Game",
      description:
        "Engage your mind and embrace the challenge with the React Memory Card Game - a captivating fusion of technology and memory mastery. With the prowess of React.js, HTML, CSS, and JavaScript, this project breathes life into the timeless classic of memory card games. Immerse yourself in a world of vibrant icons and intriguing card flips, where pairs are unveiled through strategic flips and keen memory. Leverage the magic of React components, event listeners, and hooks as you seek to conquer the 16-card battlefield. Revel in the thrill of victory as you match pairs and solidify your status as the memory maestro. The React Memory Card Game is more than entertainment; it's a showcase of the creativity and skill behind modern frontend development, enriched by the versatility of Bootstrap for stunning visual appeal.",
    },
    {
      id: "5",
      tag: "Frontend Project",
      title: "E-Commerce Site - Seamlessly Navigating Shopping",
      img: items,
      imgSmall: cart,
      bg: "#EAF4FF",
      client: "Your Name",
      languages: "React, Vite, HTML, CSS, React Router Dom",
      link: "https://e-commerce-site-4v74.onrender.com",
      linkText: "Explore the E-Commerce Site",
      description:
        "Unveil a revolutionary shopping experience with the E-Commerce Site – an extraordinary marketplace meticulously crafted with React, Vite, HTML, and CSS. Distinguished by the power of React Router Dom, this project signifies the pinnacle of user-centric design, elevating interactions through the magic of client-side routing. Every click becomes an adventure, updating URLs and seamlessly navigating between pages, all without the need for server requests.",
    }
    ,
    
  ];
  const [data, setData] = useState(workItems);

  // Elements for Blogs section
  const blogsData = [
    {
      id: "1",
      img: "image_path_here", // replace this with the path to your relevant image
      imgSmall: "small_image_path_here", // replace this with the path to your relevant small image
      date: "Start Date", // replace this with the start date of your learning journey or project
      category: "Self-Guided Learning",
      title: "Embarking on a Self-Guided Learning Journey: React, TypeScript, Node.js, and MongoDB",
      description: "Join me as I share my experiences and insights from diving into self-guided learning courses on Udemy. I'll be exploring React, TypeScript, Node.js, and MongoDB - follow along as I document my journey, the challenges I encounter, and the solutions I discover.",
      bg: "background_color_here", // replace this with the relevant background color
    },
    {
      id: "2",
      img: "image_path_here", // replace this with the path to your relevant image
      imgSmall: "small_image_path_here", // replace this with the path to your relevant small image
      date: "Start Date", // replace this with the start date of your learning journey or project
      category: "Web Development",
      title: "Building a Web Presence for a Local Landscaping Business",
      description: "I'm excited to start on a new project: creating a web page for a friend's landscaping business. The website will showcase his work and include a form for potential customers to reach out. Join me as I document the design and development process, from initial sketches to final deployment.",
      bg: "background_color_here", // replace this with the relevant background color
    },
    // ... rest of your blog posts
  ];

  // Menu items for Homepage One
  const menuItem = [
    {
      id: "01",
      name: "Home",
      link: "/home/homePage",
      icon: <AiOutlineHome />,
    },
    {
      id: "02",
      name: "About",
      link: "/home/about",
      icon: <FaRegUser />,
    },
    {
      id: "06",
      name: "Resume",
      link: "/home/resume",
      icon: <CgNotes />,
    },
    {
      id: "03",
      name: "Works",
      link: "/home/works",
      icon: <FiCodesandbox />,
    },
    
    {
      id: "05",
      name: "Contact",
      link: "/home/contact",
      icon: <RiContactsBookLine />,
    },
  ];

  // Menu items for Homepage Two
  const menuItemTwo = [
    {
      id: "01",
      name: "About",
      link: "/homeTwo/about",
      icon: <FaRegUser />,
    },
    {
      id: "02",
      name: "Resume",
      link: "/homeTwo/resume",
      icon: <CgNotes />,
    },
    {
      id: "03",
      name: "Works",
      link: "/homeTwo/works",
      icon: <FiCodesandbox />,
    },
    {
      id: "04",
      name: "Blogs",
      link: "/homeTwo/blogs",
      icon: <FaBlogger />,
    },
    {
      id: "05",
      name: "Contact",
      link: "/homeTwo/contact",
      icon: <RiContactsBookLine />,
    },
  ];

  // Slider image for Clients
  const sliderImg = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img1,
    img2,
    img3,
    img4,
    img5,
  ];

  // serviceArray items for about page
  const serviceArray = [
    {
      id: "1",
      icon: icon5,
      title: "Frontend Development",
      des: "Developing engaging and interactive web interfaces using HTML, CSS, and JavaScript.",
      color: "#D566FF",
      bg: "#FCF4FF",
    },
    {
      id: "2",
      icon: icon5,
      title: "Backend Development",
      des: "Designing and implementing robust backend systems using Node.js and Express.js.",
      color: "#DDA10C",
      bg: "#FEFAF0",
    },
    {
      id: "3",
      icon: icon4,
      title: "Database Management",
      des: "Managing databases using both SQL and NoSQL technologies like PostgreSQL and MongoDB.",
      color: "#8774FF",
      bg: "#FCF4FF",
    },
    {
      id: "4",
      icon: () => <VscDebugAll className="w-10 h-10 object-contain block" />,
      title: "Testing & Debugging",
      des: "Performing rigorous testing to ensure software functionality and reliability.",
      color: "#FF6080",
      bg: "#FFF4F4",
    },
    {
      id: "5",
      icon: icon4,
      title: "Agile/Scrum Methodology",
      des: "Working in agile environments and experienced in the Scrum approach.",
      color: "#FF75D8",
      bg: "#FFF0F8",
    },
    {
      id: "6",
      icon: icon2,
      title: "Microsoft Suite Proficiency",
      des: "Skilled in Microsoft Suite, including advanced Excel functions for data analysis.",
      color: "#269FFF",
      bg: "#F3FAFF",
    },
  ];

  // educationArray items for Resume page
  const educationArray = [
    {
      id: 1,
      date: "August 2020 - May 2022",
      title: "BBA Management Information Systems, Finance ",
      place: "University of Georgia, Athens, GA",
      bg: "#FFF4F4",
    },

    {
      id: 2,
      date: "January 2023 - September 2023",
      title: "Digital Crafts",
      place: "Atlanta, GA ",
      bg: "#FFF1FB",
    },
  ];
  // experiencesArray items for Resume page
  const experiencesArray = [
    {
      id: 1,
      date: "July 2022 - July 2023",
      title: "Technology Consultant",
      place: "Atlanta, GA",
      bg: "#EEF5FA",
    },

    {
      id: 2,
      date: "August 2021 - May 2022",
      title: "Consultant",
      place: "University of Georgia",
      bg: "#F2F4FF",
    },
  ];
  // awardsArray items for Resume page
  const awardsArray = [
    // {
    //   id: 1,
    //   date: "2015-2017",
    //   title: "  Graphic Designer",
    //   place: "Web Graphy, Los Angeles, CA",
    //   bg: "#FCF4FF",
    // },

    // {
    //   id: 2,
    //   date: "2014 - 2015",
    //   title: "Jr. Web Developer",
    //   place: "Creative Gigs.",
    //   bg: "#FCF9F2",
    // },

    // {
    //   id: 3,
    //   date: "2015-2017",
    //   title: "Best Freelancer",
    //   place: "Fiver & Upwork Level 2 & Top Rated",
    //   bg: "#FCF4FF",
    // },
  ];

  // Working Skills items for Resume page
  const lineArray = [
    {
      id: "01",
      color: "#FF6464",
      name: "Programming Languages",
      skill: "JavaScript, HTML/CSS, Bootstrap.js, Sequelize.js, Express.js, Node.js",
      number: "100",
    },
    {
      id: "02",
      color: "#9272D4",
      name: "Technologies",
      skill: "React.js, Git/Github, Visual Studio Code, PostgreSQL, MongoDB",
      number: "100",
    },
    {
      id: "03",
      color: "#5185D4",
      name: "Microsoft Excel",
      skill:"Pivot Tables, Charts, Graphs, Conditional Formatting",
      number: "100",
    },
   
  ];

  // Personal information for contact pages
  const contactArray = [
    {
      id: "01",
      icon: iconPhone,
      title: "Phone ",
      item1: "(770)-899-1329",
      item2: "(770)-899-1329",
      bg: "#FCF4FF",
    },
    {
      id: "02",
      icon: iconEmail,
      title: "Email ",
      item1: "damiandiaz0509@gmail.com",
      item2: "damiandiaz0509@gmail.com",
      bg: "#EEFBFF",
    },
    {
      id: "03",
      icon: iconMap,
      title: "Address ",
      item1: "1734 Northwoods Drive",
      item2: "Marietta, GA",
      bg: "#F2F4FF",
    },
  ];

  return {
    handleTheme,
    check,
    local,
    handleData,
    data,
    singleData,
    handleModelData,
    isOpen,
    setIsOpen,
    blogsData,
    handleBlogsData,
    menuItem,
    NavLink,
    menuItemTwo,
    serviceArray,
    sliderImg,
    educationArray,
    experiencesArray,
    awardsArray,
    lineArray,
    contactArray,
  };
};

export default AllData;
