import React from "react";

const Resume = () => {
  return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          About Me
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
        Coding My Way Through Life.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Experience
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Software Engineer<br /><a href="https://www.standardbank.com/sbg/standard-bank-group" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                <span className="text-[.9rem] font-semibold text-gray-500 sm:text-base">
                🔗Standard Bank Group
                </span>
              </a>
                </h1>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  January 2022 - February 2024
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                I spearheaded significant enhancements to backend systems and microservices, resulting in measurable improvements in system performance and user satisfaction. Here are the key achievements:< br/>
                <strong>1. Enhanced System Functionalities and Optimized codebases</strong>, which led to a remarkable 30% increase in performance and reliability.< br/>
                <strong>2. Implemented Agile methodologies</strong> to streamline development processes, fostering rapid iteration and continuous improvement in backend systems and microservices.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Education
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" grid grid-cols-[auto,1fr] gap-4 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
              <div className="flex flex-col gap-1 border-r-2 border-black-400 pr-4 min-w-[200px]">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Ba, IT
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  The Eldoret National Polytechnic
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Year 2018 - Year 2021
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi nihil aut quae obcaecati alias placeat totam aperiam
                  pariatur quam? Accusantium minima aperiam error obcaecati
                  autem doloribus deserunt qui, laborum incidunt amet, numquam
                  eos cum tempora. Debitis, esse quae corporis deserunt officia
                  quos in a, quaerat vero odio vitae.
                </p>
                </div>
                <div className="flexs flex-col pr-4 min-w-[165px]">
                <h2 className="text-[1.4rem] font-semibold sm:text-xl ">
                 Software Eng
                </h2>
                <a href="https://www.holbertonschool.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                <span className="text-[.9rem] font-semibold text-gray-500 sm:text-base">
                🔗Holberton School, US
                </span>< br/>
              </a>
              <span className="text-[.89rem] font-semibold text-yellow-500 sm:text-base">
                  Year 2023 - Year 2024
                </span>< br/>
                <span className=" text-[.9rem] text-justify text-gray-500 m-0 p-0">
                Engaged & completed an intensive program to update and enhance my software engineering skills, focusing on modern, advanced practices and practical software development technologies to stay ahead in the field.
                </span>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
