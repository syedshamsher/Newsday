import React from 'react'
import styles from './style.module.css'
export const MediumCard = ({news}) => {
    return (
        <a href={news.url}>
            <div className={styles.wrapper}>
                    <img className={styles.img} src={news.urlToImage} alt="news-img" />
                    <div>
                        <h3 id={styles.title}>{news.title}</h3>
                        <p id={styles.description}>{news.description?.substring(0, 40)}...</p>
                    </div>
            </div>
        </a>

    )
}
