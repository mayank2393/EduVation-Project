import React, { useState } from 'react'
import {HomePageExplore} from '../../../data/homepage-explore'
const tabsName = [
    "Free",
    "New to Coding",
    "Most Popular",
    "Skill Paths",
]


const ExploreMore = () => {
    const [currentTab, setCurrentTab] = useState(tabsName[0]);
    const [courses, setCourses] = useState(HomePageExplore[0].courses);
    const [currectCard , setCurrentCard] = useState(HomePageExplore[0].courses[0].heading);

    const setMyCards = (value)=>{
        setCurrentTab(value);
        const newCourses = HomePageExplore.filter((course) => course.tag === value);
        setCourses(newCourses[0].courses);
        setCurrentCard(newCourses[0].courses[0].heading);
    }
  return (
    <div>

    </div>
  )
}

export default ExploreMore