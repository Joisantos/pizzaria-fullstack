import styled from "styled-components"

export const ContainerSection = styled.section`
    display: columns;
    position: relative;
    width: 30em;
    border: 10px solid #FF5C28;
    left: 1440px;
    top: 150px;

    background-color: #DCDCDC;

    h1 {
        font-size: 1.5em;
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