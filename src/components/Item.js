import React from 'react'
import { Card } from 'react-bootstrap'
import Zoom from 'react-reveal/Zoom';


const Item = ({dataItems}) => {
  return (
    <div>
    {
       dataItems.length>0 ?(dataItems.map((item,index)=>{
           return ( 
            <Zoom >
            <Card key={index} className='d-flex flex-row my-2'>
                            <Card.Img className='img-item ' variant="top" src={item.imgURL} />
                            <Card.Body>
                            <Card.Title className='d-flex justify-content-between'>
                                <div className='item-title'>{item.title}</div>
                                <div style={{color:"#b45b35"}}>{item.price}<span>$</span></div>
                    
                                </Card.Title>
                    
                              <Card.Text>
                               <div className='item-desc'>  {item.des}</div>
                              </Card.Text>
                            </Card.Body>
                          </Card>
                          </Zoom>
)
       })):<h3>there are no data now</h3>
    }
    
    </div>
  )
}

export default Item
