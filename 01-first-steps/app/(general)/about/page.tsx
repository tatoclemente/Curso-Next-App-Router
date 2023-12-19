import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'About',
 description: 'SEO Description',
 keywords: ['SEO Keywords', 'Sobre Tato', 'Pagina de mí'],
};

const AboutPage = () => {
  return (
    <>
        <span className='text-7xl'>About Page</span>
    </>
  )
}

export default AboutPage