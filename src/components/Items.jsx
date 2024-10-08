import { Link } from 'react-router-dom';

function Items({ img, figcaption, path }) {
  return (
    <li className="">
      <figure>
        <Link to={path}>
          <img src={img} />
        </Link>
        <figcaption>{figcaption}</figcaption>
      </figure>
    </li>
  );
}

export default Items;
