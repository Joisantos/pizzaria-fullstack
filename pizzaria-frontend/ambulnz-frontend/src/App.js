import OrderSummary from "./sectionsPage/OrderSummary";
import PizzaMenu from "./sectionsPage/PizzaMenu";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "./constants";
import OrderPopup from "./components/OrderPopup";
import { ContainerMain } from "./App.styled";


function App() {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  const [orderPopup, setOrderPopup] = useState({
    isActive: false,
    summary: {
      id: null,
      pizzas: null,
      total: null
    }
  })

  useEffect(() => {
    calculateTotal()
  }, [cart])

  const addToCart = (pizzaToAdd) => {
    const foundIndex = cart.findIndex((pizzaInCart) => {
      return pizzaInCart.name === pizzaToAdd.name
    })

    if (foundIndex >= 0) {
      const newCart = [...cart]
      newCart[foundIndex].quantity += 1

      setCart(newCart)
    } else {
      const newCart = [...cart]
      const newPizza = {
        name:pizzaToAdd.name,
        price: pizzaToAdd.price,
        quantity: 1
      }

      newCart.push(newPizza)

      setCart(newCart)
    }
  }

  const removeFromCart = (pizzaToRemove) => {
    if (pizzaToRemove.quantity > 1) {
      const newCart = cart.map((pizza) => {
        if (pizza.name === pizzaToRemove.name) {
          pizza.quantity -= 1
        }

        return pizza
      })

      setCart(newCart)

    } else {
      const newCart = cart.filter((pizza) => {
        return pizza.name !== pizzaToRemove.name
      })

      setCart(newCart)
    }
  }

  const calculateTotal = () => {
    const total = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    )

    setTotal(total)
  }

  const confirmOrder = async () => {
    try {
      const body = {
        pizzas: cart
      }

      const res = await axios.post(`${BASE_URL}/orders`, body)

      setOrderPopup({
        isActive: true,
        summary:res.data.order
      })

      setCart([])
      
    } catch (error) {
      
    }
  }

  const closePopup = () => {
    setOrderPopup({
      isActive: false,
      summary: {
        id: null,
        pizzas: null,
        total: null
      }
    })
  }

  return (
    <ContainerMain>
      <PizzaMenu addToCart={addToCart} />
      <OrderSummary 
        cart={cart}
        removeFromCart={removeFromCart}
        total={total}
        confirmOrder={confirmOrder}
      />
      {orderPopup.isActive
        && <OrderPopup
          order={orderPopup.summary}
          closePopup={closePopup}
        />
      }
    </ContainerMain>
  );
}

export default App;
