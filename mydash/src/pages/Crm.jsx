import "./Crm.css";

export default function Crm() {
  return (
    <>
      <div className="col-lg-10">
        <div className="mt-4 col-lg-9 float-lg-end col-md-12">
          {/* --------------------top box pair------------------ */}
          <div className="d-lg-flex">
            <div class="col-11 ms-4 col-lg-9 mb-3 mb-lg-0 d-lg-flex ms-lg-2 me-3 me-lg-5">
              <div
                class="col-lg-6 col-12 bg-white shadow me-3 mb-3"
                id="column1"
              >
                Box-1
              </div>
              <div class="col-lg-6 col-12 bg-white shadow mb-3" id="column1">
                Box-2
              </div>
            </div>
            {/* ---------------another box ------------------ */}
            <div class="ms-4 ms-lg-0 d-flex flex-column col-lg-5 col-12">
              <div className="box d-flex col-12">
                <div
                  class="col-lg-5 col-5 bg-white shadow mb-3 me-3"
                  id="column"
                >
                  Box-3
                </div>
                <div class="col-lg-5 col-5 bg-white shadow mb-3" id="column">
                  Box-4
                </div>
              </div>
              <div class="col-lg-10 col-10 bg-white shadow mb-3" id="column">
                Box-5
              </div>
            </div>
          </div>
          {/* ---------another box--------------------- */}
          {/* <div class="row border mb-3">
            <div class="col-6 border ms-3 me-3 mb-3" id="column">
              Box-6
            </div>
            <div class="col-6 border ms-3 me-3 mb-3" id="column">
              Box-7
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
