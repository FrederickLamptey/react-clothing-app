import { Link } from 'react-router-dom';
import '../index.css';

function Items({ img, figcaption, path, price='' }) {
  return (
    <li className="figureList">
      <figure className=''>
        <Link to={path}>
          <img src={img} />
        </Link>
        <figcaption>
          <span>{figcaption}</span> <br /> <span>{price}</span>
        </figcaption>
      </figure>
    </li>
  );
}

export default Items;
