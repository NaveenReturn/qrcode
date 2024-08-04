import React from "react";


export const Header = ()=>{
     const Render = "i dont have to the lunch breack so please distop";
       const ary = ["apple","orange","mango"];
         const store = ary.map((items,index)=>{
         return <option key={index} >{items}</option>
     })

     return React.createElement("div",null,React.createElement("h1",null,`welcome`,React.createElement("span",null,"hiii")))

    // return React.createElement("div",null,React.createElement("p",{className:"danger"},"welcome again"),
    // React.createElement("h1",{className:"success"},Render),
    //   React.createElement("ul",{type:"circle"},store)
    //  )
}

// export const Header = () => {
    // const ary = ["apple","orange","mango"];

    // const store = ary.map((items,index)=>{
    //      return <option key={index} >{items}</option>
    //  })
 
 
    //  const Frueit = ()=>{
    //        return <ul  type="circle">
    //             <option>APPLE</option>
    //             <option>ORANGE</option>
    //             </ul>
    //  }
//   return (
//     <>
//       <div>
//          <h1 className="bannertext">Naveen Kumar</h1>
       
//       </div>
//      </>
//   )
// }
