import React from 'react'
import Modal from "react-modal"; 

//  const Option = props => {
//   return (
//     <div>
//       {props.optionText}
//       <button
//         onClick={e => {
//           props.handleDeleteOption(props.optionText);
//         }}
//       >
//         Modal for delete
//       </button>
//     </div>
//   );
// };

const Option = props => {
  return (
    <div className="option">
      <p className="option__text">{props.count}. {props.optionText}</p>
      <button className="button button--link"
        onClick= {props.handleOpenModalRemove}
      >
         Remove
      </button>
    </div>
  );
};

 



export default Option;