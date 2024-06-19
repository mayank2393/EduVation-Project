import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import "../../.."
// Import required modules
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";

// import { getAllCourses } from "../../services/operations/courseDetailsAPI"
import Course_Card from "./Course_Card";

function CourseSlider({ Courses }) {
  return (
    <>
      {Courses?.length ? (
        <Swiper
          // slidesPerView={1}
          // spaceBetween={25}
          // loop={true}
          // modules={[FreeMode, Pagination]}
          // breakpoints={{
          //   1024: {
          //     slidesPerView: 3,
          //   },
          // }}
          // className="max-h-[30rem]"

          slidesPerView={1}
          loop={true}
          spaceBetween={200}
          pagination={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          navigation={true}
          breakpoints={{
            1024: {
              slidesPerView: 2,
            },
          }}
        >
          {Courses?.map((course, i) => (
            <SwiperSlide key={i}>
              <Course_Card course={course} Height={"h-[250px]"} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-xl text-richblack-5">No Course Found</p>
      )}
    </>
  );
}

export default CourseSlider;
