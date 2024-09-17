import "./Crm.css";

export default function Crm() {
  return (
    <>
      <div className="col-lg-10">
        <div className="mt-4 col-lg-9 float-lg-end col-md-12">
          <div className="d-lg-flex">
            <div class="col-md-12 col-lg-9 mb-3 d-lg-flex ms-lg-4">
              <div
                class="col-lg-5 col-11 bg-white shadow me-3 mb-3"
                id="column1"
              >
                Box-1
              </div>
              <div
                class="col-lg-5 col-11 bg-white shadow ms-3 mb-3"
                id="column1"
              >
                Box-2
              </div>
            </div>
            {/* ---------------another box ------------------ */}
            <div class="d-flex flex-column col-lg-5 ">
              <div className="box d-flex">
                <div
                  class="col-lg-5 col-md-6 bg-white shadow me-3 mb-3"
                  id="column"
                >
                  Box-3
                </div>
                <div
                  class="col-lg-5 col-md-4 bg-white shadow ms-3 me-3 mb-3"
                  id="column"
                >
                  Box-4
                </div>
              </div>
              <div
                class="col-lg-11 col-md-4 bg-white shadow me-3 mb-3"
                id="column"
              >
                Box-5
              </div>
            </div>
          </div>
          {/* ---------another box--------------------- */}
          <div class="row border mb-3">
            <div class="col-6 border ms-3 me-3 mb-3" id="column">
              Box-6
            </div>
            <div class="col-6 border ms-3 me-3 mb-3" id="column">
              Box-7
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
