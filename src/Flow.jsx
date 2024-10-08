import "./Style/Flow.css";
import f1 from "./images/f1.png";
import f2 from "./images/f2.png";
import f3 from "./images/f3.png";
import f4 from "./images/f4.png";
import a1 from "./images/a1.png";
import a2 from "./images/a2.png";


function Flow() {
  return (
    <>
      <h1 className="flowHead">Way We Design</h1>
      <div className="flow">
        <div className="flow1">
          <div className="flow1-detail">
            <img src={f1} alt="" />
            <h6>
              Discovery <br />&<br /> Strategy
            </h6>
          </div>
          <img src={a1} alt="" className="arr1" />
        </div>
        <div className="flow1 F">
          <div className="flow1-detail">
            <h6>
              Persona <br />
              Creation
            </h6>
            <img src={f2} alt="" />
          </div>
          <img src={a2} alt="" className="arr2" />
        </div>{" "}
        <div className="flow1">
          <div className="flow1-detail">
            <img src={f3} alt="" />
            <h6>
              Design <br /> Phase
            </h6>
          </div>
          <img src={a1} alt="" className="arr1" />
        </div>{" "}
        <div className="flow1 F">
          <div className="flow1-detail">
            <h6>Development</h6>
            <img src={f4} alt="" />
          </div>
          <img src={a2} alt="" className="arr2" />
        </div>{" "}
        <div className="flow1">
          <div className="flow1-detail">
            <img src={f1} alt="" />
            <h6>
              Launch <br />&<br /> Maintenance
            </h6>
          </div>
        </div>{" "}
      </div>
    </>
  );
}
export default Flow;
