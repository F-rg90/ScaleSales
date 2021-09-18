const SoldList = ({ sales, title, handleDelete }) => {
    return ( 
        <div className="sold-list">
            <h2>{ title }</h2>
            {sales.map((sale) => ( //map method cycles threw each method, key = {access each item.id prop}
                <div className="sold-preview" key={sale.id}>    
                <h2>{ sale.name }</h2> 
                <p>Date posted { sale.date }</p>
            </div>
            ))}
        </div>
     );
}

export default SoldList;