import React, {useState} from 'react'
import {useRouter} from "next/router"
import axios from 'axios';

const AddEvent = () => {
    const [data, setData] = useState({
        title: "",
        body: "",
    });
    const [error, setError] = useState("")
    const router = useRouter();

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/events`, data,
            );

            router.push("/")
        } catch (error) {
            setError(error.message);
        }
    };

  return (
    <div>
        <h1>Add events</h1>
        <form onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
            <div>
                <label htmlFor="title">Title</label>
                <input type="text"  name='title' id='title'
                onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="body">Body</label>
                <textarea name="body" id="body" cols="30" rows="10"
                onChange={handleChange}
                ></textarea>
            </div>
            <button type='submit'>
                submit
            </button>
        </form>
    </div>
  )
}

export default AddEvent