import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import Api from './utils/api'
import App from './App'
React.Component.prototype.Api = Api
ReactDOM.render(<App/>, document.getElementById('root'));
