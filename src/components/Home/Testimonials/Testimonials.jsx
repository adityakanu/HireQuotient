const Testimonials = () => {
    return (
        <div className="py-6 bg-white sm:py-8 lg:py-12">
            <div className="max-w-screen-xl px-4 mx-auto md:px-8">
                <h2 className="mb-8 text-2xl font-bold text-center text-gray-800 md:mb-12 lg:text-3xl">
                    What others say about us
                </h2>

                <div className="grid gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3 lg:divide-x">
                    {/* <!-- quote - start --> */}
                    <div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
                        <div className="text-center text-gray-600">
                            “This is a section of some simple filler text, also
                            known as placeholder text.”
                        </div>

                        <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                            <div className="w-12 h-12 overflow-hidden bg-gray-100 rounded-full shadow-lg md:h-14 md:w-14">
                                <img
                                    src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112"
                                    loading="lazy"
                                    alt="Photo by Radu Florin"
                                    className="object-cover object-center w-full h-full"
                                />
                            </div>

                            <div>
                                <div className="text-sm font-bold text-center text-indigo-500 sm:text-left md:text-base">
                                    John McCulling
                                </div>
                                <p className="text-sm text-center text-gray-500 sm:text-left md:text-sm">
                                    CEO / Datadrift
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- quote - end --> */}

                    {/* <!-- quote - start --> */}
                    <div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
                        <div className="text-center text-gray-600">
                            “This is a section of some simple filler text, also
                            known as placeholder text.”
                        </div>

                        <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                            <div className="w-12 h-12 overflow-hidden bg-gray-100 rounded-full shadow-lg md:h-14 md:w-14">
                                <img
                                    src="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112"
                                    loading="lazy"
                                    alt="Photo by christian ferrer"
                                    className="object-cover object-center w-full h-full"
                                />
                            </div>

                            <div>
                                <div className="text-sm font-bold text-center text-indigo-500 sm:text-left md:text-base">
                                    Kate Berg
                                </div>
                                <p className="text-sm text-center text-gray-500 sm:text-left md:text-sm">
                                    CFO / Dashdash
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- quote - end --> */}

                    {/* <!-- quote - start --> */}
                    <div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
                        <div className="text-center text-gray-600">
                            “This is a section of some simple filler text, also
                            known as placeholder text.”
                        </div>

                        <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                            <div className="w-12 h-12 overflow-hidden bg-gray-100 rounded-full shadow-lg md:h-14 md:w-14">
                                <img
                                    src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=500"
                                    loading="lazy"
                                    alt="Photo by Ayo Ogunseinde"
                                    className="object-cover object-center w-full h-full"
                                />
                            </div>

                            <div>
                                <div className="text-sm font-bold text-center text-indigo-500 sm:text-left md:text-base">
                                    Greg Jackson
                                </div>
                                <p className="text-sm text-center text-gray-500 sm:text-left md:text-sm">
                                    CTO / Uptime
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- quote - end --> */}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
