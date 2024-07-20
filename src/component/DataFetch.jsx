import { useState } from 'react';
import '../Data.css';

const DataFetch = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [rating, setRating] = useState(1); 
    const [data, setData] = useState([]);

    const handleChange = (e) => {
        const { name: inputName, value } = e.target;
        if (inputName === "name") {
            setName(value);
        } else if (inputName === "age") {
            setAge(value);
        } else if (inputName === "rating") {
            setRating(parseInt(value, 10)); 
        }
    };

    const handleSubmit = () => {
        if (name && age && rating) {
            const obj = { name, age, rating };
            setData([...data, obj]);
            setName("");
            setAge("");
            setRating(1); 
        }
    };
    return (
        <div className="data-fetch-container"> 
          <div className="input-container">
            <input 
              type="text" 
              name="name" 
              placeholder="Name" 
              value={name} 
              onChange={handleChange} 
            />
            <input 
              type="number" 
              name="age" 
              placeholder="Age" 
              value={age} 
              onChange={handleChange} 
            />
            <div> 
              <label htmlFor="rating">Rating:</label>
              <input 
                type="number" 
                name="rating" 
                id="rating" 
                min="1" 
                max="10" 
                value={rating} 
                onChange={handleChange} 
              />
            </div>
            <button onClick={handleSubmit}>Submit</button>
          </div>
    
          <div className="user-list-container">
            <h2 className="userlist-container">Feedback Data</h2>
            <div className="user-list">
              {data.map((item, index) => (
                <div className="user-item" key={index}>
                  <p><strong>Name:</strong> {item.name}</p>
                  <p><strong>Age:</strong> {item.age}</p>
                  <p><strong>Rating:</strong> {item.rating}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };
    
    export default DataFetch;
