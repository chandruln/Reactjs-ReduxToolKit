import React, { useEffect, useState } from 'react'

const Search = () => {
  const [searchText, setSearchText] = useState("")
  const [searchedData, setSearchedData] = useState([]);
  const [filtereddata, setFiltereddata] = useState([]);

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

  return (
    <div>
        <h1>Search</h1>
        <input type='text' autoComplete='off' value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder='Title..'/>
        <div>
            {
                filtereddata
                .map((data, index) =>  
                    (
                        <>
                            <a href={data.images[0]} key={index} target='_blank' style={{textDecoration: "none"}}>{data.title}</a>
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