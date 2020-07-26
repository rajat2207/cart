import React from 'react'; 

const CartItem = (props) => {
    

    // increaseQuantity = () => {
        
        //setState form 1
        // this.setState({
        //     qty: this.state.qty+1
        // });

        //setState form 2- if prevState required use this
    //     this.setState((prevState)=>{
    //         return{
    //             qty: prevState.qty+1
    //         }
    //     });

    // }

    // decreaseQuantity = () => {

    //     const {qty} = this.state;

    //     if(qty === 0){
    //         return;
    //     }

    //     this.setState((prevState)=>{
    //         return{
    //             qty: prevState.qty-1
    //         }
    //     });
    // }
    const {price,title,qty,id} = props.product;
    const {product,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct} = props;
    return(
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} />
            </div>
            <div className="right-block">
                <div style={ {fontSize:25} }>{title}</div>
                <div style={ {color:'#777'} }>Rs {price}</div>
                <div style={ {color:'#777'} }>Qty: {qty}</div>
                <div className="cart-item-actions">
                    {/* Buttons */}
                    <i 
                    className="fas fa-plus-circle action-icons"
                    onClick={()=>{onIncreaseQuantity(product)}}
                    ></i>
                    <i 
                    className="fas fa-minus-circle action-icons"
                    onClick={()=>{onDecreaseQuantity(product)}}
                    ></i>
                    <i className="fas fa-trash-alt action-icons"
                    onClick={()=>{onDeleteProduct(id)}}
                    ></i>
                </div>
            </div>
        </div>
    );
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