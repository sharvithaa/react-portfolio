import './About.css';
import resume from './21CSR186_resume1942023.pdf';

const About=()=>{
    return(
        <div className='a' id='about'>
            <div className='a-center'>
                <h1 className='a-title'>About Me</h1>
                <p className='a-sub'>Name: Sharvithaa D</p>
                <p className='a-desc'>A very passionate B.E Computer Science graduate who is seeking a rewarding position in a recongnised company which gives an oppurtunity to develop my skills,expand my knowledge and strengthen my learnings.I am more interested in developing attractive designs and functional websites.My strength are in DSA,Web Development. </p>
                <a href={resume} download="Resume" className='resBtn'><div className='download'>Download CV</div></a> 
            </div>
        </div>
    )
}
export default About;