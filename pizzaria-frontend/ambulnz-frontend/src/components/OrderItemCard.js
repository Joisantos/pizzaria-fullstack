import { Button } from "@mui/material"
import { ContainerLi } from "./OrderItemCard.styled"

function OrderItemCard(props) {
    const { pizza, removeFromCart } = props
    return (
        <ContainerLi>
            <p> Pizza {pizza.name} 
                - {pizza.price.toLocaleString(
                    'pt-br',
                    {style: 'currency', currency: 'USD'}
                )} 
                {" "} x {pizza.quantity} </p>
            <Button onClick={() => removeFromCart(pizza)}>Remover item</Button>
        </ContainerLi>
    )
}

export default OrderItemCard