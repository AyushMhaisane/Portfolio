import React from 'react';
import './Techstack.css';
import { techstackList } from '../../utils/TechstackList'; 
// import Fade from "react-reveal/Fade"; // MODIFICATION: Hata diya
// import RubberBand from "react-reveal/RubberBand"; // MODIFICATION: Hata diya

const Techstack = () => {
    return (
        <>
            <div className="techstack" id='techstack'>
                {/* MODIFICATION: <RubberBand> wrapper hata diya */}
                <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Technologies Stack</h2>
                <hr></hr>
                <p className='pb-3 text-center techstack-subtitle'>
                    Including Programming Languages, frameworks, databases, front-end and back-end tools, and APIs
                </p>
                
                <div className="row">
                    {techstackList.map(tech => (
                        // MODIFICATION: <Fade> wrapper hata diya
                        <div key={tech._id} className='col-md-3'>
                            <div className="card m-2">
                                <div className="card-content">
                                    <div className="card-body">
                                        <div className="media d-flex justify-content-center">
                                            <div className="alig-self-center">
                                                {tech.icon && <tech.icon className='tech-icon'/>}
                                            </div>
                                            <div className="media-body">
                                                <h5>{tech.name}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    ))}
                </div>
            </div>
        </>
    )
}

export default Techstack;