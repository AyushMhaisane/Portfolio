import React from 'react';
import './Techstack.css';
import { techstackList } from '../../utils/TechstackList'; 
import { motion } from 'framer-motion'; 

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeInOut" } 
  }
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const Techstack = () => {
    return (
        <>
            <motion.div 
              className="techstack" 
              id='techstack'
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
                <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Technologies Stack</h2>
                <hr></hr>
                <p className='pb-3 text-center techstack-subtitle'>
                    ➡️ Including Programming Languages, frameworks, databases, front-end and back-end tools, and APIs
                </p>
                
                <div className="row">
                    {techstackList.map((tech, index) => (
                        <motion.div 
                          className='col-md-3' 
                          key={tech._id}
                          variants={cardVariants}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
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
                        </motion.div> 
                    ))}
                </div>
            </motion.div>
        </>
    )
}

export default Techstack;
