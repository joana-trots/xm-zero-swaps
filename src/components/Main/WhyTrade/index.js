import './index.sass';
import img_1 from '../../../assets/icons/fast-execusion-icon.png';
import img_2 from '../../../assets/icons/competitive-pricing-icon.png';
import img_3 from '../../../assets/icons/tech-icon.png';
import img_4 from '../../../assets/icons/dollar-icon.png';

const WhyTrade = () => {
    return <> 
        <section className="whyTrade">
            <div className="container">
                <div className="whyTrade__inner">
                    <div className="whyTrade__title">
                        <h2>Why <b>Trade</b> with XM?</h2>
                        <hr className="divider" />
                        <p className="promo-text">We&nbsp;have been providing traders around the world with the same <b>premium experience</b> for over a&nbsp;decade. As&nbsp;an&nbsp;<b>industry-leader</b>, we&nbsp;know what the modern trader needs to&nbsp;be&nbsp;successful in&nbsp;the markets.</p>
                    </div>
                   <div className="whyTrade__pannels">
                    <article className="whyTrade__pannel-item whyTrade__pannel-item--1">
                        <h6>Superior Trade Execution</h6>
                        <hr className="divider" />
                        <p>99% of trades are executed in <b>less than a second</b>, with no requotes or&nbsp;rejections.</p>
                        <img src={img_1} alt="icon"></img>
                    </article>
                    <article className="whyTrade__pannel-item whyTrade__pannel-item--2">
                        <h6>Competitive Pricing</h6>
                        <hr className="divider" />
                        <p>We offer some of the <b>lowest spreads</b> and we don’t charge commissions.</p>
                        <img src={img_2} alt="icon"></img>
                    </article>
                    <article className="whyTrade__pannel-item whyTrade__pannel-item--3">
                        <h6>Advanced Technology</h6>
                        <hr className="divider" />
                        <p>Trade on <b>MT4</b> or <b>MT5</b>, with expert tools, across desktop, web and mobile.</p>
                        <img src={img_3} alt="icon"></img>
                    </article>
                    <article className="whyTrade__pannel-item whyTrade__pannel-item--4">
                        <h6><br />Start with $5</h6>
                        <hr className="divider" />
                        <p>Start trading your preferred instruments with as little as a <b>$5 minimum deposit.</b></p>
                        <img src={img_4} alt="icon"></img>
                    </article>
                   </div>
                </div> 
            </div>
        </section>
    </>
}
export default WhyTrade;