import './About.css';
import resume from './SHARVITHAA_21CSR186.pdf';

const About=()=>{
    return(
        <div className='a' id='about'>
            <div className='a-center'>
                <h1 className='a-title'>About Me</h1>
                <p className='a-sub'>Name: Sharvithaa D</p>
                <p className='a-desc'>Hello there,I'm Sharvithaa,who is seeking for a rewarding position in a recognized company which gives an opportunity to develop my skills, expand my knowledge and strengthen my learnings.
I'm more intrested in working in the fields of Web development and Machine learning and have also done many projects </p>
                <a href={resume} download="Resume" className='resBtn'><div className='download'>Download CV</div></a> 
            </div>
        </div>
    )
}
export default About;