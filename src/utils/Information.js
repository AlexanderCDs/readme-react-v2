/** 
* @author: Alexander Chi
* @description:
* @date: 28/Junio/2021
**/
import { Home } from '../views/componets/Home';
import { Projects } from '../views/componets/Projects';
import { AboutMe } from '../views/componets/AboutMe';
import { Contact } from '../views/componets/Contact';
import { Links } from '../views/componets/Links';

export const description = {
    name: "alexandercds",
    main: "Developer frontend y backend lo que muchos conocen como Developer Fullstack con más de 3 años de experiencia en el mundo del desarrollo web." ,
    sub: "Me gusta hacer sitios webs como por ejemplo este sitio el cual está construido con React."
};

export const routes = [
    {
        name: 'Tiktok',
        icon: './svg/tiktok-icon.svg',
        url: 'https://www.tiktok.com/@alexandercds?',
        userName: 'alexandercds',
    },
    {
        name: 'YouTube',
        icon: './svg/youtube-icon.svg',
        url: 'https://www.youtube.com/channel/UCmXXKj2lTr8J1zh3KCTj2XQ?sub_confirmation=1',
        userName: 'Alexander CDs',
    },
    {
        name: 'Github',
        icon: './svg/github-icon.svg',
        url: 'https://github.com/AlexanderCDs',
        userName: 'AlexanderCDs',
    }, 
    {
        name: 'Instagram',
        icon: './svg/instagram-icon.svg',
        url: 'https://www.instagram.com/alexandercds.cs/?hl=es-la',
        userName: 'alexander_cd',
    },
    
];

export const moreRoutes = [ 
    {
        name: 'Twitch',
        icon: './svg/twitch-purple-icon.svg',
        url: 'https://www.twitch.tv/arthurreset',
        userName: 'ArthurReset',
        isNew: true,
    }, 
    {
        name: 'Facebook',
        icon: './svg/facebook-icon.svg',
        url: 'https://www.facebook.com/alexandercds.cs',
        userName: 'Alexandercds.cs',
        isNew: true,
    },
    {
        name: 'Discord',
        icon: './svg/discord-icon.svg',
        url: 'https://discord.gg/XBE59Ws4pA',
        userName: 'CD Devs',
        isNew: true,
    },
];

export const projects = [
    {
        key: "miel-roche",
        img: "miel-roche.jpg",
        description: "Sitio web con WordPress y elementor",
        url: 'https://www.mielroche.com.mx/',
    },
    {
        key: "alexandercds",
        img: "alexandercds.jpg",
        description: "Sitio web con ReactJS",
        url: 'https://alexandercd.herokuapp.com/',
    },
    {
        key: "alexandercd-v1",
        img: "background.jpg",
        description: "Desarrollador frontend y backend lo que muchos conocen como",
    },
    {
        key: "alexandercd-v21",
        img: "background.jpg",
        description: "Desarrollador frontend y backend lo que muchos conocen como",
    },
    {
        key: "miel-roche1",
        img: "background.jpg",
        description: "Desarrollador frontend y backend lo que muchos conocen como",
    }, 
];

export let navigations = [
    {
        key: 'home', 
        name: 'Home',  
        component: <Home description={description}/>
    },
    {
        key: 'about-me',
        name: 'Sobre mí', 
        component: <AboutMe description={description} />  
    },
    {
        key: 'routes',
        name: 'Links', 
        component: <Links routes={routes} moreRoutes={moreRoutes} description={description}/>
    },
    {
        key: 'projects',
        name: 'Proyectos',  
        component: <Projects projects = {projects}/>
    },
    {
        key: 'contact',
        name: 'Contacto',   
        component: <Contact/>
    },
    /*{
        key: 'language',
        name: 'Language', 
        items: [
            {
                key: 'es',
                name: 'Español', 
                active: true
            },
            {
                key: 'en',
                name: 'Ingles', 
                active: true
            }
        ]
    },*/
];

