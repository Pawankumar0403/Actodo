import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";

function Signup(props) {

    const users = props.users;
    const setusers = props.setusers;
    const navigate = useNavigate()

    const [eusername, seteusername] = useState()
    const [epassword, setepassword] = useState()

    function handleUInput(evt) {
        seteusername(evt.target.value)
    }

    function handlePInput(evt) {
        setepassword(evt.target.value)
    }

    function addUser() {
        setusers([...users, { username: eusername, password: epassword }])
        navigate("/")
    }

    return (
        <div className="bg-black p-10">
            <div className="bg-[#efefef] border rounded p-10">
                <h1 className="font-medium text-3xl">Hey Hi 👋</h1>
                <p>Sign up here :)</p>
                <div className="flex flex-col gap-2 my-2">
                    <input
                        type="text"
                        className="w-52 border-black border p-1 bg-transparent rounded-md"
                        placeholder="Username"
                        onChange={handleUInput}
                    />

                    <input
                        type="text"
                        className="w-52 border-black border p-1 bg-transparent rounded-md"
                        placeholder="Password"
                        onChange={handlePInput}
                    />

                    <input
                        type="text"
                        className="w-52 border-black border p-1 bg-transparent rounded-md"
                        placeholder="Confirm Password" />

                    <button className="bg-[#fca201] w-24 p-1 rounded-md" onClick={addUser}>Sign Up</button>

                    <p>Already have an account? <Link to={"/"} className="text-blue-700 underline">Login</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Signup