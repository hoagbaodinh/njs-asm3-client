import { useNavigate } from 'react-router-dom';

const RelatedPdsList = ({ products }) => {
  // Lay tat ca product co category trung voi product dang xem

  // Chuyen huong den san pham duoc click
  const navigate = useNavigate();
  const handleClick = (pd) => {
    navigate(`/detail/${pd._id}`);
    window.scrollTo(0, 0);
  };
  return (
    <>
      {products.map((pd) => (
        <div className="col-3" key={pd._id}>
          <div className="pdItemContent">
            <img
              src={`${
                pd.img1.includes('http')
                  ? pd.img1
                  : `http://localhost:5050/images/${pd.img1}`
              }`}
              alt="pd item"
              className="pdItemImg"
              onClick={() => handleClick(pd)}
            />
            <p className="pdItemName" onClick={() => handleClick(pd)}>
              {pd.name}
            </p>
            <p className="pdItemPrice">{pd.price}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default RelatedPdsList;
