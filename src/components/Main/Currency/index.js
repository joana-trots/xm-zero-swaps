import './index.sass';
import CoinItem from "./CoinItem";

const Currency = (props) => {
    return <> 
        <section className="currency">
            <div className="container">
                <div className="currency__inner">
                   {props.coins.map(coins => {
                        return <CoinItem coins={coins} key={coins.id} />
                   })}
                </div> 
            </div>
        </section>
    </>
}
export default Currency;