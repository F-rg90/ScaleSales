import { useState } from "react";
import { useHistory } from 'react-router-dom'

const NewSale = () => {
    const [name, setName] = useState('');
    const [body, setBody] = useState('');
    const [date, setDate] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const reDirect = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();
        const sale = { name, body, date };

        fetch('http://localhost:8000/sales', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(sale)
        }).then(() =>{
            console.log('new addition')
            setIsLoading(false);
            reDirect.push('/')
        })
    }



    return (
        <div className="new-sale">
            <h2>Post a new Sale</h2>
            <form onSubmit={handleSubmit}>
                <label>Sale Title:</label>
                <input 
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <label>Sale Description:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Sale Date:</label>
                <input type="date" 
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                />
                <label>Select image to upload:</label>
                <input type="file" name="fileToUpload" id="fileToUpload"></input>
                <input type="submit" value="Upload Image" name="submit"></input>
                { !isLoading && <button>Post Sale</button> }
                { isLoading && <button disabled> Posting...</button> }
            </form>
            
        </div>
      );
}
 
export default NewSale;
