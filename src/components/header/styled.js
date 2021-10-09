import styled from "styled-components";

export const AreaHeader = styled.div`
    height: 60px;
    background-image: linear-gradient(to right, #F35D26, #370d44);
    color: #fff;
    
    .container{
        padding: 5px 20px;
        display: flex;
        align-items: center;
    }

        .logo{
            flex: 1;

            img{
                width: 60px;
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