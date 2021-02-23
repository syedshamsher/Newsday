import React from "react";
import { CarouselItem } from "./CarouselItem";
import styles from "./Carousel.module.css";
import Carousel from "react-elastic-carousel";
export const CarouselContainer = ({ breakPoints, news }) => {
   
const data = news.slice(4,15)

    return (
        <div className={styles.carousel_wrapper}>
            <Carousel breakPoints={breakPoints} pagination = {false}>
                {data.map((item, i) => {
                        return (
                            <div key = {i} className={styles.mainContainer}>
                                <CarouselItem data={item} />
                            </div>
                        );
                    })}
            </Carousel>
        </div>
    );
};
