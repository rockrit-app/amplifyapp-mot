import logo from './logo.svg';
import './App.css';

import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import {AmplifyProvider} from "@aws-amplify/ui-react";
import awsconfig from './aws-exports';
import { CardG } from './ui-components';
Amplify.configure(awsconfig);

function App() {
  return (
<AmplifyProvider>
    <div className="App">
      <header className="App-header">
        <p>
          Motorsport on TV
        </p>
      </header>
    </div>
<CardG />
</AmplifyProvider>
  );
}
export default App;
