import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import HighlightText from '../components/core/HomePage/HighlightText'
// import CTAButton from '../components/core/HomePage/Button'
import Button from '../components/core/HomePage/Button'
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from '../components/core/HomePage/CodeBlocks'
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection'
import TimeLineSection from '../components/core/HomePage/TimeLineSection'
import InstructorSection from '../components/core/HomePage/InstructorSection'
import Footer from '../components/common/Footer'
import ExploreMore from '../components/core/HomePage/ExploreMore'
const Home = () => {
  return (
    <div>

      {/* first section i.e. black bg part 1  */}
      <div className='text-white relative mx-auto flex flex-col w-11/12 items-center justify-between max-w-maxContent'>


        <Link to={"/signup"}>

          <div className='group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit'>
            {/* // represents the circular part of the button  */}
            <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900'>
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <div className='text-center text-4xl font-semibold mt-7'>
          Empower Your Future with <HighlightText text={"Coding Skills"} />
        </div>

        <div className='w-[90%] text-center text-lg font-bold text-richblack-300 mt-4 '>
          <p>
            With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
          </p>
        </div>

        <div className='flex flez-row gap-7 mt-8'>
          <Button active={true}  linkto = {"/signup"}>Learn More</Button>
          <Button active={false}  linkto = {"/login"}>Book a Demo</Button>
        </div>

        <div className='shadow-blue-200 mx-9 my-9 '>
          <video muted loop autoPlay>
            <source src={Banner} type='video/mp4' />
          </video>
        </div>

        {/* Code Section 1 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className='text-4xl font-semibold'>
                Unlock Your
                <HighlightText text={" Coding Potential "} /><br/>
                with our online courses
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={
              {
                btnText: "try it yourself",
                linkto: "/signup",
                active: true,
              }
            }
            ctabtn2={
              {
                btnText: "learn more",
                linkto: "/login",
                active: false,
              }
            }

            codeblock={`<!DOCTYPE html>\n<html>\n<head><title>Example</title><linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n<h1><a href='/'>\n</h1>\n<nav><a href="one">One</a>\n<a href="two">Two</a>\n</nav>`}
            codeColor={"text-yellow-25"}
          />
        </div>

        {/* Code Section 2 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className='text-4xl font-semibold'>
                Start
                <HighlightText text={" Coding"} /><br/><HighlightText text={"in seconds"}/>
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={
              {
                btnText: "try it yourself",
                linkto: "/signup",
                active: true,
              }
            }
            ctabtn2={
              {
                btnText: "learn more",
                linkto: "/login",
                active: false,
              }
            }

            codeblock={`<!DOCTYPE html>\n<html>\n<head><title>Example</title><linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n<h1><a href='/'>\n</h1>\n<nav><a href="one">One</a>\n<a href="two">Two</a>\n</nav>`}
            codeColor={"text-yellow-25"}
          />
        </div>
        
        <ExploreMore />
      </div>

      {/* second section i.e. white bg */}
      <div className='bg-pure-greys-5 text-richblack-700'>
            <div className='homepage_bg h-[310px]'>
              <div className='w-11/12 max-w-maxContent flex items-center gap-5 mx-auto '>
                <div className='flex flex-row gap-7 mt-20 text-white'>
                  <Button active={true} linkto={"/signup"}>
                    <div className='flex flex-row items-center gap-2'>
                      Explore Full Catalog
                      <FaArrowRight/>
                    </div>
                    
                  </Button>

                  <Button active={false} linkto={"/signup"}>
                    <div className=''>
                      Learn More
                    </div>
                  </Button>
                </div>
              </div>
            </div>

            <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7'>

              <div className='flex flex-row gap-5 mb-10 mt-[95px]'> 
                <div className='text-4xl font-semibold w-[45%]'>
                  Get The Skills you need for a <HighlightText text={"Job that is in demand"}/>
                </div>
                <div className='flex flex-col gap-10 w-[40%] items-start'>
                  <div className='text-[16px]'>
                  The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                  </div>
                  <Button active={true} linkto={"/signup"}>
                    Learn More
                  </Button>
                </div>
              </div>
              
            <TimeLineSection/>
            <LearningLanguageSection/>
            </div>

      </div>
      


      {/* section 3  */}
      <div className='w-11/12 mx-auto max-w-maxContent flex flex-row items-center gap-8 first-letter: bg-richblack-900 text-white'> 
            <InstructorSection />
            <h2 className='text-center text-4xl font-semibold mt-10'>Review From Other Learners</h2>

            {/* Review Slider  */}
      </div>

        <Footer/>
    </div>
  )
}

export default Home