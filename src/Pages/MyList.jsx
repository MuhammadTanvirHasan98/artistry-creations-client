import { useEffect, useState } from "react";
import { UseAuthContext } from "../Firebase/FirebaseAuth/FirebaseProvider";


const MyList = () => {
  const {user} = UseAuthContext();


  const [crafts, setCrafts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/allCrafts/email/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCrafts(data);
      });
  }, [user]);

  console.log(crafts);

  return (
    <div>
          
           <h1 className="text-4xl text-yellow-700 text-center">My list of cards which I have added:</h1>
    </div>
  );
};

export default MyList; 