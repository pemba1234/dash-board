import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  function Menu() {
    let x = document.getElementById("navbar");

    x.classList.toggle("show");
  }

  return (
    <>
      <div className="d-lg-flex col-12 justify-content-end">
        <div
          className="rounded-3 p-3 d-flex bg-white border-0 me-lg-5
      justify-content-between shadow-sm mb-1 mt-3  col-lg-9 col-md-12"
        >
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
      </div>
    </>
  );
}
