import { useState } from "react"
import { AiOutlineSchedule } from "react-icons/ai"
import './landing.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const AppointForm = ({ onSendAppointment, lastId }) => {
  const clearData = {
    petName: "",
    ownerName: "",
    aptNotes: "",
    aptDate: "",
    aptTime: "",
  };
  let [toggleForm, setToggleForm] = useState(false);
  let [formData, setFormData] = useState(clearData);

  const formDataPosted = () => {
    if (formData.petName && formData.ownerName && formData.aptDate) {
      const appointmentInfo = {
        id: lastId + 1,
        petName: formData.petName,
        ownerName: formData.ownerName,
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
    <div className='appoint'>
      <div className="">
        <div className="">
          <label
            htmlFor="Appontment"
            className=""
          >
            Email
          </label>
          <div className="">
            <input
              onChange={(event) => {
                setFormData({ ...formData, Email: event.target.value });
              }}
              type="email"
              name="email"
              id="email"
              value={formData.Email}
              required
              className=""
            />
          </div>
        </div>

        <div className="">
          <label
            htmlFor="Name"
            className=""
          >
            Name
          </label>
          <div className="">
            <input
              onChange={(event) => {
                setFormData({ ...formData, Name: event.target.value });
              }}
              required
              type="text"
              name="Name"
              id="Name"
              value={formData.Name}
              className=""
            />
          </div>
        </div>
        <div className="">
          <label
            htmlFor="aptDate"
            className="">
            Apt Date
          </label>
          <div className="">
            <input
              required
              onChange={(event) => {
                setFormData({ ...formData, aptDate: event.target.value });
              }}
              type="date"
              name="aptDate"
              id="aptDate"
              value={formData.aptDate}
              className=""
            />
          </div>
        </div>
        <div className="">
          <label
            htmlFor="aptTime"
            className="">
            Apt Time
          </label>
          <div className="">
            <input
              onChange={(event) => {
                setFormData({ ...formData, aptTime: event.target.value });
              }}
              type="time"
              name="aptTime"
              id="aptTime"
              value={formData.aptTime}
              className=""
            />
          </div>
        </div>
        <div className="">
          <label
            htmlFor="aptNotes"
            className="">
            Appointment Notes
          </label>
          <div className="">
            <textarea
              onChange={(event) => {
                setFormData({ ...formData, aptNotes: event.target.value });
              }}
              value={formData.aptNotes}
              id="aptNotes"
              name="aptNotes"
              rows="3"
              className=""
              placeholder="Detailed comments about the client"
            ></textarea>
          </div>
        </div>
        <div className="pt-5">
          <div className="">
            <button
              type="submit"
              onClick={formDataPosted}
              className="">
              <AiOutlineSchedule />
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointForm;