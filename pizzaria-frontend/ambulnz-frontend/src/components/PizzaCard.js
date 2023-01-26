import { Button } from "@mui/material"
import { PizzaContainer } from "./PizzaCard.styled"


function PizzaCard(props) {
    const { pizza, addToCart } = props

    return (
        <PizzaContainer>
            <img src="https://i2.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/pizza-png-fundo-transparente19.png?fit=696%2C432&ssl=1"/>
            <h3>{pizza.name}</h3>
            <p className="card-price">
                {pizza.price.toLocaleString(
                    'pt-br',
                    { style: 'currency', currency: 'USD' }
                )}
            </p>
            <p>
                {pizza.ingredients.map((item) => {
                    return (
                        <span key={item}>{`${item} `}</span>
                    )
                })}
            </p>
            <Button 
                onClick={() => addToCart(pizza)}>Adicionar ao carrinho
            </Button>
        </PizzaContainer>
    )

}

export default PizzaCard