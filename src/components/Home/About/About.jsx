import Group from "../../../assets/Group.svg"
const About = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-10 text-center ">
            <h1 className="text-4xl font-black text-gray-800 md:text-5xl lg:text-7xl font-plus-jakarta-sans">A Great Hiring Story <div>Begins with <span className="text-primary">HireQuotient</span></div></h1>
            <p className="mt-5 text-sm font-bold text-gray-400 md:text-sm lg:text-xl font-plus-jakarta-sans ">Embark on a seamless hiring journey with HireQuotient. <br /> <span className="text-primary">Source, screen, and interview </span>top talent – all in one place with ease.</p>
            <img src={Group} alt="woman" className="w-3/5 md:w-3/5 lg:w-2/5 md:mt-[-25px]" />
            <button className="md:px-5 md:py-2 md:text-2xl px-2 py-1 drop-shadow-lg hover:animate-pulse font-bold text-white bg-black rounded-md font-plus-jakarta-sans md:mt-[-20px]">
                Book a demo
            </button>
        </div>
    )
}

export default About