import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";


const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
] 

export default function () {

  if (productsInCart.length === 0) redirect('/empty')
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
          <Title
            title="Carrito de compras"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

            {/* Carrito */}
            <div className="flex flex-col mt-5">
              <span className="text-xl">Agregar más items</span>
              <Link href="/" className="underline mb-5">
                Continuar comprando
              </Link>

              {/* Items */}
              {
                productsInCart.map(product => (
                  <div key={ product.slug } className="flex mb-5">
                    <Image
                      src={ `/products/${ product.images[0] }` }
                      width={ 100 }
                      height={ 100 }
                      alt={ product.title }
                      className="mr-5 rounded object-cover w-40 h-40"
                    />

                    <div>
                      <p>{ product.title }</p>
                      <p>${ product.price.toFixed(2) }</p>
                      <QuantitySelector quantity={3} />

                      <button className="underline mt-3">
                        Remover
                      </button>
                    </div>
                  </div>
                ))
              }
            </div>

            {/* Resumen de orden */}
            <div className="bg-white rounded-xl shadow-xl p-7 h-fit">
              <h2 className="text-2xl mb-2">Resumen de la orden</h2>

              <div className="grid grid-cols-2">

                <span>N° Productos:</span>
                <span className="text-right">3 artículos</span>

                <span>Subtotal:</span>
                <span className="text-right">$ 100</span>

                <span>Impuestos (15%)</span>
                <span className="text-right">$ 100</span>
                
                <span className="mt-5 text-2xl">Total:</span>
                <span className=" mt-5 text-2xl text-right">$ 100</span>

              </div>

              <div className="mt-5 mb-2 w-full">
                <Link href="/checkout/address" className="flex justify-center btn-primary">
                  Finalizar compra
                </Link>
              </div>

            </div>

          </div>
      </div>
    </div>
  );
}