// import { NavLink } from 'react-router-dom';
import PageNav from '../components/PageNav';
import Items from '../components/Items';
import styles from './MenGymWears.module.css';
import '../index.css';

function MenGymWears() {
  return (
    <div>
      <header>
        <PageNav />
      </header>
      <div className='section'>
        <p>All men gym outfits</p>
          </div>
          <hr />
      <div className="container">
        <main>
          <div className={styles.gymContainer}>
            <ul className="items">
              <Items
                img="/google-image.webp"
                figcaption="WofaKay good vibes shorts"
                price="$200"
                path="#"
              />
              <Items
                img="/google-image2.webp"
                figcaption="WofaKay poso shorts"
                price="$200"
                path="#"
              />
              <Items
                img="/google-image3.webp"
                figcaption="WofaKay ghosted shorts"
                price="$250"
                path="#"
              />
              <Items
                img="/google-image4.jpg"
                figcaption="WofaKay I'm shredded tang"
                price="$200"
                path="#"
              />
              <Items
                img="/google-image5.webp"
                figcaption="WofaKay The goat tang"
                price="$350"
                path="#"
              />
              <Items
                img="/google-image6.jpg"
                figcaption="WofaKay The beast tang"
                price="$400"
                path="#"
              />
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}

export default MenGymWears;
