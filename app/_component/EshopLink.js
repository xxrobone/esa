'use client'
import React, { useEffect, useState } from 'react';

const EshopLink = () => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch('https://minaaktiviteter.se/api/content/json/?contenttype=shop&org=esportsacademy');
        const data = await response.json();
        setContent(data);
        setLoading(false);

        // Insert CSS files
        data.cssFiles.forEach(file => {
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = file.url;
          document.head.appendChild(link);
        });

        // Insert JavaScript files
        data.javascriptFilesAfter.forEach(file => {
          const script = document.createElement('script');
          script.src = file.url;
          script.async = true;
          document.body.appendChild(script);
        });

      } catch (error) {
        console.error('Error fetching the content:', error);
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  return (
    <div>
      <h1>Shop</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: content.htmlBlock }} />
      )}
    </div>
  );
};

export default EshopLink;
