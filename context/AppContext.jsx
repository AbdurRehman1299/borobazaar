'use client';
import { useUser } from "@clerk/nextjs";
import { productsDummyData } from "@/lib/assets";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext);
}

export const AppContextProvider = (props) => {
    const currency = process.env.NEXT_PUBLIC_CURRENCY;
    const router = useRouter();
    const { user } = useUser();

    const [products, setProducts] = useState([]);
    const [isSeller, setIsSeller] = useState(false);
    const [cartItems, setCartItems] = useState({});

    const fetchProductData = async () => {
        setProducts(productsDummyData);
    }

    useEffect(() => {
        if (user) {
            setIsSeller(user.publicMetadata?.role === "seller");
        } else {
            setIsSeller(false);
        }
    }, [user]);

    const addToCart = async (itemId) => {
        let cartData = structuredClone(cartItems);
        
        if (cartData[itemId]) {
            cartData[itemId] += 1;
        } else {
            cartData[itemId] = 1;
        }

        setCartItems(cartData);
    }

    const updateCartQuantity = async (itemId, quantity) => {
        let cartData = structuredClone(cartItems);

        if(quantity === 0) {
            delete cartData[itemId];
        } else {
            cartData[itemId] = quantity;
        }

        setCartItems(cartData);
    }

    const getCartCount = () => {
        let totalCount = 0;

        for (const items in cartItems) {
            if (cartItems[items] > 0) {
                totalCount += cartItems[items];
            }
        }

        return totalCount;
    }

    const getCartAmount = () => {
        let totalAmount = 0;

        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);

            if (cartItems[items] > 0) {
                totalAmount += itemInfo.offerPrice * cartItems[items];
            }
        }

        return Math.floor(totalAmount * 100) / 100;
    }

    useEffect(() => {
        fetchProductData();
    }, []);

    const value = {
        currency, router,
        isSeller, setIsSeller,
        products, fetchProductData,
        cartItems, setCartItems,
        addToCart, updateCartQuantity,
        getCartCount, getCartAmount,
        user
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}