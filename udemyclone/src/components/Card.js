import React from "react";
import "./Card.css";
import Slider from "react-slick";
import  dataCorosel  from "../data.json";


class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:dataCorosel
        }
    }
    render() {
        var settings = {
            dots: true,
            arrows: true,
            infinite: false,
            // nextArrow: true,
            // prevArrow: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1
        };
        console.log("", this.state.data.dataCorosel)
        return (
            <Slider {...settings}
            //className="row-cotainer"
            >
                {
                    this.state.data.dataCorosel.map((item, index) => {
                        return (
                            <div key={index} className="card-wrapper">
                                <div>
                                    <img src={item.image} />
                                </div>
                                <div>
                                    <h3>
                                        <a href="/course/the-complete-web-development-bootcamp/" >
                                            {item.title}
                                            <span className="text-heading">{item.desc}</span>
                                        </a>
                                    </h3>
                                    <div className="rating-system">
                                        <span>4.7</span>

                                        {/* <svg aria-hidden="true" width="100%" height="100%" viewBox="0 0 70 14" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="u131-star-rating-mask--39" data-purpose="star-rating-mask"><rect x="0" y="0" width="90%" height="100%" fill="white"></rect></mask><g class="star-rating-module--star-filled--3CnHc" mask="url(#u131-star-rating-mask--39)" data-purpose="star-filled"><use xlink:href="#icon-rating-star" width="14" height="14" x="0"></use><use xlink:href="#icon-rating-star" width="14" height="14" x="14"></use><use xlink:href="#icon-rating-star" width="14" height="14" x="28"></use><use xlink:href="#icon-rating-star" width="14" height="14" x="42"></use><use xlink:href="#icon-rating-star" width="14" height="14" x="56"></use></g><g fill="transparent" class="star-rating-module--star-bordered--3WG_2" stroke-width="2" data-purpose="star-bordered"><use xlink:href="#icon-rating-star" width="12" height="12" x="1" y="1"></use><use xlink:href="#icon-rating-star" width="12" height="12" x="15" y="1"></use><use xlink:href="#icon-rating-star" width="12" height="12" x="29" y="1"></use><use xlink:href="#icon-rating-star" width="12" height="12" x="43" y="1"></use><use xlink:href="#icon-rating-star" width="12" height="12" x="57" y="1"></use></g></svg> */}


                                        {/* <svg aria-hidden="true" width="100%" height="100%" viewBox="0 0 70 14" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="u131-star-rating-mask--39" data-purpose="star-rating-mask"><rect x="0" y="0" width="90%" height="100%" fill="white"></rect></mask><g class="star-rating-module--star-filled--3CnHc" mask="url(#u131-star-rating-mask--39)" data-purpose="star-filled"><use xlink:href="#icon-rating-star" width="14" height="14" x="0"></use><use xlink:href="#icon-rating-star" width="14" height="14" x="14"></use><use xlink:href="#icon-rating-star" width="14" height="14" x="28"></use><use xlink:href="#icon-rating-star" width="14" height="14" x="42"></use><use xlink:href="#icon-rating-star" width="14" height="14" x="56"></use></g><g fill="transparent" class="star-rating-module--star-bordered--3WG_2" stroke-width="2" data-purpose="star-bordered"><use xlink:href="#icon-rating-star" width="12" height="12" x="1" y="1"></use><use xlink:href="#icon-rating-star" width="12" height="12" x="15" y="1"></use><use xlink:href="#icon-rating-star" width="12" height="12" x="29" y="1"></use><use xlink:href="#icon-rating-star" width="12" height="12" x="43" y="1"></use><use xlink:href="#icon-rating-star" width="12" height="12" x="57" y="1"></use></g></svg> */}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }


            </Slider>

        )
    }
}

export default Card;