// use this component to call icons. 
// so if we want to change an icon, we only have to do it here
// https://medium.com/@franciscomoretti/the-best-way-to-organize-icons-in-a-next-js-site-7615022f3bf4

// import icons here
import { FaFileAlt } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";


// "create" icons here 
const GoogleIcon = (props) => {
    return <img src="/images/google_logo.png" alt="Google Logo" className="w-6 h-6" />;
  };



// map out icons other components can access here  
export const Icons = {
    file: FaFileAlt,
    google: GoogleIcon,
    xmark: FaXmark,
}