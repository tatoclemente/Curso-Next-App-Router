import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Pricing',
 description: 'SEO description Pricing Page',
 keywords: ['keywords Pricing Page', 'Otra keyword'],
};

const PricingPage = () => {
  return (
    <>
        <span className='text-7xl'>Pricing Page</span>
    </>
  )
}

export default PricingPage