import Btn from "./../UI/OutButton";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { Component } from "react";

// import Slider from "react-slick";
// const Category = () => {
//   const style = "bg-transparent ";
//   const settings = {
//     infinite: true,
//     centerPadding: "60px",
//     slidesToShow: 6,
//     swipeToSlide: true,
//   };

//   return (
//     <>
//       <div className="flex items-center">
//         <Slider className="overflow-hidden" {...settings}>
//           {db.map((e) => {
//             return <Btn text={e.category} style={style} key={e.category} />;
//           })}
//         </Slider>
//       </div>
//     </>
//   );
// };

// export default Category;

import Slider from "react-slick";

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const db = [
      {
        category: "All",
      },
      {
        category: "Combo",
      },
      {
        category: "Burger",
      },
      {
        category: "Spinner",
      },
      {
        category: "Chicken",
      },
      {
        category: "Pizza",
      },
      {
        category: "Drinks",
      },
      {
        category: "Deserts",
      },
      {
        category: "Salads",
      },
    ];
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      centerMode: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      spaceBetween: 10,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 840,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 540,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 490,
          settings: {
            centerMode:true,
            slidesToShow: 1.5,
          },
        },
        {
          breakpoint: 390,
          settings: {
            centerMode:true,
            slidesToShow: 1.3,
          },
        },
        {
          breakpoint: 350,
          settings: {
            centerMode:true,
            slidesToShow: 1.1,
          },
        },
        {
          breakpoint: 320,
          settings: {
            centerMode:true,
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <div className="relative">
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          {db.map((e) => {
            return <Btn text={e.category} key={e.category} />;
          })}
        </Slider>
        {/* <div style={{ textAlign: "center" }}> */}
        <div
          className="bg-white cursor-pointer rounded-full top-0 w-8 h-8 absolute"
          onClick={this.previous}
        >
          <GrFormPrevious className="w-8 h-8" style={{ translate: "180deg" }} />
        </div>
        <div
          className="bg-white rounded-full cursor-pointer w-8 h-8 top-0 right-0 absolute"
          onClick={this.next}
        >
          <GrFormNext className="w-8 h-8" />
        </div>
        {/* </div> */}
      </div>
    );
  }
}
