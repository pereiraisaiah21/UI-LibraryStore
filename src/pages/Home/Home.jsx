import BookSectionQuick from '../../components/BookSection/BookSectionQuick'
import BookCategorySection from '../../components/BookSection/BookSectionCategory'
import BookSectionDefault from '../../components/BookSection/BookSectionDefault'
import BookSectionRecommendation from '../../components/BookSection/BookSectionRecommendation'
import BannersHeadlines from '../../components/BannerHeadline'

import { books_section_default, books_section_categories, books_section_quick, books_group_section } from '../../../db-home'

function Home() {

    return (
        <>
            <BannersHeadlines />
            <BookSectionDefault section_books={books_section_default} sections_iscarousel={true} section_title={"Livros em destaque."} />
            <BookCategorySection categories={books_section_categories} />
            <BookSectionQuick books={books_section_quick} />
            <BookSectionRecommendation groups={books_group_section} />
            <BookSectionDefault section_books={books_section_default} sections_iscarousel={false} section_title={"Explore mais livros."} />
        </>
    )
}

export default Home
