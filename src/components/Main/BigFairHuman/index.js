import './index.sass';
import img_5 from '../../../assets/icons/shield-icon.svg';
import img_6 from '../../../assets/icons/people-icon.svg';
import img_7 from '../../../assets/icons/award-icon.svg';
import img_8 from '../../../assets/icons/support-icon.svg';

const BigFairHuman = () => {
    
    return <> 
        <section className="big-fair-human">
            <div className="container">
                <div className="big-fair-human__inner">
                    <div className="big-fair-human__title">
                        <hr className="divider--red"></hr>
                        <h5>Big<span className="red-text">.</span> Fair<span className="red-text">.</span> Human<span className="red-text">.</span></h5>
                        <p className="promo-text">Learn why <b>over 5 million clients choose XM</b> as&nbsp;their trusted online broker.</p>
                    </div>
                    <div className="big-fair-human__content">
                        <article className="big-fair-human__content--article">
                            <img src={img_5} alt="icon" />
                            <h6>Authorised and Regulated</h6>
                            <p>At&nbsp;XM, we&nbsp;adhere to&nbsp;all regulatory standards and are fully authorised and regulated by&nbsp;FSC.</p>
                        </article>
                        <article className="big-fair-human__content--article">
                            <img src={img_6} alt="icon" />
                            <h6>Committed and Fair</h6>
                            <p>We operate with complete transparency and adhere to the highest professional and ethical standards.</p>
                        </article>
                        <article className="big-fair-human__content--article">
                            <img src={img_7} alt="icon" />
                            <h6>Multi-Award-Winning</h6>
                            <p>Over the years we have received over 40&nbsp;awards for the quality of our products and services.</p>
                        </article>
                        <article className="big-fair-human__content--article">
                            <img src={img_8} alt="icon" />
                            <h6>24/7 Support</h6>
                            <p>Our support agents are on hand 24/7 to answer your questions or assist you with any issues.</p>
                        </article>
                    </div>
                        
                   
                  
                </div> 
            </div>
        </section>
    </>
}
export default BigFairHuman;