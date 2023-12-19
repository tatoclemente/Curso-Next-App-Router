import { WidgetGrid } from "@/components";


export const metadata = {
 title: 'Admin Dashboard',
 description: 'Pagina del Admin Dashboard',
};

export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl">Hola Main Page </h1>
      <span className="text-xl">Información general</span>

      <WidgetGrid />

    </div>
  );
}