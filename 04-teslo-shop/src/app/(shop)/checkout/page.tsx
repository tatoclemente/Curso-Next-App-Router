import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";


const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
] 

export default function () {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
          <Title
            title="Verificar Orden"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

            {/* Carrito */}
            <div className="flex flex-col mt-5">
              <span className="text-xl">Ajustar elementos</span>
              <Link href="/cart" className="underline mb-5">
                Editar carrito
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
                      className="mr-5 rounded object-cover w-30 h-30"
                    />

                    <div>
                      <p>{ product.title }</p>
                      <p>${ product.price.toFixed(2) }</p>
                      <p className="font-bold">Subtotal: ${ product.price } x 3</p>

                    </div>
                  </div>
                ))
              }
            </div>

            {/* Resumen de orden */}
            <div className="bg-white rounded-xl shadow-xl p-7">

              <h2 className="text-2xl mb-2">Dirección de entrega</h2>
              <div className="mb-10">
                <p>Gustavo Clemente</p>
                <p>Calle falsa 123</p>
                <p>Av. Siempre viva 456</p>
                <p>CP: 5940</p>
                <p>Las Varillas</p>
                <p>Argentina</p>
                <p>555-5555-555</p>
              </div>

              {/* Divider */}
              <div className="w-full h-0.5 rounded bg-gray-300"></div>

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

                <p className="mb-5">
                  {/* Didclaimer */}
                  <span className="text-xs">
                    Al hacer click en "Completar orden", aceptas nuestros <Link className="underline" href='#'>Términos y condiciones</Link> y <Link className="underline" href="#">Políticas de privacidad</Link>
                  </span>

                </p>

                <Link href="/orders/123" className="flex justify-center btn-primary">
                  Completar orden
                </Link>
              </div>

            </div>

          </div>
      </div>
    </div>
  );
}