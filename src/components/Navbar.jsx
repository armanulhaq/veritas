import React from "react";
import github from "../assets/github.png";
import user from "../assets/user.png";

const Navbar = () => {
    return (
        <div className="w-full shadow-sm flex px-7 md:px-10 lg:px-15 h-[10vh] items-center justify-between mb-1">
            <div className="flex items-center text-3xl lg:text-4xl font-bold text-[#6c3d0f] font-serif">
                Veritas
            </div>
            <div className="flex gap-4 lg:gap-8">
                <a target="blank" href="https://github.com/armanulhaq/veritas">
                    <img className="h-6" src={github} alt="github icon" />
                </a>
                <a target="blank" href="https://iamarman.vercel.app/">
                    <img className="h-6" src={user} alt="About me" />
                </a>
            </div>
        </div>
    );
};

export default Navbar;
