import React from 'react';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Sidebar } from './sidebar';

const LogViewer = () => {
  const [logData, setLogData] = useState('');
  const logContainerRef = useRef(null);

  
  useEffect(() => {
    const fetchLog = async () => {
      try {
        const response = await axios.get('/api/get-log'); // Use axios.get() for GET requests
        setLogData(response.data);
      } catch (error) {
        console.error('Error fetching log:', error);
      }
    };

    const intervalId = setInterval(fetchLog, 1000); // Fetch log data every second

    // Fetch log data immediately when component mounts
    fetchLog();

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [logData]); // Scroll to bottom whenever logData changes

  const scrollToBottom = () => {
    if (logContainerRef.current) {
      const bottomElement = logContainerRef.current.lastElementChild;
      if (bottomElement)
        bottomElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    }
  };
  
  return (
    <div className="flex bg-storybook-default-heading ">
      <Sidebar />
      <div ref={logContainerRef} className="log-container ml-[15rem]  flex flex-col-reverse overflow-y-auto h-full">
      <pre className='text-sm px-20 text-neutral-100 font-firaCode'>{logData}</pre>
    </div>
    </div>
    
  );
};

export default LogViewer;
