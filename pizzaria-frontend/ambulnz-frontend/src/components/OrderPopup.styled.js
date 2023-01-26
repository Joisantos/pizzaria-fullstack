import styled from "styled-components"

export const ContainerDiv = styled.div`
    border: 3px solid #FF5C28;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    background-color: #FAB289;

    > div {
        position: relative;
        width: 100%;
        height: 100%;
        color: #363636;

        .close-popup {
            position: absolute;
            top: 0;
            left: 100%;
            transform: translateX(-100%);

            padding: 2px 5px;

            width: auto;

            :hover {
                cursor: pointer;
                font-weight: bold;
                background-color: lightgray;
            }
        }

    }
`