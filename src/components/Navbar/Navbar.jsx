import { FcNews } from "react-icons/fc";
import logo from '../../assets/logo.webp';
const Navbar = () => {
    return (
        <nav className="flex items-center justify-between p-4 text-black ">
            <ul className="flex items-center space-x-4">
                <img src={logo} alt="Logo" className="md:h-12 sm:h-8 " />
            </ul>
            <ul className="flex items-center space-x-4">
                <li className="relative group hover:drop-shadow-lg ">
                    <div className="flex items-center px-3 py-1 space-x-2 rounded-sm hover:bg-gray-50">
                        Products
                        <svg className="w-3 h-3 -mr-1 text-gray-400 group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                    </div>
                    
                    <div className="absolute hidden p-8 py-3 space-y-3 truncate bg-white rounded-md group-hover:flex drop-shadow-md">
                        {/* Product */}
                        <div className="flex flex-col items-start justify-center space-y-2 border-r border-gray-400 border-dashed ">
                            <div className="flex px-2 space-x-2 rounded-sm hover:bg-teal-50">
                                <FcNews className="mt-1"/>
                                <a href="#" className="">EasySource</a>
                            </div>
                            <div className="flex px-2 space-x-2 rounded-sm hover:bg-teal-50">
                                <FcNews className="mt-1"/>
                                <a href="#" className="">EasyAssess</a>
                            </div>
                            <div className="flex px-2 space-x-2 rounded-sm hover:bg-teal-50">
                                <FcNews className="mt-1"/>
                                <a href="#" className="">EasyInterview</a>
                            </div>
                        </div>
                        {/* Solutions */}
                        <div className="flex-col items-start justify-center ml-4 space-y-2 border-r border-gray-400 border-dashed">
                            <h3 className="mt-[-0.5rem]  text-gray-500">Solutions</h3>
                            <div className="flex px-2 space-x-2 rounded-sm hover:bg-teal-50">
                                <FcNews className="mt-1"/>
                                <a href="#" className="">Talent Sourcing Service</a>
                            </div>
                            <div className="flex px-2 space-x-2 rounded-sm hover:bg-teal-50">
                                <FcNews className="mt-1"/>
                                <a href="#" className="">SaaS</a>
                            </div>
                            <div className="flex px-2 space-x-2 rounded-sm hover:bg-teal-50">
                                <FcNews className="mt-1"/>
                                <a href="#" className="">Consulting</a>
                            </div>
                        </div>
                        {/* Industry */}
                        <div className="flex flex-col items-start justify-center ml-4 space-y-2">
                            <h3 className="mt-[-0.5rem]  text-gray-500">Industry</h3>
                            <div className="flex px-2 space-x-2 rounded-sm hover:bg-teal-50">
                                <FcNews className="mt-1"/>
                                <a href="#" className="">SaaS Industry</a>
                            </div>
                            <div className="flex px-2 space-x-2 rounded-sm hover:bg-teal-50">
                                <FcNews className="mt-1"/>
                                <a href="#" className="">Sales Industry</a>
                            </div>
                            <div className="flex px-2 space-x-2 rounded-sm hover:bg-teal-50">
                                <FcNews className="mt-1"/>
                                <a href="#" className="">Marketing Industry</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="relative group hover:drop-shadow-lg ">
                    <div className="flex items-center px-3 py-1 space-x-2 rounded-sm hover:bg-gray-50">
                        Resources
                        <svg className="w-3 h-3 -mr-1 text-gray-400 group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="absolute hidden p-8 py-3 space-y-3 truncate bg-white rounded-md group-hover:flex drop-shadow-md">
                        <div className="flex-col items-start justify-center ml-4 space-y-2 border-r border-gray-400 border-dashed">
                            <div className="flex px-2 space-x-2 rounded-sm hover:bg-teal-50">
                                {/* <FcNews className="mt-1"/> */}
                                <a href="#" className="">Blogs</a>
                            </div>
                            <div className="flex px-2 space-x-2 rounded-sm hover:bg-teal-50">
                                {/* <FcNews className="mt-1"/> */}
                                <a href="#" className="">Case Studies</a>
                            </div>
                            <div className="flex px-2 space-x-2 rounded-sm hover:bg-teal-50">
                                {/* <FcNews className="mt-1"/> */}
                                <a href="#" className="">Podcast</a>
                            </div>
                            <div className="flex px-2 space-x-2 rounded-sm hover:bg-teal-50">
                                {/* <FcNews className="mt-1"/> */}
                                <a href="#" className="">HR Glossary</a>
                            </div>
                        </div>

                        {/* Industry */}
                        <div className="flex flex-col items-start justify-center ml-4 space-y-2">
                            <h3 className="mt-[-0.5rem]  text-gray-500">TOOLS</h3>
                            <div className="flex px-2 space-x-2 rounded-sm hover:bg-teal-50">
                                <FcNews className="mt-1"/>
                                <a href="#" className="">JD Generator</a>
                            </div>
                            <div className="flex px-2 space-x-2 rounded-sm hover:bg-teal-50">
                                <FcNews className="mt-1"/>
                                <a href="#" className="">ROI Calculator</a>
                            </div>
                            <div className="flex px-2 space-x-2 rounded-sm hover:bg-teal-50">
                                <FcNews className="mt-1"/>
                                <a href="#" className="">HR Toolkit</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="px-3 py-1 space-x-2 rounded-sm hover:bg-gray-50">
                Pricing
                </li>
            </ul>
            <ul className="flex items-center space-x-4">
                <li>
                <button className="px-4 py-2 bg-black rounded-md text-secondary drop-shadow-lg hover:shadow-lg">
                    Book a demo
                </button>
                </li>
                <div className="w-px h-6 bg-gray-300"></div>
                <li>
                <button className="px-4 py-2 rounded-md bg-primary text-secondary drop-shadow-sm hover:shadow-lg">
                    Talk to us
                </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
