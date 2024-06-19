const CourseProgress = require("../models/CourseProgress");
const SubSection = require("../models/SubSection");

exports.updateCourseProgress = async (req, res) => {
    const {courseId,subSectionId} = req.body;
    const userId = req.user.id;

    try {
        // check if subSection valid
        const subSection = await SubSection.findById(subSectionId);

        if (!subSection) {
            return res.status(404).json({error:"Invalid Subsection"});
        }
        // check for old entry
        let courseProgress = await CourseProgress.findOne({
            courseID: courseId,
            userId: userId, 
        });
        if(!courseProgress){
            return res.status(404).json({
                success : false,
                message:"Course Progress does not exists"
            })
        }
        else{
            // check for re-completing video/subSection
            if(courseProgress.completedVideos.includes(subSectionId)){
                return res.status(400).json({
                    success : false,
                    message:"Already Completed"
                })
            }

            // push into completed videos
            courseProgress.completedVideos.push(subSectionId);

            await courseProgress.save(); // save the updated course progress

            return res.status(200).json({ message: "Course progress updated" })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success : false,
            message:"Internal Server Error"
        });
    }
};
