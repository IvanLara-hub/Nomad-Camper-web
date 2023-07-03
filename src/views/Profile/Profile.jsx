import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import { Card, ListGroup } from "react-bootstrap";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/campers");
  };

  return (
    <div className="container-profile-new">
      <Card className="profile-card-new">
        <Card.Header className="profile-card__header-new">
          <h1 className="profile-card__title-new">
            {currentUser.firstName} {currentUser.lastName}
          </h1>
        </Card.Header>
        <Card.Body className="profile-card__body-new">
          <div className="form-group-new">
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" value={currentUser.email} readOnly />
          </div>
          <div className="form-group-new">
            <label htmlFor="phone">Phone:</label>
            <input type="text" id="phone" value={currentUser.phone} readOnly />
          </div>
          <div className="form-group-new">
            <label htmlFor="address">Address:</label>
            <textarea
              id="address"
              value={currentUser.address}
              readOnly
              rows="3"
            />
          </div>
          <div className="form-group-new">
            <Button text="ir a camperizaciones" onClickFn={handleClick} />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Profile;
