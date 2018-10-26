import React from 'react';
import Product from '../Product/Product'

export default class Dashboard extends React.Component {
    

    render() {
        const { addTo, inventory } = this.props;

        return (

            <div>
                Dashboard
                {inventory.map((product, index) => 
                    addTo={addTo}
                    )}
                <Product />
            </div>
        )
    }
}