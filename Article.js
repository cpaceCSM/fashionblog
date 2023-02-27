import imageOne from '../images/blog-image-1.jpg'
import imageTwo from '../images/blog-image-2.jpg'

function Article () {
    return (
        <main>
            <h5>11/12/20</h5>
            <h2>On the Street in Brooklyn</h2>
                <img src={imageOne} alt="Blue BK Neighborhood"></img>
                     {/* #8 */}
                         <article>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nobis sed error quod ratione. Facilis repellendus dolorem aspernatur expedita voluptatem laudantium nisi exercitationem. Numquam, dolores praesentium error nisi odit fugiat.</p>
                        <h4>Continues ...</h4>
                         </article>
        <hr/>
            <h5>11/11/20</h5>
            <h2>Vintage in Vogue</h2>
                <img src= {imageTwo}  alt="Vintage in Vogue"></img>
                        //<article>
                        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam quod doloribus tempore excepturi, explicabo commodi omnis! Autem nemo magni quasi optio molestias, veniam incidunt maiores, doloribus necessitatibus cumque pariatur soluta.</p>
                        </article>
        </main>
    );
}

export default Article;