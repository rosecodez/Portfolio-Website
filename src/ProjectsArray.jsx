import odinbook from "./images/odin-book.png"
import fileuploader from "./images/file-uploader.png"
import ejslogo from "./images/ejs_logo.png"
import battleship from "./images/battleship.png"

const projectsArray = [
    {
        index: 0,
        name: 'Odin Book',
        description1: "Odin-Book is a full-stack social media application where users can post, follow, comment, and explore other profiles. It includes user authentication and a visitor mode for browsing without signing in.",
        tech: [
            {
                index: 0,
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                alt: 'React',
                title: 'React',
            },
            {
                index: 1,
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                alt: 'JavaScript',
                title: 'JavaSript',
            },
            {
                index: 2,
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
                alt: 'Node.js',
                title: 'Node.js',
            },
            {
                index: 3,
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
                alt: 'Express',
                title: 'Express',
            },
            {
                index: 4,
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
                alt: 'PostgreSQL',
                title: 'PostgreSQL',
            },
            {
                index: 5,
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
                alt: 'Prisma',
                title: 'Prisma',
            },
          
        ],
        src: odinbook,
        alt: 'odinbook',
        live_link: 'https://odin-book-frontend.onrender.com/',
        repo_link: 'https://github.com/rosecodez/Odin-Book',
    },
    
    {
        index: 1,
        name: 'File Uploader',
        description1: "File-Uploader is a full stack app that enables users to create, organize, and manage files and folders in a hierarchical structure.",
        tech: [
            {
                index: 0,
                src: ejslogo,
                alt: 'EJS',
                title: 'EJS',
            },
            {
                index: 1,
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                alt: 'JavaScript',
                title: 'JavaSript',
            },
            {
                index: 2,
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
                alt: 'Node.js',
                title: 'Node.js',
            },
            {
                index: 3,
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
                alt: 'Express',
                title: 'Express',
            },
            {
                index: 4,
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
                alt: 'PostgreSQL',
                title: 'PostgreSQL',
            },
            {
                index: 5,
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
                alt: 'Prisma',
                title: 'Prisma',
            },
          
        ],
        src: fileuploader,
        alt: 'File Uploader',
        live_link: 'https://file-uploader-xoxo.onrender.com/',
        repo_link: 'https://github.com/rosecodez/File-Uploader',
    },

    {
        index: 2,
        name: 'Battleship',
        description1: "This project is a single-player version of the classic Battleship game, where the player faces off against an AI. The player’s fleet of warships is placed on a grid, and the AI's fleet is hidden. Players take turns firing shots at the opponent's grid, with the objective being to destroy the opposing fleet before their own is sunk.",
        tech: [
            {
                index: 0,
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
                alt: 'HTML5',
                title: 'HTML5',
            },
            {
                index: 1,
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
                alt: 'CSS3',
                title: 'CSS3',
            },
            {
                index: 2,
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                alt: 'JavaScript',
                title: 'JavaSript',
            },

            {
                index: 3,
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg", 
                alt: 'Jest',
                title: 'Jest',
            },
            {
                index: 4,
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg",
                alt: 'Webpack',
                title: 'Webpack',
            },

          
        ],
        src: battleship,
        alt: 'Battleship',
        live_link: 'https://rosecodez.github.io/Battleship/',
        repo_link: 'https://github.com/rosecodez/Battleship',
    }
];

export default projectsArray;
