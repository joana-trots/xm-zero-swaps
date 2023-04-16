import './index.sass';
import useScrollPosition from '../../ScrollPosition/scrollPosition';
const Top = () => {
    const pos = useScrollPosition(-0.25);
    return <> 
        <section className="top">
            <div className="container">
                <div className="top__inner">
                    <p className="uptitle">Trade with</p>
                    <h1><strong>Zero Swaps</strong> on All XM Ultra Low Accounts for more than 25 instruments!</h1>
                    <p className="promo-text">Enjoy spreads <b>as&nbsp;low as&nbsp;0.6 pips</b> and <b>leverage up&nbsp;to&nbsp;1000:1</b>&nbsp;on instruments like <b>EURUSD, USDJPY, EURJPY, GBPUSD,</b> and <b>Gold</b>.</p>
                    <a className="btn" href="#registration" title="Open Account">Open Account</a>
                    <p>New to trading? Try a <a className="underline" href="#" title="Demo account">Demo account.</a></p>
                    <p className="small-text">Terms and Conditions apply<span className="red-text">*</span>. To read the full T&Cs, <a className="red-text" href="#" title="Read T&C">click here.</a></p>
                </div> 
            </div>
            <div className='bg-top'>
                <div className='top__image-bg--tint bg-img'></div>
                <div className='top__image-bg--sprite-left bg-img' style={{ backgroundPositionY: pos }}></div>
                <div className='top__image-bg--sprite-right bg-img' style={{ backgroundPositionY: pos }}></div>
            </div>
        </section>
        
    </>
}

export default Top;