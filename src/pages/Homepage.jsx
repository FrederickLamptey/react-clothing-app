import { Link } from 'react-router-dom';
import PageNav from '../components/PageNav';
import Items from '../components/Items';
import styles from './Homepage.module.css';
import '../index.css';

function Homepage() {
  return (
    <div>
      <header>
        <PageNav />
      </header>
      <div className="container">
        <main>
          <div className={styles.intro}>
            <h1> WofaKay</h1>
            <h2>Number One Stop Fashion Shop</h2>
            <p>
              WofaKay is a quality-only brand that promises to bring any
              trending fashion to its customers. We carry the best clothes,
              jeans, shoes, gym wears, hoodies, watches, and many more for both
              sexes (male & female). Nonetheless, our items are very affordable
              and comes in all sizes.
            </p>
          </div>

          <div>
            <ul className="items">
              <Items
                img="/shirt.jpg"
                figcaption="Men's Shirts"
                path="/Mshirts"
              />
              <Items img="/jeans.jpg" figcaption="Men's Jeans" path="/Mjeans" />
              <Items img="/shoe.jpg" figcaption="Men's Shoes" path="/Mshoes" />
              <Items
                img="/gym-wear.jpg"
                figcaption="Men's gym wears"
                path="/MgymWear"
              />
              <Items
                img="/hoodie.jpg"
                figcaption="Men's hoodie"
                path="/Mhoodies"
              />
              <Items
                img="/pat.jpg"
                figcaption="Men's watches"
                path="/Mwatches"
              />
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Homepage;
