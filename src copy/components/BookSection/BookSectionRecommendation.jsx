import { AiOutlineBook } from "react-icons/ai"

function BookSectionRecommendation({
    groups
}) {

    return (
        <section className="recommendations">
            <div className="recommendations__container">
                <h2 className="recommendations__title"><AiOutlineBook />Reading Recommendations</h2>
                <ul className="recommendations__list">
                    {groups.map((group) => (
                        <li key={group.id} className="recommendations__item">
                            <a href="#" className="recommendations__link">
                                <div className="recommendations__images">
                                    {group.images.map((image, index) => (
                                        <img key={index} src={image} alt={`Book ${index + 1}`} className="recommendations__image" />
                                    ))}
                                </div>
                                <p className="recommendations__group-name"><strong>{group.name}</strong></p>
                                <p className="recommendations__book-count">{group.books} books</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default BookSectionRecommendation
