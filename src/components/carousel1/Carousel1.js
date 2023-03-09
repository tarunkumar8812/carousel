import './carousel1.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'; // install this using -> 'npm i react-responsive-carousel'
const Carousel1 = () => {
    return (
        // <div className='outer-box'>
        <Carousel className='main-slide'>
            <div className='imgBox'>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/hobbiton-lake.jpg" alt='imgSrc' />
                <p className="legend">Legend 1</p>
                {/* <lable className="lab">Legend 1</lable> */}
            </div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfsMXmgAWzxHQ_LZ9s96rkvny7Q4SGOyQ3gSPxGhiEV10a78Fo5n9FUOju3cQHq9gaOyg&usqp=CAU" alt='imgSrc' />
                <p className="legend">Legend 2</p>
                {/* <lable className="lab">Legend 2</lable> */}
            </div>
            <div>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/hobbiton-lake.jpg" alt='imgSrc' />
                <p className="legend">Legend 3</p>
                {/* <lable className="lab">Legend 3</lable> */}
            </div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfsMXmgAWzxHQ_LZ9s96rkvny7Q4SGOyQ3gSPxGhiEV10a78Fo5n9FUOju3cQHq9gaOyg&usqp=CAU" alt='imgSrc' />
                <p className="legend">Legend 4</p>
                {/* <lable className="lab">Legend 2</lable> */}
            </div>
        </Carousel>
        // </div>
    )
}

export default Carousel1