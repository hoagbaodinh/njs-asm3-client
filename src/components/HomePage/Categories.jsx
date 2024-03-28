import { useNavigate } from 'react-router-dom';
import cate1 from '../../assets/product_1.png';
import cate2 from '../../assets/product_2.png';
import cate3 from '../../assets/product_3.png';
import cate4 from '../../assets/product_4.png';
import cate5 from '../../assets/product_5.png';
import { productListActions } from '../../store';
import { useDispatch } from 'react-redux';

const Categories = () => {
  const navigate = useNavigate();
  // Dispatch
  const dispatch = useDispatch();

  // Click
  const handleClick = (cate) => {
    // Thay doi state voi muc vua click
    dispatch(productListActions.changeCate(cate));
    navigate('/shop');
    window.scrollTo(0, 300);
  };

  return (
    <section className="categories">
      <div className="container">
        <div className="section-title ">
          <p>carefully created collections</p>
          <h1>browse our categories</h1>
        </div>

        <div className="cateContent">
          <div className="row">
            <div className="col-6 cateItem">
              <img
                src={cate1}
                alt="iphone"
                onClick={() => handleClick('iphone')}
              />
            </div>
            <div className="col-6 cateItem">
              <img src={cate2} alt="mac" onClick={() => handleClick('mac')} />
            </div>
            <div className="col-4 cateItem">
              <img src={cate3} alt="ipad" onClick={() => handleClick('ipad')} />
            </div>
            <div className="col-4 cateItem">
              <img
                src={cate4}
                alt="watch"
                onClick={() => handleClick('watch')}
              />
            </div>
            <div className="col-4 cateItem">
              <img
                src={cate5}
                alt="airpods"
                onClick={() => handleClick('airpod')}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
