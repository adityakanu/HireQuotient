import { useEffect, useState } from 'react';
import EasyAssess from './product/EasyAssess';
import EasyInteview from './product/EasyInterview';
import EasySources from './product/EasySources';
import JD from './product/JD';
import ROI from './product/ROI';

const Products = () => {
    const sections = [
        { id: 1, component: <ROI />, label: 'ROI' },
        { id: 2, component: <JD />, label: 'JD' },
        { id: 3, component: <EasySources />, label: 'Easy Sources' },
        { id: 4, component: <EasyAssess />, label: 'Easy Assess' },
        { id: 5, component: <EasyInteview />, label: 'Easy Inteview' },
    ];

    const [activeSection, setActiveSection] = useState(0);

    const handleButtonClick = (index) => {
        setActiveSection(index);
    };

    useEffect(() => {
        // Set up a timer for automatic rotation every 5 seconds
        const timer = setInterval(() => {
            setActiveSection((prevIndex) => (prevIndex + 1) % sections.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [sections.length]);

    return (
        <div className="flex flex-col items-center space-y-20">
            <h1 className="text-2xl font-bold md:text-3xl lg:text-5xl font-plus-jakarta-sans">
                We&apos;ve got your hiring journey covered
            </h1>
            <div className="relative mx-40 transition-all">
                {sections.map((section, index) => (
                    <div
                        key={section.id}
                        className={`inset-x-0 mx-auto bg-gray-100 rounded-md ${
                            index === activeSection ? 'block' : 'hidden'
                        }`}
                    >
                        {section.component}
                    </div>
                ))}
            </div>
            <div className="inset-x-0 flex justify-center space-x-2 transition-all bottom-4">
                {sections.map((section, index) => (
                    <button
                        key={section.id}
                        onClick={() => handleButtonClick(index)}
                        className={`px-4 py-1 transition-all rounded-md text-secondary  ${
                            index === activeSection
                                ? 'bg-gray-800'
                                : 'bg-primary'
                        }`}
                    >
                        {section.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Products;
