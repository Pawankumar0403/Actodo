import { useLocation } from "react-router-dom"
import Header from "../components/Header";
import Card from "../components/Card";
import TodoContainer from "../components/TodoContainer";

function Landing() {

    const name = useLocation()

    return (<div className="bg-black p-16">
        <div className="bg-[#efefef] p-10 border rounded-md">
            {/* Header */}
            <Header name={name.state.user}/>
            {/* Card */}
            <div className="flex justify-between gap-7 my-5 flex-wrap">
                <Card bgColor={"#8272da"} title={"23°"} subtitle={"Chennai"} />
                <Card bgColor={"#FD6663"} title={"July"} subtitle={"16:51:09"} />
                <Card bgColor={"#FCA201"} title={"Built Using"} subtitle={"React"} />
            </div>
            {/* Todo Container */}
            <TodoContainer />
        </div>


    </div>)
}

export default Landing