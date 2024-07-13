import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Login(props) {

    const navigate = useNavigate()
    const [eusername, seteusername] = useState()
    const [epassword, setepassword] = useState()
    const [ruser, setruser] = useState(true)

    const users = props.users;

    function handleUInput(evt) {
        seteusername(evt.target.value)
    }

    function handlePInput(evt) {
        setepassword(evt.target.value)
    }

    function checkUser() {

        var userfound = false

        users.forEach(function (item) {
            if (item.username === eusername && item.password === epassword) {
                console.log("Login Success")
                userfound = true
                navigate("/landing",{state:{user:eusername}})
            }
        })
        if (userfound === false) {
            console.log("Login Failed");
            setruser(false)
        }
    }

    return (<div className="bg-black p-10">
        <div className="bg-[#efefef] border rounded p-10">
            <h1 className="font-medium text-3xl">Hey Hi</h1>
            {
                ruser ? <p>I help you manage your activities after you login :)</p> : <p className="text-red-500">Please Sign Up Before you Login!!</p>

            }
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

                <button className="bg-[#8272da] w-24 p-1 rounded-md" onClick={checkUser}>Login</button>

                <p>Don't have an account? <Link to={"/signup"} className="text-blue-700 underline">Signup</Link></p>
            </div>
        </div>
    </div>)
}

export default Login