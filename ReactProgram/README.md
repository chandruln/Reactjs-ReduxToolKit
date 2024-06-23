# Getting Started with Create React App

### `npm start`
Runs the app in the development mode. Open [http://localhost:3000]

## Map

data.jsonData.map(item =>
        <>
        {item.product} {item.total} </br>
        {item.children.map((sub,i) => 
            --{sub.model}
            --{sub.price}

## Recursive Map

{explorer.items.map((exp) => {
    return <Folder explorer={exp} key={exp.id}/> 
})}

## Pagination

<span onClick={() => setPage(page - 1)}>&laquo;</span>
{
    [...Array(products.length / 10)].map((_, index) => {
        return <span key={index} onClick={() => setPage(index + 1)}> {index + 1} </span>
    })
}
<span onClick={() => setPage(page + 1)}>&raquo;</span>