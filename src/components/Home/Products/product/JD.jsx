const Jd = () => {
    return (
        <div className="flex items-center p-6 py-6 border border-gray-300 rounded-md shadow-lg sm:py-8 ">
            <div className="relative w-1/3 mx-10 overflow-hidden rounded-md">
                <video
                    className="w-full h-auto rounded-md"
                    autoPlay
                    loop
                    muted
                    playsInline
                    src="https://www.hirequotient.com/_next/static/videos/pickrole-9f8acd097b252ecec4a4d8f579421ab4.webm"
                />
                {/* <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white bg-black bg-opacity-50">
                    Evaluate Your Hiring Efforts
                </div> */}
            </div>
            <div className="max-w-md ml-5 ">
                <h1 className="mb-4 text-3xl font-bold text-gray-800">
                    Create JDs from scratch in just a few minutes
                </h1>
                <p className="text-gray-600">
                    Forget the hassle of crafting a job description everytime a
                    vacancy pops-up.
                </p>
                <ul className="pl-5 mt-4 text-gray-600 list-disc">
                    <li className="py-2">
                        Pick a role, select relevant information and you’re
                        done.
                    </li>
                    <li>
                        Save upto 50% of your time with automated JD generation.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Jd;
