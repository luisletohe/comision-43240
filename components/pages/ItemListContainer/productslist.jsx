import Counter from "../../common/counter/Counter";

export const ProductsList = ({ nombre, edad }) => {
  return (
    <>
      <h1>aca van los productos</h1>;<h2>hola {nombre}</h2>
      <h3>mi edad es {edad}</h3>
      <Counter />
    </>
  );
};
