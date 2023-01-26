import OrderItemCard from "../components/OrderItemCard"
import { Button } from "@mui/material"
import { ContainerSection } from "./OrderSummary.styled"


function OrderSummary(props) {
    const { cart, removeFromCart, total, confirmOrder } = props

    return (
        <ContainerSection>
            <h1>Resumo do pedido</h1>

            {cart.map((pizza) => {
                return (
                    <OrderItemCard 
                        key={pizza.name} 
                        pizza={pizza}
                        removeFromCart={removeFromCart}
                    />
                )
            })}
            
            <h2>
                Total: {
                    total.toLocaleString(
                    'pt-br',
                    { style: 'currency', currency: 'USD'}
                )}
            </h2>
            <Button onClick={confirmOrder}>Confirmar pedido</Button>
        </ContainerSection>
    )

}

export default OrderSummary