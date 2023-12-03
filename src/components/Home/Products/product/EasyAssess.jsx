const EasyAssess = () => {
    return (
        <div className="flex items-center p-6 py-6 border border-gray-300 rounded-md shadow-lg sm:py-8 ">
            <div className="relative w-1/3 mx-10 overflow-hidden rounded-md">
                <video
                    className="w-full h-auto rounded-md"
                    autoPlay
                    loop
                    muted
                    playsInline
                    src="https://www.hirequotient.com/_next/static/videos/result-driven-9d508eb028941194738d1dbbfaa60016.mov"
                />
            </div>
            <div className="max-w-md ml-5 ">
                <h1 className="mb-4 text-3xl font-bold text-gray-800">
                    Validate Your Candidate’s Skills and Stand Out from the
                    Crowd
                </h1>
                <p className="text-gray-600">
                    Assess your candidates based on their skills and toss away
                    the fear of hiring the wrong candidates.
                </p>
                <ul className="pl-5 mt-4 text-gray-600 list-disc">
                    <li className="py-2">
                        Get tailored assessments according to your requirements.
                    </li>
                    <li>
                        Evaluate each candidate with our detailed analytical
                        reports.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default EasyAssess;
