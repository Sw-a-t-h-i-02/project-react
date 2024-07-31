// import React from 'react'
// import "./hero.css"
// import Title from '../Title/title'
// import { Link, useNavigate } from 'react-router-dom';
// const Hero = () =>{
//   const navigate=useNavigate()
//   return (
//     <>
//     <section className='hero'>
//         <div className='container'>
//             <div className='row'>
//                 <Title subtitle="WELCOME TO ACADEMIA" title="Best Online Education"/>
//                 <p>Education is the transmission of knowledge, skills, and character traits and manifests in various forms. Formal education occurs within a structured institutional framework, such as public schools, following a curriculum. Non-formal education also follows a structured approach but occurs outside the formal schooling system.  </p>
//               {/* <div className='button'>  */}
//               {/* <Link to="/allcourses"><button className='primary-btn'>GET STARTED<i className='fa fa-long-arrow-alt-right'></i></button></Link> */}
//               {/* <Link to="/allCourses"><button >
//                        VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
//                     </button></Link> */}

//                     {/* <button  className='primary-btn' onClick= { ()=>  navigate('/allCourses')}>View Course</button> */}
//                     {/* <button className='primary-btn' onClick={() => navigate('/allcourses')}>
//                 VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
//               </button> */}
//                 {/* </div> */}
//             </div>
//         </div>
//     </section>
//     <div className='marigin'></div>
//     </>
//   )
// }
// export default Hero




// import React from 'react';
// import "./hero.css";
// import Title from '../Title/title';
// import { useNavigate } from 'react-router-dom';

// const Hero = () => {
//   const navigate = useNavigate();
//   return (
//     <>
//       <section className='hero'>
//         <div className='container'>
//           <div className='row'>
//             <Title subtitle="WELCOME TO ACADEMIA" title="Best Online Education" />
//             <p>
//               Education is the transmission of knowledge, skills, and character traits and manifests in various forms. Formal education occurs within a structured institutional framework, such as public schools, following a curriculum. Non-formal education also follows a structured approach but occurs outside the formal schooling system.
//             </p>
//             <div className='button-container'>
//               <button className='primary-btn' onClick={() => navigate('/allcourses')}>
//                 VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//       <div className='margin'></div>
//     </>
//   );
// }

// export default Hero;

import React from 'react';
import "./hero.css";
import Title from '../Title/title';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Title subtitle="WELCOME TO KHAN ACADEMY" title="Best Online Education" />
            <p>
              Education is the transmission of knowledge, skills, and character traits and manifests in various forms. Formal education occurs within a structured institutional framework, such as public schools, following a curriculum. Non-formal education also follows a structured approach but occurs outside the formal schooling system.
            </p>
            <div className='button-container'>
              <button className='primary-btn' onClick={() => navigate('/allcourses')}>
                VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  );
}

export default Hero;




