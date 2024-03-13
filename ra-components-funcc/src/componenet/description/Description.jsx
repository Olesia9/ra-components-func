function Description({item}) {
    const searchPrice = items => (
        (items.toString().includes('.')) ? (items.toString().split('.').pop().length) : (0)
    )

    return (
        <>
            {item ? (
                    <div className="main-content">
                        <h2>{item.brand}</h2>
                        <h1>{item.title}</h1>
                        <h3>{item.description}</h3>
                        <div className="description">
                            {item.descriptionFull}
                        </div>
                        <div className="highlight-window mobile">
                            <div className="highlight-overlay"></div>
                        </div>
                        <div className="divider"></div>
                        <div className="purchase-info">
                            <div className="price">
                                {item.currency}
                                {searchPrice(item.price) === 0 ? item.price + '.00' :
                                    item.price.toFixed(2)}
                            </div>
                            <button>Добавить в корзину</button>
                        </div>
                    </div>
                ) :
                (<div></div>
                )}
        </>
    )
}

export default Description
