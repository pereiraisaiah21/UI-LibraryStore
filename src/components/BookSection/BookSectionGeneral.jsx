function BookSectionGeneral({
    books
}) {

    return (
        <section className="explore-more">
            <div className="explore-more__container">
                <h2 className="explore-more__title">Explore mais opções</h2>
                <ul className="explore-more__list">
                    {books.map((book) => (
                        <li className="explore-more__item">
                            <div className="explore-more__card">
                                <img
                                    src={book.image}
                                    alt={book.title}
                                    className="explore-more__image"
                                />
                                <p className="explore-more__book-title">{book.title}</p>
                                <p className="explore-more__author">{book.author}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default BookSectionGeneral
