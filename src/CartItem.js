import React from 'react'; 

class CartItem extends React.Component{
    constructor(){
        super();
        this.state ={
            price: 999,
            title: 'Phone',
            qty:1,
            img: ''
        }
    }

    increaseQuantity = () => {
        console.log('this', this.state);
    }

    render(){
        const {price,title,qty} =this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={ {fontSize:25} }>{title}</div>
                    <div style={ {color:'#777'} }>Rs {price}</div>
                    <div style={ {color:'#777'} }>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <i 
                        className="fas fa-plus-circle action-icons"
                        onClick={this.increaseQuantity.bind(this)}
                        ></i>
                        <i 
                        className="fas fa-minus-circle action-icons"
                        onClick={this.decreaseQuantity}
                        ></i>
                        <i className="fas fa-trash-alt action-icons"
                        onClick={this.deleteQuantity}
                        ></i>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image:{
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;