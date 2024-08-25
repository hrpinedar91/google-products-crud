import Image from "next/image";
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';
import MaxWidthWrapper from "@/lib/MaxWidthWrapper";


export default function Home() {
  return (
    <div className="bg-slate-50">
      <MaxWidthWrapper>        
        <ProductList />
      </MaxWidthWrapper>
    </div>
  );
}
