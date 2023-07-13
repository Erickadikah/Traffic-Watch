import React, { useState } from "react";
// import closeIcon from "../../assets/images/customerUi/icons/close.png";


export default function NewServiceRequestForm(props) {
  const styles = {
    display: props.showRequestForm ? "block" : "none",
    opacity: props.showRequestForm ? 1 : 0,
    transition: "opacity 0.3s ease",
  };

  const [warrantiedItems, updateWarrantiedItems] = useState([
    "----",
    "Tv",
    "Fridge",
    "Bath tab",
    "Heater",
  ]);

  const coveredItem = warrantiedItems.map((item, key) => {
    return <option key={key} value={item}>{item}</option>;
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const property = formData.get("property");
    const description = formData.get("description");
    const preferredDate = formData.get("preferred-date");
    const times = Array.from(formData.getAll("preferred-time"));

    const requestData = {
      property,
      description,
      preferredDate,
      times,
    };

    console.log(requestData);

    event.target.reset();
  };

  return (
    <section id="request-form" style={styles}>
      <img />
      <div className="container form-container">
        <div>
          <h1 className="text-center">New service request</h1>
        </div>
        <form role="form" name="request-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Property Name</label>
            <select name="property" className="form-select form-control">
              {coveredItem}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="request-description">Description</label>
            <textarea
              className="form-control"
              name="description"
              placeholder="Please describe the problem"
              id="request-description"
            />
          </div>
          <div className="form-group availability">
            <div>
              <label htmlFor="preferred-date">Preferred date</label>
              <input
                type="date"
                name="preferred-date"
                id="preferred-date"
                className="form-control"
              />
            </div>
            <div className="form-checkbox-group">
              <p className="form-text pref-time">Preferred time</p>
              <input
                type="checkbox"
                className="form-checkbox"
                id="time-1"
                name="preferred-time"
                value="8am-12pm"
              />
              <label htmlFor="time-1"> Between 8am - 12pm</label>
              <br />
              <input
                type="checkbox"
                className="form-checkbox"
                id="time-2"
                name="preferred-time"
                value="12pm-4pm"
              />
              <label htmlFor="time-2"> Between 12pm - 4pm</label>
              <br />
              <input
                type="checkbox"
                className="form-checkbox"
                id="time-3"
                name="preferred-time"
                value="4pm-8pm"
              />
              <label htmlFor="time-3"> Between 4pm - 8pm</label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
