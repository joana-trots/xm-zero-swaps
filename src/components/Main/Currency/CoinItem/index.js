const CoinItem = (props) => {
    return (
        <div className={"currency__card currency__card--" + props.coins.symbol}>
            <div className="currency__card--header">
                <div className="currency__card--icon"></div>
                <p className="currency__card--symbol">{props.coins.symbol.toUpperCase()}</p>
                <p className="currency__card--name">{props.coins.name.toUpperCase()}</p>
            </div>
            <hr className="currency__card--divider" />
            <div className="currency__card--price">${Number(props.coins.price_usd).toLocaleString()}</div>
            <div className={Number(props.coins.percent_change_24h) >=0 ? "currency__card--percent percent--up" : "currency__card--percent percent--down"}>{Math.abs(Number(props.coins.percent_change_24h))}%</div>
        </div>
    )
}

export default CoinItem;