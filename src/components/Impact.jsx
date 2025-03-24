import React from "react";
import alertImage from "../assets/danger.svg";
import users from "../assets/users.svg";
import globe from "../assets/globe.svg";
import sliders from "../assets/sliders.svg";
import activity from "../assets/health.svg";

const Impact = () => {
    return (
        <div className="bg-[#f8f9fa]">
            <div>
                <div className="flex flex-col items-center justify-center gap-3 mx-5 lg:mx-10 rounded-xl px-7 lg:px-15 py-10 ">
                    <div className="bg-[#ffedd8] w-fit rounded-full p-5">
                        <img className="w-12" src={alertImage} alt="" />
                    </div>
                    <div className="text-2xl font-serif font-bold">
                        The Grave Consequences of Misinformation
                    </div>
                    <div className="text-gray-500 ">
                        False information isn't merely incorrect-it's actively
                        harmful to individuals and societies in profound ways.
                    </div>
                </div>
                <div className=" grid grid-col-1 lg:grid-cols-2 m-5 lg:mx-10 gap-8 rounded-xl p-2 lg:p-10">
                    <div className="border-2 flex gap-4 px-2 py-15 rounded-xl ">
                        <div className="bg-[#ffedd8] rounded-full w-fit h-fit p-5 lg-p-3">
                            <img
                                className="w-20 lg-w-10"
                                src={users}
                                alt="users"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <div className="font-serif font-bold text-xl">
                                Societal Division
                            </div>
                            <div className="text-gray-500 text-sm lg:text-md">
                                False narratives drive wedges between
                                communities, amplifying polarization and
                                undermining social cohesion essential for
                                democracy.
                            </div>
                        </div>
                    </div>
                    <div className="border-2 flex gap-4 px-10 py-15 rounded-xl">
                        <div className="bg-[#ffedd8] h-fit rounded-full p-5 lg:p-2">
                            <img
                                className="w-20 lg-w-10"
                                src={globe}
                                alt="users"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <div className="font-serif font-bold text-xl">
                                Democratic Deterioration
                            </div>
                            <div className="text-gray-500 text-sm lg:text-md">
                                Misinformation erodes public trust in
                                institutions and the electoral process,
                                threatening the foundations of democratic
                                governance.
                            </div>
                        </div>
                    </div>
                    <div className="border-2 flex gap-4 px-10 py-15 rounded-xl">
                        <div className="bg-[#ffedd8] h-fit rounded-full p-5 lg:p-2">
                            <img
                                className="w-20 lg-w-10"
                                src={sliders}
                                alt="users"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <div className="font-serif font-bold text-xl">
                                Cognitive Manipulation
                            </div>
                            <div className="text-gray-500 text-sm lg:text-md">
                                Repeated exposure to falsehoods can rewire
                                cognitive processing, making individuals
                                susceptible to believing subsequent
                                misinformation.
                            </div>
                        </div>
                    </div>
                    <div className="border-2 flex gap-4 px-10 py-15 rounded-xl">
                        <div className="bg-[#ffedd8] h-fit rounded-full p-5 lg:p-2">
                            <img
                                className="w-20 lg-w-10"
                                src={activity}
                                alt="users"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <div className="font-serif font-bold text-xl">
                                Public Health Threats
                            </div>
                            <div className="text-gray-500 text-sm lg:text-md">
                                Misleading health information can lead to
                                dangerous behaviors, rejection of life-saving
                                treatments, and compromised community health.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-200 mx-5 lg:mx-20 rounded-xl px-7 lg:px-15 py-10">
                <div className="text-sm lg:text-md">
                    The spread of false information is one of the most urgent
                    threats facing our interconnected world. Combating this
                    threat requires not only technological solutions but also a
                    commitment to media literacy and critical thinking.
                </div>
                <div className="font-serif flex justify-end text-sm lg:text-md">
                    -World Freedom Index, 2023
                </div>
            </div>
        </div>
    );
};

export default Impact;
