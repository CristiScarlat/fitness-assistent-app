import { Button } from "react-bootstrap";

const Card = ({label, gif, buttonLabel="Read More", onClick}) => {
    return(
        <div
            className="p-4 home-container text-center m-0"
            style={{ width: "fit-content" }}
          >
            <h5>{label}</h5>
            <img src={gif} alt="..." width="100%"/>
            <Button variant="outline-light" className="mt-4" onClick={onClick}>{buttonLabel}</Button>
          </div>
    )
}

export default Card;