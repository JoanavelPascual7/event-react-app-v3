import EventNewForm from "../components/EventNewForm";
import "../CSS/NewPage.css";


function New() {
  return (
    <div id="new-event-container"> 
      <EventNewForm/>
    </div>
  )
}

export default New;




// import React, { useState } from 'react';
// import EventNewForm from '../components/EventNewForm';
// import '../CSS/NewPage.css';

// function New() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div id="new-event-container">
//       <button className="open-modal-button" onClick={openModal}>
//         Open Modal
//       </button>
//       {isModalOpen && <EventNewForm openModal={isModalOpen} closeModal={closeModal} />}
//     </div>
//   );
// }

// export default New;
