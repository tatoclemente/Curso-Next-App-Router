import { ProductGrid, Title } from "@/components";
import { Product, Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: Category;
  }
}

export default function CategoryDetail ({ params }:Props) {

  const { id } = params

  const products = initialData.products
    .filter((product:Product) => product.gender === id)

  // if ( id === 'kids') {
  //   notFound()
  // }

  // let gender;
  
  // if(id === 'men') {
  //   gender = 'Hombres'
  // } else if(id === 'women') {
  //   gender = 'Mujeres'
  // } else if(id === 'kid') {
  //   gender = 'Niños'
  // } else {
  //   gender = 'Todos'
  // }

  const labels: Record<Category, string> = {
    'men': 'Artículos para Hombres',
    'women': 'Artículos para Mujeres',
    'kid': 'Artículos para Niños',
    'unisex': 'Artículos para Todos'
  }

  const subLabels: Record<Category, string> = {
    'men': 'Ropa para ellos',
    'women': 'Ropa para ellas',
    'kid': 'Ropa para los mas peques',
    'unisex': 'Ropa para todos los generos'
  }


  return (
    <div>
        <Title 
        title={labels[id]}
        subtitle={subLabels[id]}
        className='mb-2'
      />
      <ProductGrid products={products} />
    </div>
  );
}