import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from './../../contexts/AuthProvider/AuthProvider';
import { useContext } from 'react';
import { Helmet } from "react-helmet";


const AddReview = () => {

    const { _id, title, fee, img } = useLoaderData();
    const { user } = useContext(AuthContext);



    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const reviews = {
            serviceid: _id,
            serviceName: title,
            fee,
            customer: name,
            customerImg: user?.photoURL,
            email,

            message,
            date:new Date()

        }

        fetch('https://assignment-11-server-site-selimalahi.vercel.app/add-reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('review added successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));
    }
    return (
        <div>
            <Helmet>
           
            <title>AddReview</title>
           
        </Helmet>

            <form onSubmit={handlePlaceOrder}>
                <h2 className="text-4xl text-center mb-10"> {title}</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>

                    <input name="name" type="text" placeholder='Enter your full name' className="input input-ghost w-full  input-bordered" />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                    <input name="servicename" type="text" defaultValue={title} className="input input-ghost w-full  input-bordered" />
                    <input name="fee" type="text" defaultValue={fee} className="input input-ghost w-full  input-bordered" required />

                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>

                <input className='btn mb-5 mt-5' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddReview;