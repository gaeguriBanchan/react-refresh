import { Outlet } from 'react-router-dom';
// import GlobalStyles from './GlobalStyles';
import Header from './components/Header';

function Root() {
  return (
    <>
      {/* <GlobalStyles /> */}
      <Header />
      <Outlet />
    </>
  );
}

export default Root;
