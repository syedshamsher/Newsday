import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { getArticlesFromSources } from '../../Redux/NewsBySource/actions';

const animatedComponents = makeAnimated();
const key = process.env.REACT_APP_API_KEY

export const CategorySearchBox = () => {
    const [sourcesState, setSourcesState] = React.useState([])
    const newsBySource = useSelector(state => state.newsBySource.newsBySource);
    const dispatch = useDispatch();
    console.log( newsBySource )

    const sourcesResponseFromAPI = () => {
        var config = {
            method: 'get',
            url: `https://newsapi.org/v2/sources?apiKey=${key}`,
            headers: { 
              'Content-Type': 'application/json', 
            }
          };
           axios(config)
           .then((response) => {
               return(
                   setSourcesState(
                    response.data.sources.map((e) => {
                        return { value: e.id, label: e.name };
                      })
                   )
               )
           } )
          .catch((err) => {
              console.log(err)
          });
    }

    const updateArticles = (sources) => {
      sources = sources || [];
        dispatch(getArticlesFromSources(sources));
    };
  
    React.useEffect(() => {
        sourcesResponseFromAPI()
    },[]);

    return (
        <div style={{marginTop:'50px', textAlign:'left'}}>
            <Select
                components={animatedComponents}
                noOptionsMessage={() => 'No Sources Available. This is Likely an Internal Server Error.'}
                isMulti
                options={sourcesState}
                placeholder='Choose a Source...'
                instanceId={1}
                onChange={(selectedOptions) => {
                  updateArticles(selectedOptions);
                }}
            />
        </div>
    )
}