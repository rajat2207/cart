import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import * as firebase from 'firebase';

class App extends React.Component {

  constructor(){
    super();
    
    this.state = {
      products:[],
      loading:true
    }

    this.db = firebase.firestore();
  }

  componentDidMount(){
    // firebase
    // .firestore()
    // .collection('products')
    // .get()
    // .then((snapshot) => {
    //   console.log(snapshot);

    //   snapshot.docs.map((doc) => {
    //     console.log(doc.data());
    //     return '';
    //   })

    //   const products = snapshot.docs.map((doc) => {

    //     const data=doc.data();
    //     data['id']=doc.id;

    //     return data;
    //   })

    //   this.setState({
    //     products,
    //     loading:false
    //   })

    // })

    this.db
      .collection('products')
      .onSnapshot((snapshot) => {
        console.log(snapshot);

        snapshot.docs.map((doc) => {
          console.log(doc.data());
          return '';
        })

        const products = snapshot.docs.map((doc) => {

          const data=doc.data();
          data['id']=doc.id;

          return data;
        })

        this.setState({
          products,
          loading:false
        })

      })
    }

  handleIncreaseQuantity = (product)=>{
      // console.log('Hey please increase the quantity of this product', product);
      const {products} = this.state;
      const index =products.indexOf(product);
      // products[index].qty+=1;
      // this.setState({
      //     products
      // });

      const docRef = this.db.collection('products').doc(products[index].id)

      docRef
        .update({
          qty : products[index].qty+1
        })
        .then(() => {
          console.log('Document updated successfully')
        })
        .catch((err) => {
          console.log("Error", err)
        })
  }

  handleDecreaseQuantity = (product)=>{
      // console.log('Hey please decrease the quantity of this product', product);
      const {products} = this.state;
      const index =products.indexOf(product);

      if(products[index].qty===0){
          return;
      }

      // products[index].qty-=1;
      // this.setState({
      //     products
      // });

      const docRef = this.db.collection('products').doc(products[index].id);

      docRef
        .update({
          qty:products[index].qty-1
        })
        .then(() => {
          console.log("Document updated succssfully");
        })
        .catch((err) => {
          console.log("Error ",err)
        })
  }

  handleDeleteProduct = (id)=>{
      // const {products} = this.state;

      // const items = products.filter((item)=> item.id !==id);

      // this.setState({
      //     products: items
      // })

      const docRef=this.db.collection('products').doc(id);

      docRef
        .delete()
        .then(() => {
          console.log("Item Deleted Successfully");
        })
        .catch((err) => {
          console.log("error",err);
        })
  }

  getCartCount = () =>{
    const {products} = this.state;

    let count=0;

    products.forEach((product) => {
      count+=product.qty;
    })

    return count;
  }

  getTotalPrice = () => {
    const {products} = this.state;

    let amount=0;

    products.forEach((product) => {
      amount+=(product.qty*product.price);
    })

    return amount;
  }

  addProduct = () => {
    this.db
      .collection('products')
      .add({
        img:'',
        price: 900,
        qty: 3,
        title: 'washing machine'
      })
      .then((docRef) => {
        console.log('Product has been added', docRef);
      })
      .catch((err) => {
        console.log('Error :',err);
      })
  }

  render(){

    const {products,loading}=this.state;

    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        {/* <button onClick={this.addProduct} style={{padding: 20, fontSize:20}}>Add a Product</button> */}
        <Cart
        products={products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteProduct={this.handleDeleteProduct}
        />
        {loading && <h1>Loading Products....</h1>}
        <div style={ { fontSize:20, padding:10} }>TOTAL: Rs.{this.getTotalPrice()}</div>
      </div>
    );
  }
}

export default App;
