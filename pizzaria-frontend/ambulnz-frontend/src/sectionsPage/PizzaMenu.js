import axios from "axios"
import { useEffect, useState } from "react"
import PizzaCard from "../components/PizzaCard"
import { BASE_URL } from "../constants"
import { ContainerSection } from "./PizzaMenu.styled"

function PizzaMenu(props) {
    const { addToCart } = props

    const [pizzas, setPizzas] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}/pizzas`)
            .then((res) => {
                setPizzas(res.data.pizzas)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <ContainerSection>
            <ul>
                {pizzas.map((pizza) => {
                    return (
                        <PizzaCard 
                        pizza={pizza} 
                        key={pizza.name}
                        addToCart={addToCart}
                        />
                    )
                })}
            </ul>
        </ContainerSection>
    )
}

export default PizzaMenu