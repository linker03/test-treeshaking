import { Panel } from 'components';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Panel />
    </div>
  );
};

export default Home;
