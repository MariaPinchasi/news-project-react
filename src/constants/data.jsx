import { FaYoutube, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import ent1 from '../assets/articles/ent1.jpg'
import ent2 from '../assets/articles/ent2.jpg'
import sports1 from '../assets/articles/sports1.jpg'
import tech1 from '../assets/articles/tech1.jpg'
import tech2 from '../assets/articles/tech2.jpg'

export const social = [
    {
        id: 1,
        url: 'https://www.facebook.com',
        icon: <FaFacebook />,
    },
    {
        id: 2,
        url: 'https://www.twitter.com',
        icon: <FaTwitter />,
    },
    {
        id: 3,
        url: 'https://www.instagram.com',
        icon: <FaInstagram />,
    },
    {
        id: 4,
        url: 'https://www.youtube.com',
        icon: <FaYoutube />,
    },
];
export const links = [
    {
        id: 1,
        url: '/',
        text: 'Home',
    },
    {
        id: 2,
        url: '/about',
        text: 'About',
    },
];

export const newsArticles = [
    {
        id: 1,
        articleClass: 'card',
        imgSrc: ent1,
        categoryClass: 'category category-ent',
        category: 'Entertainment',
        url: '/article',
        headerText: 'Lorem ipsum dolor sit amet',
        pText: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil beatae ea autem. Doloribus.',
    },
    {
        id: 2,
        articleClass: 'card bg-dark',
        imgSrc: '',
        categoryClass: 'category category-sports',
        category: 'Sports',
        url: '/article',
        headerText: 'Lorem ipsum dolor sit amet',
        pText: ' Lorem ipsum dolor sit  eius ducimus optio veniam sit nihil beatae ea autem. Doloribus.',
    },
    {
        id: 3,
        articleClass: 'card',
        imgSrc: tech1,
        categoryClass: 'category category-tech',
        category: 'Technology',
        url: '/article',
        headerText: 'Lorem ipsum dolor sit amet',
        pText: ' Lorem ipsum dolor sit  eius ducimus optio veniam sit nihil beatae ea autem. Doloribus.',
    },
    {
        id: 4,
        articleClass: 'card',
        imgSrc: sports1,
        categoryClass: 'category category-sports',
        category: 'Sports',
        url: '/article',
        headerText: 'Lorem ipsum dolor sit amet',
        pText: ' Lorem ipsum dolor sit  eius ducimus optio veniam sit nihil beatae ea autem. Doloribus.',
    },
    {
        id: 5,
        articleClass: 'card',
        imgSrc: tech2,
        categoryClass: 'category category-tech',
        category: 'Technology',
        url: '/article',
        headerText: 'Lorem ipsum dolor sit amet',
        pText: ' Lorem ipsum dolor sit  eius ducimus optio veniam sit nihil beatae ea autem. Doloribus.',
    },
    {
        id: 6,
        articleClass: 'card bg-primary',
        imgSrc: '',
        categoryClass: 'category category-sports',
        category: 'Sports',
        url: '/article',
        headerText: 'Lorem ipsum dolor sit amet',
        pText: ' Lorem ipsum dolor sit  eius ducimus optio veniam sit nihil beatae ea autem. Doloribus.',
    },
    {
        id: 7,
        articleClass: 'card',
        imgSrc: ent2,
        categoryClass: 'category category-ent',
        category: 'Entertainment',
        url: '/article',
        headerText: 'Lorem ipsum dolor sit amet',
        pText: ' Lorem ipsum dolor sit  eius ducimus optio veniam sit nihil beatae ea autem. Doloribus.',
    },

];

export const siteLinks = [
    {
        id: 1,
        url: '#',
        text: 'Help & Support'
    },
    {
        id: 2,
        url: '#',
        text: 'Privacy Policy'
    },
    {
        id: 3,
        url: '#',
        text: 'About Us'
    },
    {
        id: 4,
        url: '#',
        text: 'Contact'
    },
]
