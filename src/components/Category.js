import React from 'react'
import Fade from 'react-reveal/Fade';


const Category = ({filterData,allCategories}) => {
    const getCat=(cat)=>{
        filterData(cat)
        console.log("category",cat)

    }
  return (
    <div className='row pb-5 pt-2'>
        <div className='col-sm-12 d-flex justify-content-center'>
        <Fade left>
        {allCategories.length>0?(allCategories.map((cat)=>{
                return (        <button onClick={()=>getCat(cat)} style={{border:"solid 1px #b45b35"}} className='Btn mx-1 '>{cat}</button>
                )
            })):<h1>no categories</h1>}
        </Fade>
           

        </div>
      

    </div>
  )
}

export default Category
