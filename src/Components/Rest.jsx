import React, { useEffect, useState } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RestCard from "./RestCard";

function Rest() {
  const base_url = "https://rest-backend-jovm.onrender.com/restaurants";

  const [restData, setrestData] = useState([]);

  const fetchData = async () => {
    const result = await axios.get(base_url);
    console.log(result.data);
    setrestData(result.data);
  };
  console.log(restData);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Row>
        {restData.map((item) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <RestCard restaurants={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Rest;
