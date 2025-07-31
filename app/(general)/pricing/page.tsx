import type { Metadata } from "next";


export const metadata : Metadata = {
 title: 'Pricing Page',
 description: 'Page for pricing information',
};

export default function pricingPage(){
    return (
        <>
            <span className="text-5xl">Princing page</span>
        </>
    )
}