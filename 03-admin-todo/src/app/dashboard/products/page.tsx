import { ProductCard } from "./components";



export const metadata = {
 title: 'Products Page',
 description: 'Products Page',
};
export default function NamePage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2"> 
      <ProductCard />
    </div>
  );
}