import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { BasketItem } from "./BasketItem";
import { itemsData } from "./ItemsData";

export const Basket = () => {
    const [items, setItems] = useState(itemsData);
    const [inputValue, setInputValue] = useState('');
    const [totalItemCount, setTotalItemCount] = useState(itemsData.reduce((acc, item) => acc + item.quantity, 0));

    const handleAddButtonClick = () => {
        const newItem = {
            id: Date.now(),
            itemName: inputValue,
            quantity: 1,
            isSelected: false,
        };
        const newItems = [...items, newItem];

        setItems(newItems);
        setInputValue('');
        calculateTotal();
    };

    const handleQuantityIncrease = (index) => {
        setTotalItemCount(totalItemCount + 1);
        items[index].quantity++;
    };

    const handleQuantityDecrease = (index) => {

        if (items[index].quantity > 0) {
            setTotalItemCount(totalItemCount - 1);
            items[index].quantity--;
        }

    };

    const calculateTotal = () => {
        const totalItemCount = items.reduce((total, item) => {
            return total + item.quantity;
        }, 1);

        setTotalItemCount(totalItemCount);
    };

    const toggleComplete = (index) => {
        items[index].isSelected = !items[index].isSelected;
        console.log(items);
    }

    return (
        <div className='app-background'>
            <div className='main-container'>
                <div className='add-item-box'>
                    <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} className='add-item-input' placeholder='Add an item...' />
                    <button><FontAwesomeIcon style={{color: "#ec645b"}} icon={faPlus} onClick={() => handleAddButtonClick()} /></button>
                </div>
                <div className='item-list'>
                    {items.map((item, index) => (
                        <BasketItem
                            key={item.id}
                            item={item}
                            handleQuantityIncrease={handleQuantityIncrease}
                            handleQuantityDecrease={handleQuantityDecrease}
                            toggleComplete={toggleComplete}
                            index={index}
                        />
                    ))}
                </div>

                <div className='total'>Total: {totalItemCount}</div>
            </div>
        </div>
    );
}