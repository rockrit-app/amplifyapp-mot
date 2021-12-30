import logo from './logo.svg';
import './App.css';

import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import {AmplifyProvider} from "@aws-amplify/ui-react";
import awsconfig from './aws-exports';
import { Home1 } from './ui-components';
import { DataStore } from '@aws-amplify/datastore';
import { Broadcaster } from './models';
import { Championship } from './models';
import { Event } from './models';
import { Session } from './models';
import ReactGA from 'react-ga';

Amplify.configure(awsconfig);
ReactGA.initialize('G-1LMV46EE20', [options]);
ReactGA.pageview(window.location.pathname);


function App() {
  return (
<AmplifyProvider>
<Home1 />
</AmplifyProvider>
  );
}
export default App;
