import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./notebook.scss";
import { useParams } from 'react-router-dom';
const Messages = () => {
    const [data, setData] = useState(null)
    const [message, setMessage] = useState({ author: "", content: "" })
    const params = useParams()
    useEffect(() => {
        axios.get("http://localhost:4000/messages").then((response) => {
            setData(response.data);
        });
    })
    // console.log(data)
    const handleChange = (event) => {
        setMessage(prevState => ({ ...prevState, content: event.target.value, author:params.userLogin }))
       
    }
    const handlePost = (e) => {
        axios.post("http://localhost:4000/messages", {
            author: message.author,
            content: message.content
        })
        setMessage('')
    }

    const handleDelete = () =>{
        axios.delete("http://localhost:4000/messages", {
            author: message.author,
            content: message.content
        })
    }

    return (<>
        <div className='container'>
            <div className="message__inner">
                <div className="message__inner-panel"></div>

                {Array.isArray(data) ? data.map(item => {
                    return (
                        <div className="message__inner-content" key={item._id}>
                            <div>
                                <div className="message" >
                                    <svg
                                        width="11"
                                        height="12"
                                        viewBox="0 0 11 12"
                                        fill="none"
                                        type="button"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="message__dag">
                                        <path d="M6.70499 6L10.85 1.855C10.9319 1.75935 10.9747 1.63631 10.9698 1.51047C10.965 1.38464 10.9128 1.26527 10.8238 1.17622C10.7347 1.08717 10.6154 1.03501 10.4895 1.03015C10.3637 1.02528 10.2406 1.06809 10.145 1.15L5.99999 5.295L1.85499 1.145C1.76083 1.05085 1.63314 0.997955 1.49999 0.997955C1.36684 0.997955 1.23914 1.05085 1.14499 1.145C1.05083 1.23915 0.997941 1.36685 0.997941 1.5C0.997941 1.63315 1.05083 1.76085 1.14499 1.855L5.29499 6L1.14499 10.145C1.09265 10.1898 1.05014 10.245 1.02012 10.307C0.990112 10.369 0.973247 10.4366 0.970587 10.5055C0.967928 10.5743 0.97953 10.643 1.00467 10.7072C1.0298 10.7713 1.06793 10.8296 1.11666 10.8783C1.16539 10.9271 1.22366 10.9652 1.28783 10.9903C1.35199 11.0155 1.42065 11.0271 1.48951 11.0244C1.55837 11.0217 1.62594 11.0049 1.68797 10.9749C1.75 10.9449 1.80516 10.9023 1.84999 10.85L5.99999 6.705L10.145 10.85C10.2406 10.9319 10.3637 10.9747 10.4895 10.9699C10.6154 10.965 10.7347 10.9128 10.8238 10.8238C10.9128 10.7347 10.965 10.6154 10.9698 10.4895C10.9747 10.3637 10.9319 10.2407 10.85 10.145L6.70499 6Z" fill="#969696" />
                                    </svg>
                                    <div className="message__title">
                                        {item.author}
                                    </div>
                                    <p className="message__text">{item.content}</p>
                                    <div className="message__time"></div>
                                </div>
                            </div>
                        </div>
                    )
                })
                    : null}
                <form className="message__inner-bottom">
                    <input onChange={handleChange} type="text" name="messages" className="input__message" />
                    <svg
                        onClick={handlePost}
                        type="button"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className='arrow'>
                        <path d="M21.0187 10.2213L1.76874 0.596256C1.61786 0.520801 1.44839 0.490569 1.28073 0.509197C1.11307 0.527826 0.954373 0.594523 0.82374 0.701255C0.698987 0.805812 0.605871 0.943094 0.554861 1.09767C0.503851 1.25224 0.49697 1.41798 0.53499 1.57626L3.12499 11L0.49999 20.3975C0.464314 20.5297 0.460149 20.6684 0.487832 20.8025C0.515514 20.9365 0.574272 21.0622 0.65938 21.1695C0.744487 21.2767 0.85357 21.3625 0.977857 21.4199C1.10214 21.4773 1.23817 21.5047 1.37499 21.5C1.51197 21.4992 1.64683 21.4662 1.76874 21.4038L21.0187 11.7788C21.1621 11.7053 21.2824 11.5938 21.3663 11.4564C21.4503 11.319 21.4948 11.161 21.4948 11C21.4948 10.839 21.4503 10.681 21.3663 10.5436C21.2824 10.4062 21.1621 10.2947 21.0187 10.2213ZM2.73124 18.9713L4.66499 11.875H12.75V10.125H4.66499L2.73124 3.02876L18.665 11L2.73124 18.9713Z" fill="#0047FF" />
                    </svg>

                </form>
            </div>
        </div>
    </>);
}

export default Messages;