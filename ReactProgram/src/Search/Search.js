import React, { useEffect, useState } from 'react'
import './search.css';

const Search = () => {
  const [searchText, setSearchText] = useState("")
  const [searchedData, setSearchedData] = useState([]);
  const [filtereddata, setFiltereddata] = useState([]);
  const [selectedItem, setSelectedItem] = useState(-1);

//   const [datas, setDatas] = useState([
//     { title: "text 1", },
//     { title: "hello", },
//     { title: "world", }
//   ])

  useEffect(() => {
        fetch(`https://dummyjson.com/products`)
        .then(res => res.json())
        .then(data => setSearchedData(data.products))
  }, [])

  useEffect(() => {
    if(searchText != ""){
        const filterdata = searchedData.filter(({title}) => {
            return title.includes(searchText);
        })
        setFiltereddata(filterdata);
    }else{
        setFiltereddata([])
    }
  }, [searchText])

  const handleKeyDown = (e) => {
    if(selectedItem < filtereddata.length){
        if(e.key === "ArrowUp" && selectedItem > 0){
            setSelectedItem(prev => prev - 1);
        } else if (e.key === "ArrowDown" && selectedItem < filtereddata.length - 1){
            setSelectedItem(prev => prev + 1);
        } else if (e.key == "Enter" && selectedItem >= 0){
            window.open(filtereddata[selectedItem].images[0]);
        }
    } else {
        setSelectedItem(-1);
    }
 
}

  return (
    <div>
        <h1>Search</h1>
        <input type='text' autoComplete='off'
            value={searchText} 
            onChange={(e) => setSearchText(e.target.value)} 
            placeholder='Search Title..'
            onKeyDown={handleKeyDown}
        />
        <div>
            {
                filtereddata
                .slice(0,10)
                .map((data, index) =>  
                    (
                        <>
                            <a href={data.images[0]} 
                                key={index} target='_blank' 
                                style={{textDecoration: "none"}}
                                className = {selectedItem === index ? 'selected active' : 'selected'}>
                                {data.title}
                            </a>
                            <br/>
                        </>
                    )
                )
            }
        </div>
    </div>
  )
}

export default Search