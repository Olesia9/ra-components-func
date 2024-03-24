import React from 'react'

class Description extends React.Component {

    render() {
        const searchPrice = items => (
            (items.toString().includes('.')) ? (items.toString().split('.').pop().length) : (0)
        )
        return (
            <>
                {this.props.item ? (
                        <div className="main-content">
                            <h2>{this.props.item.brand}</h2>
                            <h1>{this.props.item.title}</h1>
                            <h3>{this.props.item.description}</h3>
                            <div className="description">
                                {this.props.item.descriptionFull}
                            </div>
                            <div className="highlight-window mobile">
                                <div className="highlight-overlay"></div>
                            </div>
                            <div className="divider"></div>
                            <div className="purchase-info">
                                <div className="price">
                                    {this.props.item.currency}
                                    {searchPrice(this.props.item.price) === 0 ? this.props.item.price + '.00' :
                                        this.props.item.price.toFixed(2)}
                                </div>
                                <button>Добавить в корзину</button>
                            </div>
                        </div>
                    ) :
                    (<div></div>
                    )}
            </>
        );
    }
}

export default Description
