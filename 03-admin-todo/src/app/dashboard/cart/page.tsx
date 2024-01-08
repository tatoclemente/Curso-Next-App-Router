import { cookies } from "next/headers";
import { products, type Product } from '../products/data/products';
import { ItemCard } from "@/shopping-cart/components/ItemCart";
import { WidgetItem } from "@/components";


export const metadata = {
 title: 'Carrito de compras',
 description: 'Carrito de compras',
};

interface ProductInCart {
  product: Product,
  quantity: number,
}

const getProductInCart = ( cart: { [id:string]:number } ): ProductInCart[] => {
  const productsInCart: ProductInCart[] = [];
  for (const id of Object.keys(cart)) {
    const product = products.find( p => p.id === id )
    if ( product ) {
      productsInCart.push({
        product,
        quantity: cart[id]
      })
    }
  
  }
  return productsInCart;
}

export default function CartPage() {

  const cookieStore = cookies()
  const cart = JSON.parse( cookieStore.get('cart')?.value ?? '{}' ) as { [id:string]:number }
  
  const productsInCart = getProductInCart(cart);

  const totalToPay = productsInCart.reduce( (total, { product, quantity }) => total + (product.price * quantity), 0 )

  
  if (productsInCart.length === 0) {
    return (
      <h1 className="text-center text-xl">No hay productos en el carrito</h1>
    )
  }

  return (
    <div>
      <h1 className="text-5xl">Productos en el carrito</h1>
      <hr className="mb-2" />
      <div className="flex flex-col sm:flex-row w-full">
        <div className="flex flex-col gap-2 w-full sm:w-8/12">
          {
            productsInCart.map( ({ product, quantity }) => (
              <ItemCard key={product.id} product={product} quantity={quantity} />
            ))
          }
        </div>

        <div className="flex flex-col ml-2 w-full sm:w-4/12">
          <WidgetItem title="Total a pagar">
            <div className="mt-2 flex items-center justify-center gap-4">
              <h3 className="text-3xl font-bold text-gray-700">${ (totalToPay * 1.15).toFixed(2) }</h3>
            </div>
              <span className="font-bold block text-gray-500">Impuestos de 15%: ${ (totalToPay * 0.15).toFixed(2) }</span>
          </WidgetItem>
        </div>
      </div>
    </div>
  );
}