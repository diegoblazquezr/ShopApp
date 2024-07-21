import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCart,decreaseQuantity, increaseQuantity} from "../../../redux";


const Cart = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cartItems);
    useSelector(state => state.numberItems);

    let TotalCart = 0;
    items.forEach(item => {
        TotalCart += item.quantity * item.price;
    });

    return (
        <table className="table">
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, i) => {
                    return (
                        <tr key={i} i={i}>
                            <td><button style={{ cursor: "pointer" }} onClick={() => {
                                dispatch(deleteCart(i))
                            }}><svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></button></td>
                            <td>{item.title}</td>
                            <td><img src={item.image} alt={item.title} style={{ width: '100px', height: '80px' }} /></td>
                            <td>{item.price} $</td>
                            <td>
                                <button style={{ margin: '2px', cursor: "pointer" }} onClick={() => {
                                    dispatch(decreaseQuantity(i))
                                }}><svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M200-440v-80h560v80H200Z"/></svg></button>
                                <span>{item.quantity}</span>
                                <button style={{ margin: '2px', cursor: "pointer" }} onClick={() => {
                                    dispatch(increaseQuantity(i))
                                }}><svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg></button>
                            </td>
                            <td><b>{Number(item.price * item.quantity).toFixed(2)} $</b></td>
                        </tr>
                    )
                })}
                <tr className="trTotal">
                    <td colSpan="5">Total: </td>
                    <td><b>{Number(TotalCart).toFixed(2)} $</b></td>
                </tr>
            </tbody>

        </table>
    )
}


export default Cart