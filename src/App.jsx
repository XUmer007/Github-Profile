import { Fragment } from 'react';

// Css
import './App.css';

// Components
import Header from './component/Header';
import Tabs from './component/Tabs';
import UserInfo from './component/UserInfo';
import Overview from './component/Overview';
import Footer from './component/Footer';

// Model
import userData from './model/User';
import { pinnedRepositories, readMeData } from './model/Repository';

export default function App() {
  // Array of tabs for Tab component
  const tabs = ['Overview', 'Repositories', 'Projects', 'Packages', 'Stars'];

  return (
    <Fragment>
      <Header />
      <Tabs className='desktop-only' tabs={tabs} activeTabIndex={0} />
      <main className='main'>
        <UserInfo user={userData} />
        <div className='mobile-only'>
          <div className='divider'></div>
          <Tabs tabs={tabs} activeTabIndex={0} />
        </div>
        <Overview readMeRepo={readMeData} pinnedRepos={pinnedRepositories} />
      </main>

      <Footer />
    </Fragment>
  );
}
