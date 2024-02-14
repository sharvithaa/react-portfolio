import './Start.css';
import { useTypewriter } from 'react-simple-typewriter';
import Vector1 from '../../images/Ellipse 2 (1).png';
import Vector2 from '../../images/Ellipse 2.png';
import girl from '../../images/girl.67be86966e6674712c00.png';
import github from '../../images/github.11a2cf2e7e3371c6861a.png';
import linkedin from '../../images/linkedin.d75bef221fef4eb177e5.png';
import medium from '../../images/medium.png';


const Start=()=>
{
    const [text] = useTypewriter({
        words: [' Web Developer',' Machine Learning Enthusiast',' Blogger'],
        loop: 0
      })
    return(
        <div className='first' id="intro">
            <div className='first-left'>
                <div className='fisrt-name'>
                    <h1 className='first-intro' fontSize={'20px'}>Hi! I am</h1>
                    <h1 className='f-name'>Sharvithaa</h1>
                    <h2 className='f-desc'>I'm a{text}</h2>
                <div className="i-icon">
                    <a href="https://github.com/sharvithaa" target='_blank'><img src={github} height={'40px'} width={'40px'} alt=''></img></a>
                    <a href="https://www.linkedin.com/in/sharvithaa-dharmalingam-87b53a24b/" target='_blank' ><img src={linkedin} height={'40px'} width={'40px'} alt=''></img></a>
                    <a href="https://medium.com/@dharmalingamrandd" target='_blank'><img src={medium} height={'40px'} width={'40px'} alt=''></img></a>
                </div>
            </div>
            </div>
          <div className="i-right">
                <img src={Vector2} alt="" />
                <img src={Vector1} alt="" />
                <img src={girl} alt="" />
                
            </div>
        </div>
    );
}
export default Start;