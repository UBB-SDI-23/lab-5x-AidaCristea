import { useEffect, useState } from "react";
import { Singer } from "../../models/Singer";

export const SingerShowAll = () => {
  const [singers, setSingers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/singers")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSingers(data);
        
      });
  }, []);

  if(singers.length===0)
  {
    return <div>No singers.</div>
  }
  return (
    
    <div className="App">
      <h1>Singers list</h1>
      <table>
        <tr>
          <th>#</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Age</th>
          <th>City</th>
          <th>Type of Music</th>
        </tr>
        {singers.map((singer: Singer, index) => (
          <tr key={index}>
            <td>{index}</td>
            <td>{singer.firstName}</td>
            <td>{singer.lastName}</td>
            <td>{singer.age}</td>
            <td>{singer.city}</td>
            <td>{singer.typeOfMusic}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
