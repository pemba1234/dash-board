import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBusinessTime, faClosedCaptioning, faDollarSign, faEllipsisVertical,faEnvelope,faFutbol,faHouse,faMagnifyingGlass, faMobileScreen, faWallet,} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.jpg";
import man from "../../assets/man.jpg";

import "./Card.css";


function Card(){
 
return (

    
  <div class="container">
        

      <div class =" searchbar shadow-lg p-3 mb-5 bg-body rounded">
        <FontAwesomeIcon icon={faMagnifyingGlass}
          className="search p-1 ms-2 "/>{" "}
          search . . .
          <div className="dropdown3">
          <img src={logo} alt="logo" className="logo  " data-bs-toggle="dropdown"/>

            <ul className="dropdown-menu  border-1 shadow">
              <li> <a className="dropdown-item" href="#">My profile</a></li>
              <li><a className="dropdown-item" href="#">Settings</a></li>
              <li><a  className = "dropdown-item" href="#">Billing plan</a></li>
              <li><hr class="dropdown-divider"></hr></li>
              <li><a class="dropdown-item" href="#">log out</a></li>
            </ul>
            </div>
          </div>
            
           <div class="container m">
        <div class="row justify-content-md-center"></div>
      </div>
      <div class="row">
        <div class=" first col col-lg-6 mb-6 shadow  rounded mt-0 ">
          <h3>Congratulations John! 🎉</h3>
          <p>You have done 72% more sales today.</p>
          <p>Check your new badge in your profile.</p>
          <p className="button mb-6"><button type="button" class=" btn btn btn-outline-primary ">View Badges</button></p>
          <img src={man} className="man" alt="" />
        </div>
        <div class=" second col col-lg-1 shadow  rounded ">
            <p className="profit mt-4" ></p>
            profit{" "}
            <div className="dropdown">
            <FontAwesomeIcon icon={faEllipsisVertical} className="menu ms-4 " data-bs-toggle="dropdown"/> 

            <ul className="dropdown-menu  border-1 shadow">
              <li><a className="dropdown-item" href="#">View More</a></li>
              <li><a className="dropdown-item" href="#">Delete</a></li>
              </ul>
               </div>
               

          <h4 className="number1">$12,628</h4>
          <p className="no-1 ">+72.80%</p>
        </div>
        <div class=" third col col-lg-1 rounded shadow ">
          <p className="Sales mt-4"></p>
            Sales{" "}

            <div className="dropdown">
            <FontAwesomeIcon icon={faEllipsisVertical} className="menu ms-4 " data-bs-toggle="dropdown"/> 

            <ul className="dropdown-menu  border-1 shadow">
              <li><a className="dropdown-item" href="#">View More</a></li>
              <li><a className="dropdown-item" href="#">Delete</a></li>
              </ul>
               </div>


          <h4 className="number2">$4,679</h4>
          <p className="no-2">+28.42%</p>
        </div>
      </div>

      <div class="row">
        <div class=" f-1 col-6 shadow rounded">
          <p className="total ">
            Total Revenue{" "}
            <FontAwesomeIcon icon={faEllipsisVertical} 
            
           
        className="revenue  "/>{" "}</p>
           <div class="btn-group">
  <button class=" button1  btn-outline-primary btn-sm " type="button">
   2023  </button>
  <button type=" button" class=" button2  btn-sm btn-outline-primary dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">2023</span>
  </button>
  <ul class="dropdown-menu">
  <li><a class="dropdown-item" href="#">2021</a></li>
    <li><a class="dropdown-item" href="#">2020</a></li>
    <li><a class="dropdown-item" href="#">2019</a></li>
    <li><a class="dropdown-item" href="#">2018</a></li>

  </ul>
</div>
<p className="com">62% Company Growth</p>
<p className="dollor"><FontAwesomeIcon icon={faDollarSign} />2023</p>
<p className="dollor2">$32.5k</p>


<p className="wallet"><FontAwesomeIcon icon={faWallet} />2022</p>
<p className="dollor3">$41.2k</p>
  
</div>

        <div class=" f-2 col-md-2 shadow p-3  rounded">
          <p className="Payments ">
            payments {" "} 
            <div className="dropdown">
            <FontAwesomeIcon icon={faEllipsisVertical} className="menu ms-4 " data-bs-toggle="dropdown"/> 

            <ul className="dropdown-menu  border-1 shadow">
              <li><a className="dropdown-item" href="#">View More</a></li>
              <li><a className="dropdown-item" href="#">Delete</a></li>
              </ul>
               </div>
          </p>
          <h4 className="number3">$2,456</h4>
          <p className="no-3">$14,857</p>
        </div>
        <div class=" f-3 col-md-2 shadow p-3 rounded ">
          <p className="Transactions">Transactions</p>
          <div className="dropdown1">
            <FontAwesomeIcon icon={faEllipsisVertical} className="menu ms-4 " data-bs-toggle="dropdown"/> 

            <ul className="dropdown-menu  border-1 shadow">
              <li><a className="dropdown-item" href="#">View More</a></li>
              <li><a className="dropdown-item" href="#">Delete</a></li>
              </ul>
               </div>
               
          <h4 className="number4">$14,857</h4>
          <p className="no-4">+28.14%</p>
        </div>

        <div class=" f-4 col-4 shadow rounded">
          <p className="Profile">Profile Report</p>
          <button className="butt  bg-succesive">YEAR 2022</button>
          <p className="number5">68.2%</p>
          <p className="no-5">$84,686</p>
        </div>
        </div>

      <div class="container">
        <div class="row">
          <div class="f-5 col-sm-3  rounded shadow">
            <p className="order mt-3">Order Statistics <FontAwesomeIcon icon={faEllipsisVertical}  className="icon "/></p>
            <p className="no-6">42.82k Total Sales</p>
            <h6 className="number6">8,258</h6>
            <p className="Total">order sales</p>
           <p className="num1"> <FontAwesomeIcon icon={faMobileScreen}className=" ms-3 "/><span className="m-2">Electronic</span> <p></p></p> 
          <p> <FontAwesomeIcon icon={faClosedCaptioning}className="num2 ms-3 "/><span className="m-2">Fashion</span> </p> 
          <p> <FontAwesomeIcon icon={faHouse} className="num3 ms-3"/> <span className="m-1">Decor</span></p> 
          <p> <FontAwesomeIcon icon={faFutbol} className="num4 ms-3"/> <span className="m-1">Sports</span> </p> 
            </div>
          <div class=" f-6 col-sm-3 rounded shadow">
          <button type="button" class="btn-1  m-1 rounded mt-3">Income</button>
         <button type="button" class="btn-2  btn btn-outline-primary m-1 rounded">Expenses</button>
          <button type="button" class="btn-3  btn btn-outline-primary  m-1 rounded">Profit</button>
          <p ><FontAwesomeIcon icon={faBusinessTime}  className="icon-2"/> Total Balance  </p>
          <p className="num5">$459.10 <span className="num6">42.9%</span></p>
          </div>
          <div class=" f-7 col-sm-4  rounded shadow">
            <h6 className="Trans">Transactions <span className="sym"><FontAwesomeIcon icon={faEllipsisVertical} /></span></h6>
            <p className="num7">Paypal <span className="num8 "> +82.6 USD</span></p>
            <p className="num9">Send money</p>
            <p className="num10"> Wallet <span className="num11"> +270.69 USD</span></p>
            <p className="num12">Mac'D</p>
            <p className="num10"> Transfer<span className="num11"> +637.91 USD</span></p>
            <p className="num12">Refund</p>
            <p className="num10"> Credit <span className="num11"> -838.71 USD</span></p>
            <p className="num12">Ordered Food</p>
            <p className="num10"> wallet <span className="num11"> +270.69 USD</span></p>

           </div>
        </div>
      </div>
      </div>
   );
}

export default Card;
