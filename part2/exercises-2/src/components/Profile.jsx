import './styles.css';
import oceans from "./oceans.json";
import Button from './Button';


function Profile() {
   const listItem = oceans.map(ocean =>
   <div key={ocean.id}>
      <img src={ocean.image} alt={ocean.name} />
   </div>
   )
   return (
      <>
         <ul>
            {listItem}
         </ul>
         <Button />
      </>  
   );
}

export default Profile;