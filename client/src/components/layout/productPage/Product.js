import React, {useContext,useState} from 'react'
import { useMediaQuery } from 'react-responsive'

//Import contexts
import CartContext from '../../../context/cart/cartContext'

const Product = ({productData}) => {

    //Local State
    const [productAmount, setProductAmount] = useState(1)

    //Destructure context + init
    const cartContext = useContext(CartContext);
    const {addToCart, changeCartAmount, products} = cartContext;

    //Set media query for reposnisve size 
    const isTablet  = useMediaQuery({ minWidth: 481, maxWidth: 780 })
    const isDesktop  = useMediaQuery({ minWidth: 1024 })
    const isMobile  = useMediaQuery({ maxWidth: 480 })

    //Determine which image to display for profuct based on screen size
    let productImage;

    if(isDesktop){
       productImage = '/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg'
    } else if (isTablet){
       productImage = '/assets/product-xx99-mark-two-headphones/tablet/image-product.jpg'
    }else {
       productImage = '/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg'
    }

    //Handle set product amount 
    const handleAddToCart = (product) => {

        let newAmount;
        
        //See if product is already in cart. If it is, update product amount. If not, add product to cart
        if(products.some((item) => item.name === product.name)){
            products.forEach((item) => {
                if(item.name === product.name) { 
                    newAmount = product.amount + item.amount;
                    changeCartAmount(product.name, newAmount);
                    };
                    setProductAmount(1);
            })
        } else {
            addToCart(product)
        }        

        setProductAmount(1)
        return;
    }

    return (
        <div id = 'category-product-row' className = 'row' style = {rowStyle}>
                    <div className = 'col-lg-6 col-md-5'>
                        <img src = {`${productData.image.desktop}`} className = 'img-fluid h-100' style = {imageStyle}/>
                    </div>
                    <div className = 'col-lg-6 col-md-7' style = {textContainerStyle}>
                        <div className = 'category-product-text-container product-container' style = {textStyle}>
                            <h6  className = 'mb-3' style = {newProductStyle} >NEW PRODUCT</h6>
                            <h1 className = 'mb-4 category-product-title product-title' style = {titleStyle}>{productData.name}</h1>
                            <p className = 'mb-4 category-product-subtext' style = {productSubtextStyle}>{productData.description}</p>

                            <p style = {priceStyle} className = 'product-price mb-3'><strong>$ {productData.price}</strong> </p>

                            <div className = 'product-add-to-cart-container d-flex mt-2'>
                                <input  className = 'mr-2' type = 'number' min = '1'  value = {productAmount} style = {inputStyle} onChange = {(e) => setProductAmount(Number(e.target.value))}/>

                             <button className = 'btn btn-lg btn-light-custom d-flex text-white add-to-cart-btn' onClick = {() => handleAddToCart({name:productData.name, price:productData.price,amount:productAmount,image:productData.image  })}>ADD TO CART</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
    )
}

const rowStyle = {
    minHeight:'560px',
    marginTop:'160px',
    marginBottom:'160px'
}

const imageStyle = {
    borderRadius:'8px'
}

const textContainerStyle = {
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
}
const textStyle = {
    paddingLeft:'125px'
}

const newProductStyle = {
    letterSpacing:'10px',
    fontSize:'14px',
    color:'#D87D4A'
}
const titleStyle = {
    letterSpacing:'1.5px',
    fontSize:'40px',
    fontWeight:'bold'
}

const priceStyle = {

}

const inputStyle = {
    width:'120px',
    height:'48px'
}

const productSubtextStyle = {
    opacity:'0.5',
    fontSize:'15px'
}



export default Product
