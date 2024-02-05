import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import RestOp from "./RestOp";
import RestReview from "./RestReview";

function ViewRest() {
  //get the id of particular restaurant

  // const pathParams = useParams() //Returns an object of key/value pairs of the dynamic params from the current URL that were matched by the route path.
  // console.log(pathParams.id) //object {id:1}

  //destructuring the above code
  const { id } = useParams();
  console.log(id); //object {id:1}

  const base_url = "https://rest-backend-jovm.onrender.com/restaurants";

  const [restDetails, setrestDetails] = useState({});

  //Api call to fetch the particular restaurant details
  const fetchRestDetails = async () => {
    const result = await axios.get(`${base_url}/${id}`);
    console.log(result.data);
    setrestDetails(result.data);
  };
  console.log(restDetails);

  useEffect(() => {
    fetchRestDetails();
  }, []);

  return (
    <div>
      <Row>
        <Col>
          <img
            src={restDetails.photograph}
            width={"450px"}
            height={"550px"}
            className="m-4"
            alt=""
          />
        </Col>
        <Col className="m-5 p-5">
          <ListGroup className="m-5">
            <h1>{restDetails.name}</h1>
            <ListGroup.Item>Address : {restDetails.address}</ListGroup.Item>
            <ListGroup.Item>
              Cuisine : {restDetails.cuisine_type}
            </ListGroup.Item>
            <ListGroup.Item>
              Neighbourhood : {restDetails.neighborhood}
            </ListGroup.Item>
            <ListGroup.Item>
              <RestOp op={restDetails.operating_hours} />
            </ListGroup.Item>
            <ListGroup.Item><RestReview review={restDetails.reviews}/></ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
}

export default ViewRest;
