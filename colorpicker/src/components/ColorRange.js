import React from 'react'

export function ColorRange(props){
   const {id,name,value,onChange}=props;
 return(
   <div>
       <span>{name}</span>
       <input
         type="range"
         id={id}
         value={value}
         onChange={onChange}
         min="1"
         max="255"
         step="1"
         >

        </input>
   </div>
 );
};