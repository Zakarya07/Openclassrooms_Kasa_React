import { useParams } from "react-router-dom";

function Housing () {

    let { id } = useParams();

    return (
        <div>
            <h1>Logement n°{id} </h1>
        </div>
    )

}


export default Housing;