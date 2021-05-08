import React from 'react'
import AppContext from '../contexts/AppContext'

class AppProvider extends React.Component{
    state = {
        isAuthenticated: false,
        activeCategory: 1, 
        cartItem: [
            // {
            //     id: 1,
            //     itemName: "Grilled Chicken",
            //     itemImage: "/uploads/image1.png",
            //     itemQuantity: 3,
            //     itemPrice: 2000,
            // },
            // {
            //     id: 2,
            //     itemName: "Grilled Chicken",
            //     itemImage: "/uploads/image1.png",
            //     itemQuantity: 3,
            //     itemPrice: 2000,
            // },
            // {
            //     id: 3,
            //     itemName: "Grilled Chicken",
            //     itemImage: "/uploads/image1.png",
            //     itemQuantity: 3,
            //     itemPrice: 2000,
            // },
            // {
            //     id: 4,
            //     itemName: "Grilled Chicken",
            //     itemImage: "/uploads/image1.png",
            //     itemQuantity: 3,
            //     itemPrice: 2000,
            // },
            // {
            //     id: 5,
            //     itemName: "Grilled Chicken",
            //     itemImage: "/uploads/image1.png",
            //     itemQuantity: 3,
            //     itemPrice: 2000,
            // },
        ],
        categoryList: [
                {
                    id : 1,
                    categoryName: "Turkey",
                },
                {
                    id : 2,
                    categoryName: "Chicken",
                },
                {
                    id : 3,
                    categoryName: "Meal",
                },
                {
                    id : 4,
                    categoryName: "Fast Foods",
                },
            ],
        menuList: [
            {
                id: 1,
                itemName: "Grilled Chicken",
                itemImage: "/uploads/image1.png",
                itemQuantity: 3,
                itemPrice: 2000,
                itemRating: 4,
                isFavourite: false,
            },
            {
                id: 2,
                itemName: "Grilled Chicken",
                itemImage: "/uploads/image1.png",
                itemQuantity: 3,
                itemPrice: 2000,
                itemRating: 3,
                isFavourite: true,
            },
            {
                id: 3,
                itemName: "Grilled Chicken",
                itemImage: "/uploads/image1.png",
                itemQuantity: 3,
                itemPrice: 2000,
                itemRating: 2,
                isFavourite: true,
            },
            {
                id: 4,
                itemName: "Grilled Chicken",
                itemImage: "/uploads/image1.png",
                itemQuantity: 3,
                itemPrice: 2000,
                itemRating: 5,
                isFavourite: false,
            },
            {
                id: 5,
                itemName: "Grilled Chicken",
                itemImage: "/uploads/image1.png",
                itemQuantity: 3,
                itemPrice: 2000,
                itemRating: 1,
                isFavourite: false,
            },
        ]
    }

    componentDidMount(){
        if(localStorage.getItem('cart') !== null) this.setState({cartItem: JSON.parse(localStorage.getItem('cart') || "[]")})
    }

    componentWillUnmount(){
        localStorage.setItem('cart', JSON.stringify(this.state.cartItem))
    }

    componentDidUpdate(){
        localStorage.setItem('cart', JSON.stringify(this.state.cartItem));
    }

    getItemsPrice = () => {
        let itemsPrice = 0;
        this.state.cartItem.forEach(e => itemsPrice += (e.itemPrice * e.itemQuantity))
        return itemsPrice;
    }

    getItemsVAT = () => {
        return this.getItemsPrice() * 0.1;
    }

    getDeliveryCharge = () => {
        return 200;
    }

    getSubTotal = () => {
        return this.getItemsPrice() + this.getItemsVAT() + this.getDeliveryCharge();
    }

    render(){
        return(
            <AppContext.Provider value={{
                    state: this.state,
                    itemsVAT: this.getItemsVAT(),
                    itemsPrice: this.getItemsPrice(),
                    deliveryCharge: this.getDeliveryCharge(),
                    subTotal: this.getSubTotal(),
                    getCartItemQuantity: () => {
                        let cartItemQuantity = 0;
                        const newCartItem = this.state.cartItem.slice(); // Copy array
                        newCartItem.forEach(function(e){
                            cartItemQuantity = +cartItemQuantity + +e.itemQuantity
                        })
                        return cartItemQuantity;
                    },
                    updateCartItemQuantity: (e, index) => {
                        const newCartItem = this.state.cartItem.slice(); // Copy array
                        newCartItem[index].itemQuantity = e.target.value
                        this.setState({cartItem: newCartItem})
                    },
                    removeCartItem: (index) => {
                        const newCartItem = this.state.cartItem.slice();
                        newCartItem.splice(index, 1);
                        this.setState({cartItem: newCartItem})
                    },
                    addCartItem: (item) => {
                        const newCartItem = this.state.cartItem.slice(); //cloned array of cartitem
                        let elementIndex; // a variable to store element index
                        const isPresent = newCartItem.some(function(cartElement, i){
                            if(cartElement.id === item.id){ //check if element to be added is present in cartitem array
                                elementIndex = i; // store index of the element if found
                                return true; // return true and store in the variable
                            }else{
                                return false; // return false and store in the variable
                            }
                        });

                        if(isPresent){ // validate presence of item in the list
                            newCartItem[elementIndex].itemQuantity += 1 // increase item quantity if present
                        }else{
                            newCartItem.push(item)
                        }
                        // newCartItem.push(item);
                        this.setState({cartItem: newCartItem})
                    },
                    updateActiveCategory: (category) => {
                        this.setState({activeCategory: category})
                    }
                }}>

                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppProvider
