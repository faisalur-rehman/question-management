import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <div className="content">
      <div className="content-left">
        <h3 className="steps">What steps needed to be taken</h3>
        <ol>
          <li>Fill Out Application</li>
          <p>
            Fill out a short application providing information about you and
            your business.
          </p>
          <li>Get Options</li>
          <p>
            We will review your information and provide a response without
            negatively impacting credit.
          </p>

          <li>Review Your Options</li>
          <p>
            When qualified, choose the purchase price that best fits your
            business needs.{" "}
          </p>
          <li>Lock In Your Options</li>
          <p>Confirm your choice and submit final documents.</p>
          <li>Finalize Your MCA:</li>
          <p>
            E-sign your contract and the purchase price will be sent upon
            purchaser’s acceptance of the MCA.
          </p>
          <li>Help Your Business</li>
          <p>
            Our Merchant Cash Advances and Merchant Financial Advice assisted
            and saved many businesses within the United States and Canada
          </p>
        </ol>
      </div>
      <div className="content-form">
        <form>
          <label htmlFor="name">
            Name <span style={{ color: "red" }}>*</span>
          </label>
          <input type="text" id="name" />
          <br />
          <label htmlFor="email">
            Email <span style={{ color: "red" }}>*</span>
          </label>
          <input type="email" id="email" />
          <br />
          <label htmlFor="number">Phone Number</label>
          <input type="number" id="number" />
          <br />
          <label htmlFor="comp-name">
            Company Name <span style={{ color: "red" }}>*</span>
          </label>
          <input type="text" id="comp-name" />
          <br />
          <label htmlFor="website">Website</label>
          <input type="text" id="website" />
          <br />
          <label htmlFor="income">
            Monthly Income <span style={{ color: "red" }}>*</span>
          </label>
          <input type="number" id="income" />
          <br />
          <label htmlFor="textarea">What Do You Need The Advance For?</label>
          <textarea id="textarea" rows="8" cols="60"></textarea>
          <br />
          <input type="submit" name="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Main;
