import React from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
    bullets: string[];
    logo: string;
    logoAlt?: string;
    githubLink?: string; // Add this line
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title, description, imageUrl, link, bullets, logo, logoAlt, githubLink // Add githubLink here
}) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full h-[200px] object-cover" src={imageUrl} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                
                <p className="text-gray-700 text-base">{description}</p>
                <ul className="list-disc ml-5 mt-2">
                    {bullets.map((bullet, index) => (
                        <li key={index} className="text-gray-700 text-sm">
                            {bullet}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="px-6 pt-4 pb-2">
                <a href={link} target="_blank" className="text-blue-500 hover:text-blue-800">
                    View Project
                    {link.startsWith('http') && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    )}
                </a>
            </div>
            <div className="flex items-center mb-2 pl-[15px]">
                {/* GitHub Icon */}
                {githubLink && (
                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="ml-2 text-gray-700 hover:text-black">
                        <svg className="h-6 w-6 inline-block" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                    </a>
                )}
            </div>
            <br />
        </div>
    );
};

export default ProjectCard;