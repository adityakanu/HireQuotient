const EasyInterview = () => {
    return (
        <div className="flex items-center p-6 py-6 border border-gray-300 rounded-md shadow-lg sm:py-8 ">
            <div className="relative w-1/3 mx-10 overflow-hidden rounded-md">
                <img
                    className="w-full h-auto rounded-md"
                    src="https://www.hirequotient.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcandidates-better.1d8ac741.gif&w=2048&q=75"
                />
            </div>
            <div className="max-w-md ml-5 ">
                <h1 className="mb-4 text-3xl font-bold text-gray-800">
                    Know Your Candidates Better
                </h1>
                <p className="text-gray-600">
                    Interview your candidates with one-way video assessments and
                    skip all hiring nuisances.
                </p>
                <ul className="pl-5 mt-4 text-gray-600 list-disc">
                    <li className="py-2">
                        Design the interview as per your needs.
                    </li>
                    <li>Save a ton of time and resources.</li>
                </ul>
            </div>
        </div>
    );
};

export default EasyInterview;
