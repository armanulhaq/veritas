import React from "react";

const Footer = () => {
    return (
        <div>
            <div className="flex flex-col text-sm lg:text-md lg:flex-row mx-5 gap-20 lg:mx-10 p-7 lg:p-15 border-y-2">
                <div className="w-[100%] lg:w-[50%]">
                    <div className="text-orange-900 mb-2 font-serif font-bold text-xl">
                        Veritas
                    </div>
                    <div className=" text-gray-400">
                        AI-powered news verification tool helping you navigate
                        the complex media landscape with confidence. Detect
                        bias, verify credibility, and make informed decisions.
                    </div>
                </div>
                <div className="flex justify-between w-[100%] lg:w-[50%]">
                    <div className="w-[50%] flex lg:justify-end">
                        <ul className="text-gray-400">
                            <div className="text-black mb-2 font-serif font-bold">
                                Navigation
                            </div>
                            <li>Home</li>
                            <li>How it works?</li>
                            <li>About</li>
                        </ul>
                    </div>
                    <div className="w-[50%] flex justify-end">
                        <ul className="text-gray-400">
                            <div className="text-black mb-2 font-serif font-bold">
                                Legal
                            </div>
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                            <li>Cookie Policy</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4  lg:flex-row justify-between text-xs m-5 px-15 text-gray-400">
                <div>
                    ©{new Date().getFullYear()} Veritas. All rights reserved.
                </div>
                <div>
                    This tool does not store content of analyzed articles. AI
                    analyses are for informational purposes only.
                </div>
            </div>
        </div>
    );
};

export default Footer;
