import { newsArticles } from "../constants/data"

const Articles = () => {
    return (
        <section id="home-articles" className="py-2">
            <div className="container">
                <h2>Editor Picks</h2>
                <div className="articles-container">
                    {newsArticles.map(article => {
                        return (
                            <article key={article.id} className={article.articleClass}>
                                {article.imgSrc && <img src={article.imgSrc} alt="" />}
                                <div>
                                    <div className={article.categoryClass}>{article.category}</div>
                                    <h3>
                                        <a href={article.url}>{article.headerText}</a>
                                    </h3>
                                    <p>
                                        {article.pText}
                                    </p>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Articles