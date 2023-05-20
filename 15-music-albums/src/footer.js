const Footer=()=>{
    return (
        <div className="footer">
          <input type="range" min={1} max={100} className="ranger"></input>
          <div className="range-details">
            <h4 className="play">01:30/03:33 Max</h4>
            <h4 className="play">1.0</h4>
          </div>
        </div>
      )
}

export default Footer;