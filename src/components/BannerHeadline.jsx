import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

function BannersHeadlines() {

    return (
        <section className="highlight">
            <Swiper
                spaceBetween={20}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide>
                    <img src="https://placeholder.co/1200x400" alt="Destaque 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://placeholder.co/1200x400" alt="Destaque 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://placeholder.co/1200x400" alt="Destaque 3" />
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default BannersHeadlines
