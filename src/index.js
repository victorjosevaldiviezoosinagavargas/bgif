import React from 'react';
import './index.css';
import ReactDOMClient from 'react-dom/client';

import GifExpertApp from './GifExpertApp'



const divRoot = document.querySelector('#root');

ReactDOMClient.createRoot( divRoot).render(<GifExpertApp />);


