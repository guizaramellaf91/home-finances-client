import styled from "styled-components";

export const AreaHeader = styled.div`
    
    height: 60px;
    background-image: linear-gradient(to right, #F35D26, #370d44);
    color: #fff;
    
    @media screen and (max-width: 500px){
        width: 450px;
    }

    .container{
        padding: 10px 20px;
        display: flex;
        align-items: center;
    }
        .logo{
            flex: 1;
            img{
                margin-left: 5px;
                margin-right: 15px;
                width: 35px;
                background: transparent;
            }
            label{
                font-weight: lighter;
                font-size: 16px;
                position: absolute;
                margin-top: 10px;
            }
            @media screen and (max-width: 700px){
                label{
                    display: none;
                }
            }
        }

        nav{

            display: flex;

            ul{
                display: flex;
            }

                li{
                    list-style: none;
                    margin-left: 20px;
                    cursor: pointer;
                    &:hover{
                            color: #F58800
                    }
                }
                    a{
                        text-decoration: none;
                        color: #fff;

                        &:hover{
                            color: #F58800
                        }
                    }

            .avatar{
                display: flex;
                align-items: center;

                img{
                    width: 35px;
                    border-radius: 20px;
                    margin-left: 20px;
                    margin-right: 10px;
                    cursor: pointer;
                }

                label{
                    font-size: 14px;
                    cursor: pointer;
                    color: #ccc;
                }

                @media screen and (max-width: 600px){
                    label{
                        display: none;
                    }
                }
            }
        }
`;