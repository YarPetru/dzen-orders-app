import React from 'react';
import Container from './Containter';
import CurrentTime from './CurrentTime';
import { Link } from 'react-router-dom';
// import io from 'socket.io-client';

// const socket = io('https://dzen-orders-back.onrender.com/api');

const TopMenu: React.FC = () => {
  // const [activeSessions, setActiveSessions] = useState<number>(0);

  // useEffect(() => {
  //   socket.on('activeSessionCount', (count: number) => {
  //     setActiveSessions(count);
  //   });

  //   return () => {
  //     socket.off('activeSessionCount');
  //   };
  // }, []);

  return (
    <header className="relative bg-white text-md shadow-xl py-8 z-20">
      <Container className="flex justify-between items-center">
        <Link to="/">
          <h2 className="text-accent-main font-semibold">Inventory</h2>
        </Link>
        <CurrentTime />
        {/* <div>Active Sessions: {activeSessions}</div> */}
      </Container>
    </header>
  );
};

export default TopMenu;
