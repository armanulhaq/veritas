import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
    return (
        <div className="flex px-7 lg:px-15 py-10 justify-between">
            <div className="text-xl lg:text-3xl font-bold text-blue-500">
                Veritas
            </div>
            <div className="flex text-xs lg:text-lg gap-5 lg:gap-20 items-center ">
                <ul>Home</ul>
                <ul>How it works?</ul>
                <ul>About</ul>
            </div>
            <div>
                <Button>D</Button>
            </div>
        </div>
    );
};

export default Navbar;
