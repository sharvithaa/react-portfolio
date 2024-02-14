import './Skills.css';

const Skills=()=>{
    return(
        <div className='section' id='skills'>
            <div className='a-center'>
                <h1 className='a-title'>Why Choose Me</h1>
                <p className='a-sub'>My Skills are</p>
            </div>
            <div className='skill-main'>
                <div className='skill-bar'>
                    <div className='info'>
                            <p>HTML</p>
                            <p className='percent'>90%</p>
                    </div>
                    <div className='bar'>
                            <span className='html'></span>
                    </div>
                </div>

                <div className='skill-bar'>
                    <div className='info'>
                            <p>CSS</p>
                            <p>70%</p>
                    </div>
                    <div className='bar'>
                        <span  className='css'></span>
                    </div>
                </div>

                <div className='skill-bar'>
                    <div className='info'>
                            <p>Java Script</p>
                            <p>70%</p>
                    </div>
                    <div className='bar'>
                            <span className="js"></span>
                    </div>
                </div>

                <div className='skill-bar'>
                    <div className='info'>
                            <p>React JS</p>
                            <p>75%</p>
                    </div>
                <div className='bar'>
                        <span className='react'></span>
                </div>
             </div>
    
            <div className='skill-bar'>
                <div className='info'>
                    <p>Node JS</p>
                    <p>60%</p>
                </div>
                <div className='bar'>
                    <span className='node'></span>
                </div>
            </div>

            <div className='skill-bar'>
                <div className='info'>
                    <p>C</p>
                    <p>70%</p>
                </div>
                <div className='bar'>
                    <span className='c'></span>
                </div>
            </div>

            <div className='skill-bar'>
                <div className='info'>
                    <p>Java</p>
                    <p>80%</p>
                </div>
                <div className='bar'>
                    <span className='java'></span>
                </div>
            </div>

            <div className='skill-bar'>
                <div className='info'>
                    <p>Django</p>
                    <p>60%</p>
                </div>
                <div className='bar'>
                    <span className='django'></span>
                </div>
            </div>

            <div className='skill-bar'>
                <div className='info'>
                    <p>MongoDB</p>
                    <p>60%</p>
                </div>
                <div className='bar'>
                    <span className='mongodb'></span>
                </div>
            </div>

            <div className='skill-bar'>
                <div className='info'>
                    <p>Git and Github</p>
                    <p>85%</p>
                </div>
                <div className='bar'>
                    <span className='git'></span>
                </div>
            </div>

            
            <div className='skill-bar'>
                    <div className='info'>
                            <p>Machine Learning Algorithms</p>
                            <p>85%</p>
                    </div>
                    <div className='bar'>
                            <span className='ml'></span>
                    </div>
                </div>
        </ div>
    </div>
    )
}
export default Skills;