import React from 'react';

const Footer = () => {
  return (
    <div className="w-screen h-[50vh] bg-black py-8 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between">
      <article className="w-full sm:w-[45%] h-full flex flex-col gap-5">
        <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">TechSolutions</h2>
        <section className="text-white gap-2">
          <p>
            <a href="#services" className="text-xl hover:text-teal-400">Services</a>
          </p>
          <p>
            <a href="#news" className="text-xl hover:text-teal-400">News</a>
          </p>
          <p>
            <a href="#about" className="text-xl hover:text-teal-400">What we do</a>
          </p>
          <p>
            <a href="#contact" className="text-xl hover:text-teal-400">Get in touch</a>
          </p>
        </section>
      </article>
      <article className="w-full sm:w-[45%] h-full flex justify-center items-center">
        <div className="flex gap-6">
          <a href="https://www.facebook.com/fransiscalindy?mibextid=ZbWKwL" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .732.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.787 4.659-4.787 1.325 0 2.463.099 2.796.142v3.239h-1.919c-1.504 0-1.796.714-1.796 1.761v2.317h3.591l-.467 3.622h-3.124v9.294h6.118c.732 0 1.325-.592 1.325-1.324v-21.351c0-.732-.593-1.325-1.325-1.325z"/>
            </svg>
          </a>
          <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.83.656-2.825.775 1.014-.608 1.794-1.569 2.163-2.723-.951.563-2.005.974-3.127 1.194-.896-.955-2.173-1.555-3.591-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .386.043.762.127 1.124-4.09-.205-7.719-2.166-10.141-5.144-.424.729-.666 1.577-.666 2.483 0 1.71.87 3.216 2.19 4.1-.807-.026-1.566-.248-2.23-.616v.062c0 2.385 1.696 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.317 0-.626-.031-.928-.088.627 1.955 2.444 3.379 4.6 3.419-1.685 1.319-3.809 2.106-6.115 2.106-.398 0-.79-.023-1.175-.067 2.179 1.394 4.768 2.206 7.548 2.206 9.055 0 14-7.496 14-13.986 0-.213 0-.425-.015-.637.961-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
          </a>
          <a href="https://github.com/DevFrancesca" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white hover:text-gray-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.758-1.333-1.758-1.091-.745.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.468-2.381 1.236-3.221-.123-.304-.536-1.527.118-3.176 0 0 1.008-.322 3.303 1.23.957-.266 1.984-.399 3.006-.403 1.022.004 2.049.137 3.006.403 2.294-1.552 3.301-1.23 3.301-1.23.656 1.649.243 2.872.12 3.176.77.84 1.236 1.911 1.236 3.221 0 4.609-2.804 5.623-5.476 5.921.43.369.814 1.096.814 2.209 0 1.595-.014 2.878-.014 3.268 0 .32.217.694.825.576 4.765-1.587 8.199-6.084 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/francesca-agbanzo" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white hover:text-blue-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.75 20h-3v-11h3v11zm-1.5-12.585c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.25 12.585h-3v-5.569c0-1.33-.027-3.042-1.85-3.042-1.854 0-2.138 1.445-2.138 2.941v5.671h-3v-11h2.88v1.501h.042c.4-.758 1.379-1.558 2.836-1.558 3.032 0 3.593 1.995 3.593 4.588v6.469z"/>
            </svg>
          </a>
        </div>
      </article>
    </div>
  );
};

export default Footer;
