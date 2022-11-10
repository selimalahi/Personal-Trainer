import React, { useEffect, useState, serviceid } from "react";

const MyReviewRow = ({ myreview }) => {
  const { serviceName, fee, message, email } = myreview;

  const [reviewService, setReviewServices] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/all-services/${serviceid}`)
      .then((res) => res.json())
      .then((data) => setReviewServices(data));
  }, []);
  return (
    <tr>
      <th>
        <label>
          <button className="btn btn-ghost">X</button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              {reviewService?.img && (
                <img
                  className="mt-3"
                  src={reviewService.img}
                  alt="Avatar Tailwind CSS Component"
                />
              )}
            </div>
          </div>
          <div>
            <div className="font-bold mt-0">{serviceName}</div>
          </div>
        </div>
      </td>
      <td>
        {fee}
        <br />
      </td>
      {/* <td>Purple</td> */}
      <th>
        <span className="badge badge-ghost badge-sm">{message}</span>
      </th>
      <th>
        <span className="badge badge-ghost badge-sm">{email}</span>
      </th>
    </tr>
  );
};

export default MyReviewRow;
