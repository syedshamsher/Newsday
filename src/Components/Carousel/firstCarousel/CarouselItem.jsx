import React from 'react';
import moment from 'moment';
export const CarouselItem = ({data}) => {
  const parseNull = (str) => {
    if (str === 'null') {
      return null;
    }
    return str;
  };

  const date = moment(parseNull(data.publishedAt) || new Date().toISOString(), moment.ISO_8601).calendar();
    return (
      <>
        <div>
          <img width="100%" src={data.urlToImage} alt=""/>
          <h5 style={{margin:'10px'}}> {data.title} </h5>
          <p style={{fontSize:'8px', margin:'10px', marginTop:'-10px'}}>{date}</p>
          <p style={{fontSize:'8px', margin:'10px', marginTop:'-10px'}}>{data.source.name}</p>
        </div>
      </>
    )
}
