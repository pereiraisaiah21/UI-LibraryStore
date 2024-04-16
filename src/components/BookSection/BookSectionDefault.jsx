

import { Swiper, SwiperSlide } from 'swiper/react'
import { AiOutlineSketch } from "react-icons/ai";

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

function BookSectionDefault({
    section_books,
    sections_iscarousel,
    section_title,
}) {

    const slidesPerView = window.innerWidth <= 768 ? 2 : 6

    return (
        <div className="booksection">
            <div className="booksection__container">
                <h2 className="booksection__title"><AiOutlineSketch />{section_title}</h2>
                {
                    sections_iscarousel
                        ?
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={slidesPerView}
                            navigation
                            pagination={{ clickable: true }}
                            className="booksection__list"
                        >
                            {
                                section_books.map((book, index) => (
                                    <SwiperSlide key={book.id}>
                                        <div className="booksection__card">
                                            <img
                                                src={book.image}
                                                alt={book.title}
                                                className="booksection__image"
                                            />
                                            <p className="booksection__name">{book.title}</p>
                                            <p className="booksection__author">{book.author}</p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                        </Swiper>
                        :
                        <ul className="booksection__list">
                            {section_books.map((book) => (
                                <li className="booksection__book booksection__book--simple" key={book.id}>
                                    <div className="explore-more__card">
                                        <img
                                            src={book.image}
                                            alt={book.title}
                                            className="booksection__cover booksection__cover--simple"
                                        />
                                        <p className="booksection__name booksection__name--simple">{book.title}</p>
                                        <p className="booksection__author booksection__author--simple">{book.author}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                }
            </div>
        </div>
    )
}

export default BookSectionDefault
