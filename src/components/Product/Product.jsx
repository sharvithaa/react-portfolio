import './Product.css';
import ecomm from '../../images/ecommerce.png';
import page from '../../images/pagereplacement.png';
import portf from '../../images/portfolio.png';

const Product=()=>{
    return(
        <section className='pl' id='project'>
            <div className='a-center'>
                <h1 className='a-title'>My Recent Works</h1>
            </div>
            <div className='container portfolio-container'>
                <article className='portfolio-item'>
                    <div className='portfolio-item-img'>
                        <img src={ecomm}/>
                    </div>
                    <h3>E-Commerce for artisans</h3>
                    <div className='portfolio-item-cta'>
                        <a href='https://github.com/sharvithaa/ecommerceforartisans.github.io' className='btn' target='_blank'>GitHub</a>
                        <a href='https://ecommerceforartisans.netlify.app/'className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>

                <article className='portfolio-item'>
                    <div className='portfolio-item-img'>
                        <img src={page}/>
                    </div>
                    <h3>Page Replacement Algorithm</h3>
                    <div className='portfolio-item-cta'>
                        <a href='https://github.com/sharvithaa/pagereplacement.github.io' className='btn' target='_blank'>GitHub</a>
                        <a href='https://pagereplacementsimulator.netlify.app/'className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>

                <article className='portfolio-item'>
                    <div className='portfolio-item-img'>
                        <img src={portf}/>
                    </div>
                    <h3>Portfolio</h3>
                    <div className='portfolio-item-cta'>
                        <a href='https://github.com/sharvithaa/react-portfolio' className='btn' target='_blank'>GitHub</a>
                        <a href='https://sharvithaa.netlify.app/'className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
            </div>

        </section>

    );

}

export default Product;
