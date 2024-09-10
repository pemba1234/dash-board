import './HeroNav.css';

export default function HeroNav(){
    return(
        <>
<div className="container bg-white">
    <h2 className='mb-5 position-fixed col-2 bg-white'>
        <img className='image' src="" alt="" />sneat</h2>
    {/* -----------dashboard------------- */}
    <div className="component bg-white mb-3 pt-5 ">
        <a className="d-flex align-items-center bg-white" data-bs-toggle="collapse" href="#dashboardCollapse">
            <img src="" className="image bg-white me-2" alt="Dashboard" />
            <span className='bg-white text'>Dashboard</span>
            <span className="badge rounded-pill bg-danger ms-2">5</span>
            <span className='ms-2 bg-white'>  </span>
        </a>
        <div className="collapse bg-white" id="dashboardCollapse">
            <ul className="drop-menu bg-white">
                <li className="drop-item bg-white">Analytic</li>
                <li className="drop-item bg-white">CRM</li>
                <li className="drop-item bg-white">E-commerce</li>
                <li className="drop-item bg-white">Logistic</li>
                <li className="drop-item bg-white">Academy</li>
            </ul>
        </div>
    </div>
{/* --------------Layout--------------------- */}
    <div className="mb-3">
        <a className="d-flex align-items-center bg-white" data-bs-toggle="collapse" href="#layoutCollapse">
            <img src="" className="image bg-white me-2" alt="Layout" />
            <span className='bg-white'>Layout</span>
        </a>
        <div className="collapse" id="layoutCollapse">
            <ul className="drop-menu bg-white ">
                <li className="drop-item bg-white
                ">Without menu</li>
                <li className="drop-item bg-white
                ">Without navbar</li>
                <li className="drop-item bg-white
                ">Fluid</li>
                <li className="drop-item bg-white
                ">Container</li>
                <li className="drop-item bg-white
                ">Blank</li>
            </ul>
        </div>
    </div>
{/* ------------------front page---------------- */}
    <div>
        <a className="d-flex align-items-center bg-white" data-bs-toggle="collapse" href="#fontPagesCollapse">
            <img src="" className="image bg-white me-2" alt="Font Pages" />
            <span className='bg-white'>Font Pages</span>
        </a>
        <div className="collapse" id="fontPagesCollapse">
            <ul className="drop-menu bg-white ">
                <li className="drop-item bg-white
                ">Landing</li>
                <li className="drop-item bg-white
                ">Pricing</li>
                <li className="drop-item bg-white
                ">Payment</li>
                <li className="drop-item bg-white
                ">Checkout</li>
                <li className="drop-item bg-white
                ">Help Center</li>
            </ul>
        </div>
    </div>
</div>
        </>
    );
}