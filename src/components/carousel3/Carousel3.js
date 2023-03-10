import { useState } from 'react'
import './carousel3.css'
const Carousel3 = () => {


    const arr = [
        { name: "first", desc: "first img desc", imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/hobbiton-lake.jpg" }

        , { name: "second", desc: "second img desc", imgSrc: "https://picsum.photos/1024/480/?image=54" }

        , { name: "third", desc: "third img desc", imgSrc: "https://www.w3.org/TR/2019/NOTE-wai-aria-practices-1.1-20190207/examples/carousel/carousel-1/images/lands-endslide__800x600.jpg" }

        , { name: "fourth", desc: "fourth img desc", imgSrc: "https://wowslider.com/sliders/demo-93/data1/images/landscape.jpg" }

        , { name: "fifth", desc: "fifth img desc", imgSrc: "https://wowslider.com/sliders/demo-93/data1/images/sunset.jpg" }]

    let [display, setDisplay] = useState(0)

    const handleArrowClick = (direction) => {

        if (direction === "r") {
            if (display < arr.length - 1) {
                setDisplay(display += 1)

            } else { setDisplay(0) }

        } else if (direction === "l") {
            if (display >= 1) {
                setDisplay(display -= 1)
            } else {
                setDisplay(arr.length - 1)

            }
        }
    }


    return (
        <div className='container'>

            {/* ------------ images ----------- */}

            <div className='main-slide'>
                <div className='imgBox'>
                    <img src={arr[display]?.imgSrc} alt='iSrc' />
                    {/* <lable className="lab">Legend 1</lable> */}
                </div>


                {/* ------------ arrows ----------- */}
                <div className='arrows'>
                    <div className='l-arrow arrow' onClick={() => { handleArrowClick("l") }}>
                        <img src='https://cdn-icons-png.flaticon.com/512/271/271220.png' alt='abcg'></img>
                    </div>
                    <div className='r-arrow arrow' onClick={() => { handleArrowClick("r") }}>
                        <img src='https://cdn-icons-png.flaticon.com/512/32/32213.png' alt='abcg'></img>
                    </div>
                </div>

                {/* ------------ bottom dots ----------- */}
                <div className='dots'>
                    {
                        arr.map((item, index) => {
                            return (
                                <div className='dot' key={index} style={index === display ? { backgroundColor: "white", width: "10px", borderRadius: "40%" } : { backgroundColor: "" }}></div>
                            )
                        })
                    }
                    {/* <div className='dot'></div>
                    <div className='dot'></div> */}
                </div>
                <p className="tilte">{arr[display]?.name}-title</p>
            </div>



            <p className="desc">{arr[display]?.desc}</p>


        </div>
    )
}

export default Carousel3