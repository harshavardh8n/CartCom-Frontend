// import Cart from "./Pages/Cart";

// import CartItem from "./Components/CartItem";

export const initialState = {
    cart: [],
    user: null,
    products: [],
};

export const getCartTotal = (cart)=>
    cart?.reduce((amount,item)=>Number(item.price)+Number(amount),0);


const reducer = (state,action)=>{

    // console.log(action);
    switch(action.type){    
        case 'ADD_TO_CART':
            console.log(action.cart);
            return{
                
                ...state,
                cart:[...state.cart,action.item]
                
            };
        case 'REMOVE_FROM_CART':
            const index = state.cart.findIndex(
                (CartItem)=>CartItem.id===action.id
            );
            let newCart = [...state.cart];

            if(index>=0){
                newCart.splice(index,1);
            }
            else{
                console.warn("cant remove product");
            }
            return{
                ...state,
                cart:newCart
            };

        case 'SET_USER':
            console.log("okay here");
            return{
                ...state,
                user:action.user,
            };

        default:
            return state;

    }
}

export default reducer;