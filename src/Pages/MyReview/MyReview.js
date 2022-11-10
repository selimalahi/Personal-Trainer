import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import MyReviewRow from "./MyReviewRow";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [myreviews, setMyreviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyreviews(data));
  }, [user?.email]);
  return (
    <div>
      <h2>myreviews : {myreviews.length}</h2>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>service Name</th>
              <th>FEE</th>
              <th>message</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
              {
                myreviews.map(myreview => <MyReviewRow
                key={myreview._id}
                myreview={myreview}
                ></MyReviewRow>)
              }
            
          </tbody>

         
        </table>
      </div>
    </div>
  );
};

export default MyReview;
