import React, {useState} from 'react';
import jsonData from './productMap.json'

export default function Mapprogram() {
      const [data, useData] = useState(jsonData);
      const [inpVal, setinpVal] = useState('');
      const [total, setTotal] = useState('');
    
      const handlePercentage = (price) => {
        console.log("clicked handlePercentage", inpVal, price);
        const newPrice = ((inpVal/100) * price) + price;
        console.log("clicked handlePercentage", newPrice);
        setTotal(newPrice);
      }
    
      const handleValue = () => {
        console.log("clicked handleValue")
      }
    
      return (
        <div>
          <p>Display products</p>
          <table>
            <tr>
              <th> Product </th>
              <th> Price </th>
              <th> Enter Value </th>
              <th> Convert to </th>
              <th> Convert to </th>
              <th> Variance </th>
            </tr>
            {data.jsonData.map(item =>
              <>
              <tr>
                  <td>{item.product}</td>
                  <td>{total ? total : item.total}</td>
              </tr>
              {item.children.map((sub,i) => 
                <tr>
                  <td>--{sub.model}</td>
                  <td>--{sub.price}</td>
                  <td><input type='number' name='myVal' value={inpVal} onChange={e => setinpVal(e.target.value)}></input></td>
                  <td><button onClick={() => handlePercentage(sub.price)}> Percentage </button></td>
                  <td><button onClick={handleValue}> Value </button></td>
                  <td><input type='number'></input></td>
                </tr>
              )}
              </>
            )}
          </table>
        </div>
      )
}
