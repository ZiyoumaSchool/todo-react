import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card, Form } from "react-bootstrap";

const ListItem = ({ isDone, task, ...props }) => {
  const [isCheck, setCheck] = useState();
  return (
    <Card style={{ margin: "10px 0" }}>
      <Card.Body>
        <div className="row">
          <div className="col-1">
            {" "}
            <Form>
              <Form.Check
                defaultChecked={isDone}
                type="switch"
                id="disabled-custom-switch"
              />
            </Form>
          </div>
          <div className="col-11">
            <Card.Text>{task}</Card.Text>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

ListItem.propTypes = {
  /**
   *  Le contenu du todo
   */
  task: PropTypes.string,
  /**
   * L'etat du todo si c'est fait ou pas
   */
  isDone: PropTypes.bool,

  onClick: PropTypes.func,
};

ListItem.defaultProps = {
  task: "",
  isDone: false,
};

export default ListItem;
