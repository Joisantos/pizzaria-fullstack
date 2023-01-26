import styled from "styled-components"

export const PizzaContainer = styled.li`
    border: 1px #FF5C28;
    margin: 1em;

    display: flex;
    flex-direction: column;
    justify-content: center;

    h3 {
        text-align: center;
    }

    > button {
        background-color: #FF5C28;
        color: #F0F8FF;

        :hover {
                cursor: pointer;
                font-weight: bold;
                color: black;
        }
    }
`