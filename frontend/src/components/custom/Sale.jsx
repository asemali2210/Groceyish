
export default  function Sale() {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <div className="img-box">

                    </div>
                    <p className="_category">Coffe & teas</p>
                    <p className="_category">Coffe 1kg</p>
                    <p className="_category">$20</p>
                    <button >Add to cart</button>
                </div>
                <div className="form">
                  <p className="heading">10% OFF</p>
                  <p className="sub__heading">For new member sign up at the first time</p>
                  <label>Email address*</label>
                  <input className="" type="email" placeholder="johndoe@gmail.com"></input>
                  <label>Password</label>
                  <input className="" type="email" placeholder="johndoe@gmail.com"></input>
                  <button type="submit">Register Now</button>
                </div>
            </div>
        </div>
    </div>
  )
};