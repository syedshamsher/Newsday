import React from 'react';
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux'
import { getArticlesFromCategory } from '../../Redux/NewsByCategory/actions';


export const CategorySearch = () => {
    const newsByCategory = useSelector(state => state.newsByCategory.newsByCategory);
    const dispatch = useDispatch();
    console.log( newsByCategory )

    const categoryState = [
        {
            value: 1,
            label: "Entertainment"
        },
        {
            value: 2,
            label: "General"
        },
        {
            value: 3,
            label: "Health"
        },
        {
            value: 4,
            label: "Science"
        },
        {
            value: 5,
            label: "Sports"
        },
        {
            value: 6,
            label: "Technology"
        },
    ]

    const updateArticles = (category) => {
      console.log( category.label )
        dispatch(getArticlesFromCategory(category.label));
    };
  
    return (
        <div style={{marginTop:'50px', textAlign:'left'}}>
            <Select
                noOptionsMessage={() => 'No Category Available. This is Likely an Internal Server Error.'}
                isClearable={true}
                options={categoryState}
                placeholder='Choose a Source...'
                instanceId={1}
                onChange={(selectedOptions) => {
                  updateArticles(selectedOptions);
                }}
            />
        </div>
    )
}