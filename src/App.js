import logo from './logo.svg';
import './App.css';

import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import {AmplifyProvider} from "@aws-amplify/ui-react";
import awsconfig from './aws-exports';
import { HeroLayout1 } from './ui-components';
import { HeroLayout2 } from './ui-components';
import ReactGA from 'react-ga';

Amplify.configure(awsconfig);
ReactGA.initialize('G-1LMV46EE20', [options]);
ReactGA.pageview(window.location.pathname);


function App() {
  return (
<AmplifyProvider>
<HeroLayout2 />
</AmplifyProvider>
  );
}
export default App;
