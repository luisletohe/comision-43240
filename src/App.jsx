import Navbar from "../components/layout/navbar/Navbar";
import { ProductsList } from "../components/pages/ItemListContainer/productslist";

const app = () => {
  let nombre = "ALE";
  let edad = 22;

  return (
    <div>
      <Navbar />
      <ProductsList nombre={nombre} edad={edad} />
    </div>
  );
};

export default app;
