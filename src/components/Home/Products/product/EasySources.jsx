const EasySources = () => {
    return (
        <div className="flex items-center p-6 py-6 border border-gray-300 rounded-md shadow-lg sm:py-8 ">
            <div className="relative w-1/3 mx-10 overflow-hidden rounded-md">
                <img
                    className="w-full h-auto rounded-md"
                    src="https://www.hirequotient.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffirst.9bad9d88.gif&w=3840&q=75"
                />
            </div>
            <div className="max-w-md ml-5 ">
                <h1 className="mb-4 text-3xl font-bold text-gray-800">
                    Find Candidates That Fit Your Requirements
                </h1>
                <p className="text-gray-600">
                    Get a relevant pool of candidates with AI-recommended
                    filters such as skills, experience and US work
                    authorization.
                </p>
                <ul className="pl-5 mt-4 text-gray-600 list-disc">
                    <li className="py-2">
                        Identify candidates with relevant experience, removing
                        all the fluff from their profiles.
                    </li>
                    <li>
                        Automate multi-channel outreach on email and LinkedIn
                        using workflows optimized for maximum response.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default EasySources;
