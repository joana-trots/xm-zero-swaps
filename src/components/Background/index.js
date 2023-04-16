import './index.sass';
import useScrollPosition from '../ScrollPosition/scrollPosition';
const Background = () => {
    const pos = useScrollPosition(-0.1);
    return <> 
        <div className='bg'>
            <div className='image-bg--intersect-left bg-img'></div>
            <div className='image-bg--intersect-right bg-img'></div>
            <div className='image-bg--sprite-1 bg-img' style={{ backgroundPositionY: pos }}></div>
            <div className='image-bg--sprite-2 bg-img' style={{ backgroundPositionY: pos }}></div>
        </div>
    </>
}
export default Background;