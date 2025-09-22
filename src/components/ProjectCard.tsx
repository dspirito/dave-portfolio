import React from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
    bullets: string[]; // Add this new prop
    logo: string;
    logoAlt?: string; // Optional alt text for the logo
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, link, bullets, logo, logoAlt }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full h-[200px] object-cover" src={imageUrl} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <div className="flex items-center mb-2">
                    <svg 
                        className="h-8 w-8 mr-2"
                        dangerouslySetInnerHTML={{ __html: logo }}
                    />
                </div>
                <p className="text-gray-700 text-base">{description}</p>
                {/* Add bullets section */}
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
        </div>
    );
};

export default ProjectCard;