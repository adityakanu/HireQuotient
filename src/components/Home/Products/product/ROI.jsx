const Roi = () => {
    return (
        <div className="flex items-center p-6 py-6 border border-gray-300 rounded-md shadow-lg sm:py-8 ">
            <div className="relative w-1/3 mx-10 overflow-hidden rounded-md">
                <video
                    className="w-full h-auto rounded-md"
                    autoPlay
                    loop
                    muted
                    playsInline
                    src="https://www.hirequotient.com/_next/static/videos/quick-hiring-a54cc7ceddac2d42f136f22613f0c6e6.mov"
                />
                {/* <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white bg-black bg-opacity-50">
                    Evaluate Your Hiring Efforts
                </div> */}
            </div>
            <div className="max-w-md ml-5 ">
                <h1 className="mb-4 text-3xl font-bold text-gray-800">
                    Maximize Your ROI in Hiring
                </h1>
                <p className="text-gray-600">
                    Don’t let your recruitment endeavors go to waste. Calculate
                    your return on investment (ROI) and make data-driven hiring
                    decisions to reduce your time to hire drastically.
                </p>
                <ul className="pl-5 mt-4 text-gray-600 list-disc">
                    <li className="py-2">
                        Reduce your time to hire drastically.
                    </li>
                    <li>Make data-driven hiring decisions.</li>
                </ul>
            </div>
        </div>
    );
};

export default Roi;
