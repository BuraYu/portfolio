import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm buriburi. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Tempora, labore.
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, veniam alias perspiciatis expedita consectetur a harum
              eum at dolore ad reiciendis deleniti sapiente ex itaque. Eum
              deleniti dolore quibusdam qui, pariatur hic temporibus nam
              doloribus ea mollitia eaque aut illo eveniet officia modi
              assumenda nobis accusamus, accusantium omnis dolor exercitationem!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
