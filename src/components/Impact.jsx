import React from "react";
import alertImage from "../assets/danger.svg";
import users from "../assets/users.svg";
import globe from "../assets/globe.svg";
import sliders from "../assets/sliders.svg";
import activity from "../assets/health.svg";

const Impact = () => {
    return (
        <div className="mt-50 ">
            <div>
                <div className="flex flex-col items-center justify-center gap-3 mx-5 lg:mx-10 rounded-xl px-7 lg:px-15 py-5 ">
                    <div className="w-fit rounded-full p-5">
                        <img
                            className="w-12 bg-[#faedcd]"
                            src={alertImage}
                            alt=""
                        />
                    </div>
                    <div className="text-5xl font- font-bold">
                        The Grave Consequences of Misinformation
                    </div>
                    <div className="text-lg">
                        False information isn't merely incorrect-it's actively
                        harmful to individuals and societies in profound ways.
                    </div>
                </div>
                <div className=" grid grid-col-1 lg:grid-cols-2 m-5 lg:mx-10 gap-8 rounded-xl p-2 lg:p-10">
                    <div className="border border-[#e0c9a6] flex gap-4 px-10 py-15 rounded-xl ">
                        <div className="rounded-full w-fit h-fit p-5 lg-p-3">
                            <img
                                className="w-40 lg:w-20 bg-[#faedcd]"
                                src={users}
                                alt="users"
                            />
                        </div>

                        <div className="flex flex-col gap-1 bg-[#faedcd]">
                            <div className="font-bold text-2xl bg-[#faedcd]">
                                Societal Division
                            </div>
                            <div className="text-lg bg-[#faedcd]">
                                False narratives drive wedges between
                                communities, amplifying polarization and
                                undermining social cohesion essential for
                                democracy.
                            </div>
                        </div>
                    </div>
                    <div className="border border-[#e0c9a6] flex gap-4 px-10 py-15 rounded-xl bg-[#faedcd]">
                        <div className="h-fit rounded-full p-5 lg:p-2">
                            <img
                                className="w-40 lg:w-20 bg-[#faedcd]"
                                src={globe}
                                alt="users"
                            />
                        </div>

                        <div className="flex flex-col gap-1 bg-[#faedcd]">
                            <div className="font-bold text-2xl bg-[#faedcd]">
                                Democratic Deterioration
                            </div>
                            <div className="text-lg bg-[#faedcd]">
                                Misinformation erodes public trust in
                                institutions and the electoral process,
                                threatening the foundations of democratic
                                governance.
                            </div>
                        </div>
                    </div>
                    <div className="border border-[#e0c9a6] flex gap-4 px-10 py-15 rounded-xl bg-[#faedcd]">
                        <div className="h-fit rounded-full p-5 lg:p-2">
                            <img
                                className="w-40 lg:w-20 bg-[#faedcd]"
                                src={sliders}
                                alt="users"
                            />
                        </div>

                        <div className="flex flex-col gap-1 bg-[#faedcd]">
                            <div className="font-bold text-2xl bg-[#faedcd]">
                                Cognitive Manipulation
                            </div>
                            <div className="text-lg bg-[#faedcd]">
                                Repeated exposure to falsehoods can rewire
                                cognitive processing, making individuals
                                susceptible to believing subsequent
                                misinformation.
                            </div>
                        </div>
                    </div>
                    <div className="border border-[#e0c9a6] flex gap-4 px-10 py-15 rounded-xl">
                        <div className="h-fit rounded-full p-5 lg:p-2">
                            <img
                                className="w-40 lg:w-20 bg-[#faedcd]"
                                src={activity}
                                alt="users"
                            />
                        </div>

                        <div className="flex flex-col gap-1 ">
                            <div className="font-bold text-2xl bg-[#faedcd]">
                                Public Health Threats
                            </div>
                            <div className="text-lg bg-[#faedcd]">
                                Misleading health information can lead to
                                dangerous behaviors, rejection of life-saving
                                treatments, and compromised community health.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center my-10">
                <div className="flex flex-col gap-5 w-[80vw] lg:w-[50%] border border-[#e0c9a6] bg-[#f3dcaf] lg:mx-60 rounded-xl p-10">
                    <div className="text-lg bg-[#f3dcaf] font-serif">
                        The spread of false information is one of the most
                        urgent threats facing our interconnected world.
                        Combating this threat requires not only technological
                        solutions but also a commitment to media literacy and
                        critical thinking.
                    </div>
                    <div className="font-bold font-serif flex justify-end text-md bg-[#f3dcaf]">
                        - World Freedom Index, 2023
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Impact;
