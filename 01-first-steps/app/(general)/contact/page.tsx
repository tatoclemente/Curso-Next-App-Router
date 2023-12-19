import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Contact',
 description: 'SEO Description Contact Page',
 keywords: ['Pagina de contacto', 'Lo mejor de next']
};

const ContactPage = () => {
  return (
    <>
        <span className='text-7xl'>Contact Page</span>
    </>
  )
}

export default ContactPage