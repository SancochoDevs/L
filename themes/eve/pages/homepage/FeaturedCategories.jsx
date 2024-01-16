import React from "react";

function FeaturedCategories() {
  return (
    <div className="page-width">
      <div className="mb-2 mt-3">
              </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="relative col-span-1 row-span-2 men-cat">
          <img src="/men-banner.jpg" alt="Mineral en bruto" />
          <a
            className="absolute underline top-[20px] left-[20px] bg-white px-2"
            href="/Minerales/bruto">
            MINERAL MASIVO
          </a>
        </div>
        <div className="relative col-span-1 row-span-1 women-cat">
          <img src="/women-banner.jpg" alt="Piezas Artesania" />
          <a
            className="absolute underline top-[20px] left-[20px] bg-white px-2"
            href="/artesanias">
            ARTESANIAS
          </a>
        </div>
        <div className="relative col-span-1 row-span-1 kid-cat">
          <img src="/kid-banner.jpg" alt="Joyeria de plata" />
          <a
            className="absolute underline top-[20px] left-[20px] bg-white px-2"
            href="/Joyas">
            JOYERIA DE PLATA
          </a>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCategories;

export const layout = {
  areaId: "content",
  sortOrder: 15,
};
