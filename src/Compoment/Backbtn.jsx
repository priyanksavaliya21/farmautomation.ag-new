import React ,{useState} from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fab from '@mui/material/Fab';
import { display } from "@mui/system";
 

const BackButton = () => {
   
    const [visible, setVisible] = useState(false)
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      // console.log(scrolled)
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
           in place of 'smooth' */
      });
    };
    
    window.addEventListener('scroll', toggleVisible);
  
    return (
        <>
            <div className="btn-up" id="btn-x" onClick={scrollToTop} style={{display : visible ? "block" : "none"  } }>
            <Fab color="secondary" aria-label="edit">
               <a href=""> <KeyboardArrowUpIcon className="font-w" /></a>
            </Fab>
            </div>
        </>
    );
};
export {BackButton};