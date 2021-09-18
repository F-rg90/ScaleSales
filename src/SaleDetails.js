import { useHistory, useParams } from "react-router-dom";
import useFetch from './useFetch';

const SaleDetails = () => {
    const { id } = useParams();
    const { data: sales, error, isLoading } = useFetch('http://localhost:8000/sales/' + id);
    const reDirect = useHistory();

    const handleClick= () => {
        fetch('http://localhost:8000/sales/' + sales.id, {
            method: 'DELETE'
        }).then(()=> {
            reDirect.push('/')
        })
    }



    return ( 
        <div className="sale-details">
            { isLoading && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { sales && (
                <article>
                    <h1>{ sales.name }</h1>
                    <h2>Date Posted { sales.date }</h2>
                    <p>{ sales.body }</p>
                    <button onClick={handleClick}>delete</button>
                </article>
                
            )}
        </div>
     );
}
 
export default SaleDetails;
