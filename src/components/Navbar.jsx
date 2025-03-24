import React from "react";

const Navbar = () => {
    return (
        <div className="flex px-7 md:px-10 lg:px-15 h-[10vh] justify-between ">
            <div className="flex items-center text-xl md:text-3xl lg:text-4xl font-bold text-orange-900">
                Veritas
            </div>
            <div className="flex text-xs md:text-lg lg:text-lg gap-4 md:gap-10 lg:gap-20 items-center ">
                <ul>Home</ul>
                <ul>How it works?</ul>
                <ul>About</ul>
            </div>
        </div>
    );
};

export default Navbar;
