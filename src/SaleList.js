import { Link } from "react-router-dom";

const SaleList = ({ sales, title }) => {
    return ( 
        <div className="sale-list">
            <h2>{ title }</h2>
            {sales.map((sale) => ( //map method cycles threw each method, key = {access each item.id prop}
                <div className="sale-preview" key={sale.id}>    
                <Link to={`/sales/${sale.id}`}>
                    <h2>{ sale.name }</h2> 
                    <p>Date posted { sale.date }</p>
                </Link>
            </div>
            ))}
        </div>
     );
}
 

export default SaleList;