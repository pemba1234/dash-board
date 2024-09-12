import "./Home.css";
import Man from "../assets/man.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <div className="col-lg-10 float-end">
        <div className="col-lg-12 float-end">
          <div className="parent col-lg-11 d-flex flex-column float-end me-5">
            <div className="container rounded-3 p-3 d-flex bg-white border-0 shadow mb-1 m-4 mt-2 ">
              <div className="ms-2 col-lg-d-none">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarTogglerDemo01"
                  aria-controls="navbarTogglerDemo01"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon d-lg-none ">
                    <FontAwesomeIcon icon={faBars} />
                  </span>
                </button>
              </div>
              <div className="input w-25 ms-3">
                <input
                  className="bg-white border-0"
                  type="text"
                  placeholder="Search..."
                />
              </div>
            </div>

            <section>
              <div className="card m-4 border-0 shadow p-3 d-flex flex-row justify-content-between">
                <div className="text bg-white">
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
      </div>
    </>
  );
}
