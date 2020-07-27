import React from 'react'

function Card({items}) {
    const itemList=items.length?(
        items.map(item=>{
            return(
                <div className="collection-item row" key={item.id} >
                    <div className="col" style={{backgroundColor:"white"}}>
                    <h6 style={{color:"red",backgroundColor:"white"}}>Expense</h6>
                    <div style={{backgroundColor:"white"} }>
                    <span>{item.content_ex}</span>
                    <br/>
                    <span>Rs.{item.price_ex}</span>
                    <br/>
                    </div>
                    </div>
                    <div className="col" style={{backgroundColor:"white"}}>
                    <h6 style={{color:"green",backgroundColor:"white"} }>Income</h6>               
                    <div style={{backgroundColor:"white"} }>
                    <span>{item.content_in}</span>
                    <br/>
                    <span>Rs.{item.price_in}</span>
                    <br/>
                    </div>
                    </div>
                    
                    
                    
                </div>
            )
        })
    ):
        (<p className="center">You have no expenses nor savings,add something to your list</p>)
    

    return (
        <div className="todos collection">
            {itemList}
        </div>
    )
}

export default Card

