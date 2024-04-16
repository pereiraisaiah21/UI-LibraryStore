

import { Swiper, SwiperSlide } from 'swiper/react'
import { AiOutlineUpSquare } from "react-icons/ai"

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

function BookSectionQuick({
    books
}) {

    return (
        <section className="quick-choice">
            <div className="quick-choice__container">
                <h2 className="quick-choice__title"><AiOutlineUpSquare />Escolhas rápidas.</h2>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        768: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {books.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="quick-choice__item">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="quick-choice__image"
                                />
                                <div className="quick-choice__info">
                                    <p className="quick-choice__title">{item.title}</p>
                                    <p className="quick-choice__author">{item.author}</p>
                                    <div className="quick-choice__arrow">&#10148;</div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default BookSectionQuick
