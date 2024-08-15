import { useState } from "react";
import './landing.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AppointForm = ({ onSendAppointment, lastId }) => {
  const clearData = {
    Name: "",
    Email: "",
    aptNotes: "",
    aptDate: "",
    aptTime: "",
  };

  let [toggleForm, setToggleForm] = useState(false);
  let [formData, setFormData] = useState(clearData);

  const formDataPosted = () => {
    if (formData.Name && formData.Email && formData.aptDate) {
      const appointmentInfo = {
        id: lastId + 1,
        Name: formData.Name,
        Email: formData.Email,
        aptNotes: formData.aptNotes,
        aptDate: formData.aptDate + " " + formData.aptTime,
      };
      onSendAppointment(appointmentInfo);
      setFormData(clearData);
      setToggleForm(!toggleForm);
    } else {
      alert("fill required fields");
    }
  };

  return (
    <div>
      <button
        onClick={() => setToggleForm(!toggleForm)}
        className={`btn-appoint ${toggleForm ? "rounded-t-md" : "rounded-md"}`}
      >
        <div className="inline-block align-text-top"> 
          Book Appointment
        </div>
      </button>
      {toggleForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span
              className="close-btn"
              onClick={() => setToggleForm(false)}
            >
              &times;
            </span>
            <h2>Book Appointment</h2>
            <Container>
              <Row>
                <Col>
                  <label htmlFor="Email">Email</label>
                  <input
                    onChange={(event) => {
                      setFormData({ ...formData, Email: event.target.value });
                    }}
                    type="email"
                    name="Email"
                    id="Email"
                    value={formData.Email}
                    required
                    className="text-field"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <label htmlFor="Name">Name</label>
                  <input
                    onChange={(event) => {
                      setFormData({ ...formData, Name: event.target.value });
                    }}
                    required
                    type="text"
                    name="Name"
                    id="Name"
                    value={formData.Name}
                    className="text-field"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <label htmlFor="aptDate">Apt Date</label>
                  <input
                    required
                    onChange={(event) => {
                      setFormData({ ...formData, aptDate: event.target.value });
                    }}
                    type="date"
                    name="aptDate"
                    id="aptDate"
                    value={formData.aptDate}
                    className="text-field"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <label htmlFor="aptTime">Apt Time</label>
                  <input
                    onChange={(event) => {
                      setFormData({ ...formData, aptTime: event.target.value });
                    }}
                    type="time"
                    name="aptTime"
                    id="aptTime"
                    value={formData.aptTime}
                    className="text-field"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <label htmlFor="aptNotes">Appointment Notes</label>
                  <textarea
                    onChange={(event) => {
                      setFormData({ ...formData, aptNotes: event.target.value });
                    }}
                    value={formData.aptNotes}
                    id="aptNotes"
                    name="aptNotes"
                    rows="3"
                    className="text-field"
                    placeholder="Detailed comments about the condition"
                  ></textarea>
                </Col>
              </Row>
              <Row>
                <Col>
                  <button
                    type="button"
                    onClick={formDataPosted}
                    className="submit-btn"
                  >
                    Submit
                  </button>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointForm;
