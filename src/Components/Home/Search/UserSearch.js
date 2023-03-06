import React from 'react'
import Styles from '../../../Styles/Search/userSearch.module.css'
import SearchFields from './searchFields';
import SearchCard from './searchFields/SearchCard';

const UserSearch = () => {
  return (
    <div className={Styles.userSearch}>
      <div className={Styles.defination}>
          <p>Search Alumni</p>
      </div>
      <div className={Styles.fields}>
        <SearchFields />
      </div>
      <div className={Styles.searchList}>
        <SearchCard /> 
        <SearchCard /> 
        <SearchCard /> 
        <SearchCard /> 
        <SearchCard /> 
        <SearchCard /> 
        <SearchCard /> 
        <SearchCard /> 
        <SearchCard /> 
      </div>
    </div> 
  )
}

export default UserSearch;



