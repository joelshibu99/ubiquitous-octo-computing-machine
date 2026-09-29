import Idcard from "./Idcard"

function Idcarddetails() {
    return(
        <div>
            <Idcard name="John Doe" age={20} className="10th Grade" />
            <Idcard name="Jane Smith" age={22} className="11th Grade" />
        </div>
    )
}
export default Idcarddetails