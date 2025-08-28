import { newArrivalProducts } from "../../constants/index";
import DynamicproductsCard from "../common/DynamicProductCard";

const NewArival = () => {
  return (
    <div className="text-center bg-white z-10 relative pt-10 pb-32">
      <h2 className="text-5xl mb-20 font-serif italic mt-36">New Arrivals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-8 sm:px-6 lg:px-10">
        {newArrivalProducts.map((product) => (
          <DynamicproductsCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default NewArival;
