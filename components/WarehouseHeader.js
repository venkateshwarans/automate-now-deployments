const towarehouseHeader = {
  backgroundColor: "#f7f7f7",
  marginBottom: "80px",
  textAlign: "center"
}

const toplogoDots  = {
  color: "#004EB3",
  fontSize: "18px",
  display: "inline-block",
  margin: 0
}
const toplogoContainer = {
  borderStyle: "solid",
  WebkitBoxShadow: "0px 0px 21px 1px rgba(68,68,68,0.65)",
  MozBoxShadow: "0px 0px 21px 1px rgba(68,68,68,0.65)",
  boxShadow: "0px 0px 21px 1px rgba(68,68,68,0.65)",
  borderWidth: "1px",
  borderColor: "#cccccc",
  borderRadius: "10px",
  background: "#fff",
  padding: "5px",
  margin: "40px 10px 40px 10px",
  width: "250px",
  height: "125px",
  display: "inline-block",
  verticalAlign: "middle",
  textAlign: "center"
}
const topLogoHelper = {
  display: "inline-block",
  height: "100%",
  verticalAlign: "middle"
}
const topLogo = {
  verticalAlign: "middle",
  maxHeight: "105px",
  maxWidth: "230px"
}


export const WarehouseHeader = (props) => (
  <div style={towarehouseHeader}>
    <div className="toplogo-holder">
      <div style={toplogoContainer}>
        <span style={topLogoHelper}></span>
        <img
          style={topLogo}
          src={props.sourceImage}
          alt="3PL Central Logo"
        />
      </div>
      <p style={toplogoDots}>● ● ● ● ●</p>

      <div style={toplogoContainer}>
        <span style={topLogoHelper}></span>
        <img
          style={topLogo}
          src={props.destinationImage}
          alt="Looker Logo"
        />
      </div>
    </div>
  </div>
);
