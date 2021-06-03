import React from 'react';
import '../css/Card.css';
import CardItem from './CardItem';
import img1 from "../images/img-1.png";
import img2 from "../images/img-2.jpg";
import img3 from "../images/img-3.jpg";
import img4 from "../images/img-4.jpg";
import img5 from "../images/img-5.jpg";

function Cards() {
    return (
        <div className='cards'>
            <h1>Departments of FOE...</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={img3}
                            text='BScEng (Hons) – Civil And Environmental Engineering Department'
                            label='Civil'

                        />
                        <CardItem
                            src={img4}
                            text='BScEng (Hons) – Electrical and Information Engineering'
                            label='Electrical'

                        />
                    </ul>
                    <ul className='cards__items'>

                        <CardItem
                            src={img5}
                            text='BScEng (Hons) – Mechanical and Manufacturing Engineering'
                            label='Mechanical'

                        />
                        <CardItem
                            src={img2}
                            text='Department of Interdisciplinary Studies'
                            label='Interdisciplinary Studies'

                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;