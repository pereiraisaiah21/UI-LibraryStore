

import { Swiper, SwiperSlide } from 'swiper/react'
import { AiOutlineBook } from "react-icons/ai";

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

function BookCategorySection({
    categories
}) {

    const slidesPerView = window.innerWidth <= 768 ? 2 : 7

    return (
        <section className="categories">
            <div className="categories__container">
                <h2 className="categories__title"><AiOutlineBook />Categorias</h2>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={slidesPerView}
                    navigation
                    pagination={{ clickable: true }}
                >
                    {categories.map((category) => (
                        <SwiperSlide key={category.id}>
                            <div className="categories__card">
                                {category.image}
                                <p className="categories__name">{category.name}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default BookCategorySection
