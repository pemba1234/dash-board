import "./Home.css";
import Man from "../assets/man.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  function Menu() {
    var x = document.getElementById("navbar");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  return (
    <>
      <div className="col-lg-10 float-end">
        <div className="parent col-lg-11 d-flex flex-column float-end me-5">
          <div className="rounded-3 p-3 d-flex bg-white border-0 justify-content-between shadow mb-1 m-4 mt-2 ">
            <div className="input w-25 ms-3">
              <input
                className="bg-white border-0"
                type="text"
                placeholder="Search..."
              />
            </div>
            <div className="ms-2">
              <button
                onClick={Menu}
                class="navbar-toggler"
                data-bs-toggle="collapse"
                data-bs-target="#navbarToggle"
                aria-controls="navbarToggle"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
          </div>

          <section>
            <div className="card m-4 border-0 shadow p-3 d-flex flex-row justify-content-between col-lg-8 col-md-12">
              <div className="text bg-white col-6">
                <span className=" fs-4 text-primary bg-white ">
                  Congratulations John! 🎉
                </span>
                <br />
                <br />
                <span className="inner bg-white">
                  You have done 72% more sales today. Check your new badge in
                  your profile.
                </span>
                <div className="border mt-3 bg-white text-primary border-1 border-primary rounded-2 p-1">
                  View Badges
                </div>
              </div>
              <div className="float-end">
                <img className="bg-white " src={Man} alt="" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
