import React, { useEffect, useState, useRef } from 'react';

const SessionsCounter: React.FC = () => {
  const uniqueId = useRef(Date.now().toString());
  const storedSessions = localStorage.getItem('activeSessions');
  const initialSessions = storedSessions ? parseInt(storedSessions, 10) : 0;
  const [activeSessions, setActiveSessions] = useState<number>(initialSessions);

  useEffect(() => {
    const increaseCounter = (event: StorageEvent) => {
      if (
        event.key === 'activeSessions' &&
        event.newValue !== uniqueId.current &&
        event.oldValue !== uniqueId.current
      ) {
        setActiveSessions(prevSessions => prevSessions + 1);
      }
    };

    const decreaseCounter = (event: BeforeUnloadEvent) => {
      if (!event.returnValue) {
        setActiveSessions(prevSessions => prevSessions - 1);
        localStorage.removeItem('activeSessions');
      }
    };

    window.addEventListener('storage', increaseCounter);
    window.addEventListener('beforeunload', decreaseCounter);

    localStorage.setItem('activeSessions', uniqueId.current);

    return () => {
      window.removeEventListener('storage', increaseCounter);
      window.removeEventListener('beforeunload', decreaseCounter);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('activeSessions', uniqueId.current);
  }, [activeSessions]);

  return <div>Active Sessions: {activeSessions}</div>;
};

export default SessionsCounter;
