import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../Context';

export default class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title title="Mobiles" />
                        <div className="row">
                            <ProductConsumer>
                                {(value) => {
                                    return value.products.map(product => {
                                        return<Product key={product.id} product={product} />;
                                })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            );
            }
}