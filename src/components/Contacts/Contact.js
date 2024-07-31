// import React from 'react'
// import Back from '../Back/Back'
// import "./contact.css"
// // import { Link } from 'react-router-dom'

// const Contact = () => {
//    const map='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d121772.88523993672!2d78.3384576!3d17.488281600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1712586425574!5m2!1sen!2sin" ,referrerpolicy="no-referrer-when-downgrade';
//   return (
//     <>
//     <div>
//         <Back title='Contact Us'/>
//         <section className='contact padding'>
//         <div className='contactbgimg'></div>
         
//             <div className='container shadow flexSB'>
//                 <div className='left row'>
//                    <iframe src={map}></iframe>
//                 </div>
//                 <div className='right row'>
//                   <h1>Contact Us</h1>
//                   <p>Contact us for more details and information.</p>
//                   <div className='items grid2'>
//                     <div className='box'>
//                       <h4>ADDRESS:</h4>
//                       <p>Kukatpally,Phase1,road number3,3rd building 2nd floor</p>
//                     </div>
//                     <div className='box'>
//                       <h4>Email:</h4>
//                       <p>khanacademy@gmail.com</p>
//                     </div>
//                     <div className='box'>
//                       <h4>Phone:</h4>
//                       <p>+91 6281282021</p>
//                     </div>
//                 </div>
//                 <form action=''>'
//                 <div className='flexSB'>
//                     <input type='text' placeholder='Name'/>
//                     <input type='email' placeholder='Email'/>
//                 </div>
//                 <input type='email' placeholder='Subject'/>
//                 <textarea cols='30' rows='10'>
//                   Creates a message here......
//                 </textarea>
//                 <button className='primary-btn'>SEND MESSAGE</button>
//                 </form>
//              {/* <h3>FOLLOW US HERE</h3> */}
//              {/* <span>FACEBOOK TWITTER INSTAGRAM</span> */}
//              {/* <Link to={"https://www.linkedin.com/feed/?trk=404_page"} className='links'><i className='fab fa-linkedin icon'></i></Link>
//              <Link to={"https://github.com/"}  className='links'><i className='fab fa-github icon'></i></Link> */}
//             </div>
//             </div>
//         </section>
//     </div>
//     </>
//   )
// }

// export default Contact


import React, { useState } from 'react';
import Back from '../Back/Back';
import Swal from 'sweetalert2';
import "./contact.css";
// import { Link } from 'react-router-dom';

const Contact = () => {
   const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d121772.88523993672!2d78.3384576!3d17.488281600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1712586425574!5m2!1sen!2sin" ,referrerpolicy="no-referrer-when-downgrade';

   const [formData, setFormData] = useState({
     name: '',
     email: '',
     subject: '',
     message: ''
   });

   const handleChange = (e) => {
     const { name, value } = e.target;
     setFormData({ ...formData, [name]: value });
   };

   const handleSubmit = (e) => {
     e.preventDefault();
     const { name, email, subject, message } = formData;

     if (name && email && subject && message) {
       Swal.fire({
         title: 'Success!',
         text: 'Your message has been sent successfully.',
         icon: 'success',
         confirmButtonText: 'OK'
       });
     } else {
       Swal.fire({
         title: 'Error!',
         text: 'Please fill in all fields.',
         icon: 'error',
         confirmButtonText: 'OK'
       });
     }
   };

   return (
     <>
       <div>
         <Back title='Contact Us' />
         <section className='contact padding'>
           <div className='contactbgimg'></div>
           <div className='container shadow flexSB'>
             <div className='left row'>
               <iframe src={map} title="Google Map"></iframe>
             </div>
             <div className='right row'>
               <h1>Contact Us</h1>
               <p>Contact us for more details and information.</p>
               <div className='items grid2'>
                 <div className='box'>
                   <h4>ADDRESS:</h4>
                   <p>Kukatpally, Phase1, road number3, 3rd building 2nd floor</p>
                 </div>
                 <div className='box'>
                   <h4>Email:</h4>
                   <p>khanacademy@gmail.com</p>
                 </div>
                 <div className='box'>
                   <h4>Phone:</h4>
                   <p>+91 6281282021</p>
                 </div>
               </div>
               <form onSubmit={handleSubmit}>
                 <div className='flexSB'>
                   <input
                     type='text'
                     name='name'
                     placeholder='Name'
                     value={formData.name}
                     onChange={handleChange}
                   />
                   <input
                     type='email'
                     name='email'
                     placeholder='Email'
                     value={formData.email}
                     onChange={handleChange}
                   />
                 </div>
                 <input
                   type='text'
                   name='subject'
                   placeholder='Subject'
                   value={formData.subject}
                   onChange={handleChange}
                 />
                 <textarea
                   name='message'
                   cols='30'
                   rows='10'
                   placeholder='Create a message here...'
                   value={formData.message}
                   onChange={handleChange}
                 />
                 <button className='primary-btn' type='submit'>SEND MESSAGE</button>
               </form>
             </div>
           </div>
         </section>
       </div>
     </>
   );
};

export default Contact;
