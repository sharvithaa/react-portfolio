import './Blog.css';
import doodle from '../../images/doodle (2).png';
import recommand from '../../images/recommend.png';
import third from '../../images/3rd.png';

const Blog = () => {
    return (
        <section className='pl' id='blogs'>
            <div className='a-center'>
                <h1 className='a-title'>My Recent Blogs</h1>
            </div>
            
            <div className='container blog-container'>
            <article className='blog-item'>
                <div className='blog-item-img'>
                     <img src={doodle}/>
                    </div>
                    <div className='blog-item-cta'>
                    <a href='https://medium.com/@dharmalingamrandd/scribble-spark-the-joyful-journey-of-doodling-delights-1017d3b08507' className='blogbtn' target='_blank'>Read</a>
                    </div>
                </article>


                <article className='blog-item'>
                <div className='blog-item-img'>
                     <img src={recommand}/>
                    </div>
                    <div className='blog-item-cta'>
                    <a href='https://medium.com/@dharmalingamrandd/unlocking-the-digital-secrets-the-magic-behind-personalized-recommendations-cac4dba2701b' className='blogbtn' target='_blank'>Read</a>
                    </div>
                </article>

                <article className='blog-item'>
                <div className='blog-item-img'>
                     <img src={third}/>
                    </div>
                    <div className='blog-item-cta'>
                    <a href='https://medium.com/@dharmalingamrandd/unveiling-the-magic-decoding-the-technology-behind-snapchat-filters-and-how-they-transform-your-8b8d65944703' className='blogbtn' target='_blank'>Read</a>
                    </div>
                </article>



</div>

        </section>
    );
}

export default Blog;
