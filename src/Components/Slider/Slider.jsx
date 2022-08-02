import s from './Slider.module.scss'
import Slick from "react-slick";
import item from '../../fake-data/choose-trainer.json'
import MainPageCard from '../MainPageCard/MainPageCard'
export default function Slider() {
    const settings = {
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode:true,
        dots : true,

      };
    return (
        <div>
                 <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
                <Slick customPaging={(i)=><div className={'dots-pag'}><div className={'activate'}/></div>} dotsClass={'slick-dots'}  {...settings} className={s.Slider}>
                {item.map((info,idx) => (
                <MainPageCard 
                img={info.img}
                buttonText={info.text}
                link={info.link}
                key={`trainN${idx}`}/>
            ))}
                </Slick>
        </div>
    )
}