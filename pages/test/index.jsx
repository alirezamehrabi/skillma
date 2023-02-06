// import React, { useState } from 'react'


// export default function PropsApp(){
//    const [counter, setCounter] = useState(0)

//    const updateMyCounter = () => {
//        setCounter(counter + 1)
//    }

//    return(
//     <>  
//         <hr></hr>
//         <h1>This is Parent</h1>
//         <h2>{counter}</h2>
//         <Child updateParent={updateMyCounter} />
//     </>
//    )
// }

// export default function Child(props){

//   return(
//       <>  
//           <hr></hr>
//           <h1>This is Child</h1>
//           <button
//               onClick={props.updateParent}
//           >
//               Update Parent Component
//           </button>
//       </>
//      )
//   }