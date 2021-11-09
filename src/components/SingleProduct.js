import React, { useContext } from 'react'
// import {useLocation} from 'react-router'
import { useParams, useLocation } from 'react-router';
import { MyContext } from '../App';

export default function SingleProduct() {
    // const params = useParams()

    // const { products } = useContext(MyContext)

    // let item = products.find(item => item.id === Number(params.id))

    // console.log(params);

    const {state} = useLocation()

    return (
        <div>
            {state && <div>
                <img src={state.image} width="400" height="400" alt="" />
                <div>
                    <h1>{state.title}</h1>
                    <h2>{state.description}</h2>
                    <h2>{state.price}</h2>

                </div>
            </div>

            }

        </div>
    )
}
