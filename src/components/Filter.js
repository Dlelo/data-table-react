import React from 'react'

export const Filter = ({filter, setFilter})=>{
 return(
     <div className="radio-filter">
         <input
        type="radio"
        defaultChecked
        value=''
        name="cond"
        onChange={(event) => setFilter(event.target.value)}
      />
      All
      <input
        type="radio"
        value="Entertainment"
        name="cond"
        onChange={(event) => setFilter(event.target.value)}
      />
      Entertainment
      <input
        type="radio"
        value="Income"
        name="cond"
        onChange={(event) => setFilter(event.target.value)}
      />
      Income
       <input
        type="radio"
        value="Food"
        name="cond"
        onChange={(event) => setFilter(event.target.value)}
      />
      Food
      <input
        type="radio"
        value="Fashion"
        name="cond"
        onChange={(event) => setFilter(event.target.value)}
      />
      Fashion
       <input
        type="radio"
        value="Gift"
        name="cond"
        onChange={(event) => setFilter(event.target.value)}
      />
      Gift
      <input
        type="radio"
        value="ATM"
        name="cond"
        onChange={(event) => setFilter(event.target.value)}
      />
      ATM
      <input
        type="radio"
        value="Transportation"
        name="cond"
        onChange={(event) => setFilter(event.target.value)}
      />
     Transportation
     <input
        type="radio"
        value="Housing"
        name="cond"
        onChange={(event) => setFilter(event.target.value)}
      />
     Housing
     <input
        type="radio"
        value="Misery"
        name="cond"
        onChange={(event) => setFilter(event.target.value)}
      />
     Misery



     </div>
 )
}


export default Filter