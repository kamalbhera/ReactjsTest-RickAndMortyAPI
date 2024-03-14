import styled from 'styled-components';

export const ContainerCard = styled.div`
    width: 100%;
    // background-color: #151020;
    border-radius: 0.4rem;
    padding: 1rem;
    .image {
        width: 100%;
        height: 8.3rem;
        overflow: hidden;
        border-radius: 4px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .info {
        margin-top: 0.6rem;
        h3 {
            font-size: 0.8rem;
            margin-bottom: 0.8rem;
        }
        p {
            list-style: none;
            display: flex;
        }
        ul {
            list-style: none;
            display: flex;
            li {
                // display: block;
                // font-size: 0.4rem;
                // &:last-child {
                //     &:before {
                //         content: "";
                //         width: 4px;
                //         height: 4px;
                //         background-color: #FFFFFF;
                //         opacity: 0.4;
                //         display: inline-block;
                //         vertical-align: middle;
                //         border-radius: 50%;
                //         margin: 0 8px;
                //     }
                // }
            }
        }
    }
`