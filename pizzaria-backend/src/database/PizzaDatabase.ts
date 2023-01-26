import { IPizzaDB, IPizzasIngredientsDB, Pizza } from "../models/Pizza"
import { BaseDatabase } from "./BaseDatabase"

export class PizzaDatabase extends BaseDatabase {
    public static TABLE_PIZZAS = "Ambulnz_Pizzas"
    public static TABLE_INGREDIENTS = "Ambulnz_Ingredients"
    public static TABLE_PIZZAS_INGREDIENTS = "Ambulnz_Pizzas_Ingredients"

    public toPizzaDBModel = (pizza: Pizza): IPizzaDB => {
        return {
            name: pizza.getName(),
            price: pizza.getPrice()
        }
    }

    public getPizzas = async (): Promise<IPizzaDB[]> => {
        const result: IPizzaDB[] = await BaseDatabase
            .connection(PizzaDatabase.TABLE_PIZZAS)
            .select()
        
        return result
    }

    public getIngredients = async (pizzaName: string): Promise<string[]> => {
        const result: IPizzasIngredientsDB[] = await BaseDatabase
            .connection(PizzaDatabase.TABLE_PIZZAS_INGREDIENTS)
            .select("ingredient_name")
            .where({pizza_name: pizzaName})

        return result.map(item => item.ingredient_name) 
    }
}

