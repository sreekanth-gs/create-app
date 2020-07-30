import React from 'react';
import './index.css';
import { Button } from 'react-bootstrap';
export const SearchComponent = (props) => {
    let { data } = props;
    return (

        <form className="search-bar">
            <input type="text" name="search" value={data} onChange={(e) => props.onChange(e)} />
            <Button type="submit" onClick={(e) => props.OnClick(e, data)}>Search</Button>{''}

        </form>
    )

}