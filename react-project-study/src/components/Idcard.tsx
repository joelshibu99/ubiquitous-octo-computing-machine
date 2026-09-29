type IdcardProps = {
    name: string;
    age: number;
    className: string;
};

function Idcard ({name, age, className}: IdcardProps) {
    return(
        <div>
            <h1>Idcard</h1>
            <p>Name : {name}</p>
            <p>Age : {age}</p>
            <p> Class : {className}</p>
        </div>
    )
} 

export default Idcard
