"use client";

import React from "react";
import Slider from "react-slick";
import { UI } from "../../components"

export default function ProfessionalSkills() {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };
  
    return (
      <div className="flex flex-col justify-center items-center mb-6 px- bg-gray-800">
        <h2 className="text-3xl font-bold text-center text-blue-400 mb-6 mt-6">
          My Professional Skills  <span className="md:hidden inline ml-2">&#8594;</span>
        </h2>
        {isMobile ? (   
          <Slider {...settings} className="w-full max-w-md">
            <div className="p-4">
            <UI.ProfessionalCards 
                name="Accountant " 
                url="www.supporthr.com"
                details = "As an accountant I was able to understand all the basic transaction and business strategies."
              />  
            </div>
            <div className="p-4">
            <UI.ProfessionalCards 
                name="Teacher" 
                url="www.namobuddhainternationalschool.com"
                details = "As an Teacher I as able to squeez all the knowledge ther is to know how brain work as a child."
              />            </div>
            <div className="p-4">
            <UI.ProfessionalCards 
                name="Executive Manager" 
                url="www.aletqannepal.com"
                details = "With my experties in accounting and mass communication skill I can now become a Executive Manager of a firm."
              />            </div>
            <div className="p-4">
            <UI.ProfessionalCards 
                name="Counsellor" 
                url="www.ucan.com"
                details = "As an experienced Academic and Career Counselor, I provide personalized guidance to help students achieve their educational and career goals. Services include study abroad advice, career planning, application support, and personalized counseling. I assist students with university selection, visa applications, and emotional well-being to ensure a smooth academic journey."
              />            </div>
          
          </Slider>
        ) : (
          <div className="flex flex-wrap justify-center items-center gap-6">
                <UI.ProfessionalCards 
                name="Accountant " 
                url="www.supporthr.com"
                details = "As an accountant, I have gained experience in managing financial transactions, preparing statements, budgeting, and tax preparation. I've also contributed to cost control, implemented internal controls, and provided financial analysis to support business decisions, strengthening my expertise in financial management and strategy."
              />    
              <UI.ProfessionalCards 
                name="Teacher" 
                url="www.namobuddhainternationalschool.com"
                details = "As a teacher, I gained valuable insights into how children's brains work, helping me tailor my teaching methods to suit their unique learning styles. This experience allowed me to foster a deeper understanding of child development and provided me with effective strategies to encourage learning and growth in young minds."
              />
               <UI.ProfessionalCards 
                name="Executive Manager" 
                url="www.aletqannepal.com"
                details = "With my expertise in accounting and strong communication skills, I am well-equipped to take on the role of Executive Manager in a firm. My ability to manage financial operations, coupled with effective communication, allows me to drive organizational success and lead teams with confidence."
              />
              <UI.ProfessionalCards 
                name="Counsellor" 
                url="www.ucan.com"
                details = "As an experienced Academic and Career Counselor, I provide personalized guidance to help students achieve their educational and career goals. Services include study abroad advice, career planning, application support, and personalized counseling. I assist students with university selection, visa applications, and emotional well-being to ensure a smooth academic journey."
              />
               
           
          </div>
        )}
      </div>
 
    );
  }
  