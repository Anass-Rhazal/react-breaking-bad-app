import React from 'react';
import { FetchAPi } from '../utils/api';
import { useCart } from '../hooks/cart';
import { useRecoilValue } from 'recoil';
import { cartState } from '../recoil/atoms';




export default function CartList() {
    const dispatch = useCart()
    const items = useRecoilValue(cartState)

    function handleEditQuantity(id ,quantity) {
        dispatch('UPDATE_QUANTITY', {id , quantity : parseInt(quantity+'') })
    }

    function handleDeleteCart(id) {
        dispatch('DELETE_CART', {id })
    }

    console.log(items)
    return <div className="container">
        {items.map((i) => <Cart key={i.id} id={i.id} quantity={i.quantity} editQuantity={(e) => handleEditQuantity(i.id,e.target.value)} deleteCart={() => handleDeleteCart(i.id)} />)}
    </div>

}

function Cart({ id, quantity, editQuantity, deleteCart }) {
    const url = '/api/episodes/' + id

    return <FetchAPi url={url} >
        {
            (episode) => episode[0] &&
                <div className="row">
                    <div className="col-md-2">
                        <h5>{episode[0].title}</h5>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Quantity</label>
                            <input type="number" className="form-control" id="exampleFormControlInput1" value={quantity} onChange={editQuantity} placeholder="name@example.com" />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <button type="button" className="btn btn-danger" onClick={deleteCart} >Delete</button>
                    </div>
                </div>

        }
    </FetchAPi>


}




