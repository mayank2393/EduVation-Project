import signupImg from "../assets/gifs/GbpT.gif";
import Template from "../components/core/Auth/Template.jsx";

function Signup() {
  return (
    <Template
      title="Join the millions learning to code with EduVation for free"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={signupImg}
      formType="signup"
    />
  );
}

export default Signup;
