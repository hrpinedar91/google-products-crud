import MaxWidthWrapper from '@/lib/MaxWidthWrapper';
import ProductList from '../../components/ProductList'; // Importamos el componente que creamos

const ComestiblesPage = () => {
  return (
    <div className='bg-slate-50'>
      {/* <h1>Comestibles</h1> */}
      <MaxWidthWrapper>
        <ProductList category="COMESTIBLES" /> {/* Pasamos la categoría */}
      </MaxWidthWrapper>
    </div>
  );
};

export default ComestiblesPage;
