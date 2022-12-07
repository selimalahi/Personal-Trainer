import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import MyReviewRow from "./MyReviewRow";

const MyReview = () => {
  const { user, logOut } = useContext(AuthContext);
  const [myreviews, setMyreviews] = useState([]);

  useEffect(() => {
    fetch(`https://assignment-11-server-site-selimalahi.vercel.app/myreviews/?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("local-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => setMyreviews(data));
  }, [user?.email, logOut]);

  console.log(myreviews.length);

  const handelDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this order"
    );
    if (proceed) {
      fetch(`https://assignment-11-server-site-selimalahi.vercel.app/myreviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = myreviews.filter((odr) => odr._id !== id);
            setMyreviews(remaining);
          }
        });
    }
  };
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
            {myreviews.length > 0 ? (
              <>
                {myreviews.map((myreview) => (
                  <MyReviewRow
                    key={myreview._id}
                    myreview={myreview}
                    handelDelete={handelDelete}
                  ></MyReviewRow>
                ))}
              </>
            ) : (
              <>
                <div>
                  <h2 className="text-3xl text-center w-full mt-5 mb-5">
                    {" "}
                    Reviews were not added
                  </h2>
                </div>
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReview;
