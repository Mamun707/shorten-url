import React, { useState } from 'react';
import './App.css';
import {shortUrlGenerator} from "./services/shortUrlGenerator";

function App() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [showShortUrl, setShowShortUrl] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const generatedShortUrl = shortUrlGenerator(originalUrl);//service that check and short the long url
      setShortUrl(generatedShortUrl);
      setShowShortUrl(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  const resetForm = () => {
    setShowShortUrl(false);
    setOriginalUrl('');
  };

  return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-center mb-6">URL Shortener</h1>

          {!showShortUrl ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter long URL"
                    value={originalUrl}
                    onChange={(e) => setOriginalUrl(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition"
                >
                  Generate Short URL
                </button>
              </form>
          ) : (
              <div className="space-y-4 text-center">
                <p className="text-lg font-semibold">Short URL:</p>
                <a
                    href={`/${shortUrl}`}
                    className="text-indigo-600"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  {window.location.origin + '/' + shortUrl}
                </a>
                <div className="flex space-x-4 justify-center mt-4">
                  <a
                      href={`/${shortUrl}`}
                      className="flex-1 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition text-center"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    Visit the Short URL
                  </a>
                  <button
                      onClick={resetForm}
                      className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                  >
                    Short URL Again
                  </button>
                </div>
              </div>
          )}
        </div>
      </div>
  );
}

export default App;
