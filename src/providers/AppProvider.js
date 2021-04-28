import React from 'react'
import AppContext from '../contexts/AppContext'

class AppProvider extends React.Component{
    state = {
        isAuthenticated: false,
        cartItem: [
            {
                id: 1,
                itemName: "Grilled Chicken",
                itemImage: "/uploads/image1.png",
                itemQuantity: 3,
                itemPrice: 2000,
            },
            {
                id: 2,
                itemName: "Grilled Chicken",
                itemImage: "/uploads/image1.png",
                itemQuantity: 3,
                itemPrice: 2000,
            },
            {
                id: 3,
                itemName: "Grilled Chicken",
                itemImage: "/uploads/image1.png",
                itemQuantity: 3,
                itemPrice: 2000,
            },
            {
                id: 4,
                itemName: "Grilled Chicken",
                itemImage: "/uploads/image1.png",
                itemQuantity: 3,
                itemPrice: 2000,
            },
            {
                id: 5,
                itemName: "Grilled Chicken",
                itemImage: "/uploads/image1.png",
                itemQuantity: 3,
                itemPrice: 2000,
            },
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

    render(){
        return(
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppProvider
