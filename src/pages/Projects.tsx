import React from 'react';
import ProjectCard from '../components/ProjectCard';
import sigOpticsImage from '../sig-optics.png';
import reactevrebate from '../react-ev-rebate.png';
import deepfakearmyImage from '../deep-fake-army.png';

interface Project {
    title: string;
    description: string;
    bullets: string[];
    link: string;
    imageUrl: string;
    logo?: React.ReactElement;
    logoAlt?: string;
    githubLink?: string; // Add this line
}

const projects: Project[] = [
    {
        title: 'DeepFakeArmy.com | AI detection tool with user commenting and voting',
        description: 'Full-stack React web application that allows users to upload videos and images to check for deepfake content using AI detection algorithms. Users can comment and vote on the authenticity of the media.',
        bullets: ['Firebase Studio', 'Gemini', 'React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'AI/ML Integration'],
        link: 'https://deepfakearmy.com',
        imageUrl: deepfakearmyImage,
    },
    {
        title: 'SIGoptics.com | eCommerce Magento website store view',
        description: 'Project Management of SIG SAUER Magento store view for SIGOptics.com, an eCommerce website specializing in optical products.',
        bullets: ['Magento 2.4', 'Adobe Commerce', 'Project Management', 'eCommerce', 'PHP', 'Javascript', 'Full-stack Development'],
        link: 'https://sigoptics.com',
        imageUrl: sigOpticsImage,
    },
    {
        title: 'Wallbox EVSE Rebate Search Tool',
        description: 'A real-time search tool built for Wallbox.com allowing customers to discover Electric Vehicle Supply Equipment incentive programs available in their state. The search tool implements the NREL API to fetch up-to-date rebate information from the U.S. Dept. of Energy.',
        bullets: ['Javascript', 'React', 'API', 'HTML5', 'CSS3', 'TailwindCSS'],
        link: 'https://react-evrebate.vercel.app',
        imageUrl: reactevrebate,
        logo: React.createElement('svg', {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 20 35",
            className: "w-6 h-6",
            children: React.createElement('path', {
                fill: "#202124",
                fillRule: "evenodd",
                d: "M19.66 13.426V8.311C19.66 2.665 14.645 0 9.828 0s-9.8 2.697-9.8 8.302c0 .5-.003.631-.007.804-.009.33-.021.813-.021 4.32h4.694v6.92c0 .85.378 1.592 1.468 1.592 1.094 0 1.467-.737 1.467-1.591v-6.921h4.6v6.92c0 .85.378 1.592 1.472 1.592 1.095 0 1.467-.737 1.467-1.591v-6.921zM9.88 25.279c1.004 1.13 2.49 1.918 3.953 1.918 1.807 0 3.51-.7 4.62-1.918h1.202c0 5.367-4.402 9.721-9.827 9.721C4.402 35 0 30.646 0 25.28h1.283c1.1 1.222 2.808 1.917 4.615 1.917 1.457 0 2.948-.788 3.953-1.918z",
                clipRule: "evenodd"
            })
        }),
        logoAlt: 'WBX logo',
        githubLink: 'https://github.com/dspirito/react-evrebate'
    }
];

const Projects: React.FC = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;