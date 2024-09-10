export default function AppPage(){
    return(
        <>
        <div className="container bg-white">
            <p className="mt-4 text-secondary bg-white">- App & Pages</p>
            <div className="mt-3 bg-white">
                <a className="bg-white" href="#"> Email </a>
            </div>
            <div className="mt-3 bg-white">
                <a className="bg-white" href="#"> Chat </a>
            </div>
            <div className="mt-3 bg-white">
                <a className="bg-white" href="#"> Calinder </a>
            </div>
            <div className="mt-3 bg-white">
                <a className="bg-white d-flex" href="#accountCollapse" data-bs-toggle="collapse"> <span className="bg-white">Account Setting</span> </a>
                <div className="collapse" id="accountCollapse">
                    <ul className="drop-menu bg-white">
                        <li className="drop-item bg-white">Account</li>
                        <li className="drop-item bg-white">Notification</li>
                        <li className="drop-item bg-white">Connections</li>
                    </ul>
                </div>
            </div>
            <div className="mt-3 bg-white">
                <a className="bg-white d-flex" href="#authenCollapse" data-bs-toggle="collapse"> <span className="bg-white">Authentication</span> </a>
                <div className="collapse" id="authenCollapse">
                    <ul className="drop-menu bg-white">
                        <li className="drop-item bg-white">Login</li>
                        <li className="drop-item bg-white">Register</li>
                        <li className="drop-item bg-white">Forget password</li>
                    </ul>
                </div>
            </div>
            <div className="mt-3 pb-4 bg-white">
                <a className="bg-white d-flex" href="#miscCollapse" data-bs-toggle="collapse"> <span className="bg-white">Misc</span> </a>
                <div className="collapse" id="miscCollapse">
                    <ul className="drop-menu bg-white">
                        <li className="drop-item bg-white">Error</li>
                        <li className="drop-item bg-white">Under Maintenance</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
}