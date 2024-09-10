import './Home.css'
import Man from '../assets/man.png';

export default function Home(){
    return(
        <>
        <div className="parent col-12 d-flex  justify-content-end">
        <div className="m-2">
        <div className="card p-3 bg-white border-0 shadow mb-1 m-4">
            <input className="bg-white border-0 w-25" type="text" placeholder="Search..."/>
        </div>

        <section>
            <div className="card m-4 border-0 shadow p-3 d-flex flex-row justify-content-between">
                <div className="text bg-white">
                <span className=' fs-4 text-primary bg-white '>Congratulations John! 🎉
                </span><br/><br/>
                <span className='inner bg-white'>You have done 72% more sales today. Check your new badge in your profile.</span>
                <div className="border mt-3 bg-white text-primary border-1 border-primary rounded-2 p-1">View Badges</div>
                </div>
                <div className="float-end">
                    <img className='bg-white ' src={Man} alt="" />
                </div>
            </div>
        </section>
        </div>
        </div>
        </>
    );
}