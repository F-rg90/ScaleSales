
import SaleList from './SaleList';
import SoldList from './SoldList';
import useFetch from './useFetch';



const Profile = () => {
  const { data: sales, isLoading, error } = useFetch('http://localhost:8000/sales');

   return (
     <div className="profile">
       { error && <div>{ error }</div> }
       { isLoading && <div>Checking the backlog...</div> }
       {sales && <SaleList sales={sales} title="Current Sales" />}
       {sales && <SoldList sales={sales} title="Past Sales" />}
     </div>
   );
}
 



export default Profile;
