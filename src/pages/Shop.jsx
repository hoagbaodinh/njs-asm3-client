import BreadCrumb from '../components/Layouts/BreadCrumb';
import Sidebar from '../components/ShopPage/Sidebar';
import ProductList from '../components/ShopPage/ProductList';

const ShopPage = () => {
  return (
    <>
      <BreadCrumb title="shop" URL="shop" />
      <main>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Sidebar />
            </div>

            <div className="col-9">
              <ProductList />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ShopPage;
