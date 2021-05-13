import img from '../../images/images.js'
import './Categories.css'
const Categories = () => {
        return (
            <div>
                <section className="title">
                    <h2>Categories</h2>
                    <h5><a href="javascript:void(0);">View All</a></h5>
                </section>
                <main className='box'>
                    <section>
                        <figure>
                            <img src={img.ban1} />
                        </figure>
                        <article>
                            <p>Men fashion wear</p>
                        </article>
                    </section>

                    <section>
                        <figure>
                            <img src={img.ban1} />
                        </figure>
                        <article>
                            <p>Ladies fashion wear</p>
                        </article>
                        
                    </section>

                    <section>
                        <figure>
                            <img src={img.ban1} />
                        </figure>
                        <article>
                            <p>Trending Jeans</p>
                        </article>
                       
                    </section>

                    <section>
                        <figure>
                            <img src={img.ban1} />
                        </figure>
                        <article>
                            <p>Trending Summer Outfit</p>
                        </article>
                        
                    </section>

                    <section>
                        <figure>
                            <img src={img.ban1} />
                        </figure>
                        <article>
                            <p>Kids summer wear </p>
                        </article>
                       
                    </section>

                    <section>
                        <figure>
                            <img src={img.ban1} />
                        </figure>
                        <article>
                            <p>Kids wear</p>
                        </article>
                        
                    </section>
                </main>
                </div>
        )
}

export default Categories
