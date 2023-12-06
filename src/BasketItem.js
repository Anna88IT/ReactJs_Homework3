import React from "react";
import { IoChevronForwardSharp } from "react-icons/io5";
import { IoChevronBackOutline } from "react-icons/io5";
export const BasketItem = ({ toggleComplete, item, handleQuantityDecrease, handleQuantityIncrease, index }) => {

    return (
        <div className='item-container'>
            <div className='item-name' onClick={() => toggleComplete(index)}>
                <input type="checkbox" className="checkbox" defaultChecked={item.isSelected ? "checked" : ""}/>
                <span style={{textDecoration: item.isSelected ? "line-through" : "none"}}>{item.itemName}</span>

            </div>
            <div className='quantity'>
                <button onClick={() => handleQuantityDecrease(index)}>
                    <IoChevronBackOutline style={{ color: '#ec645b' }}/>
                </button>
                <span> {item.quantity} </span>
                <button onClick={() => handleQuantityIncrease(index)}>
                    <IoChevronForwardSharp style={{ color: '#ec645b' }}/>
                </button>
            </div>
        </div>

    )
}
