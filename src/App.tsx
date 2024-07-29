import { FC } from 'react';
import NavigationBar from './components/ui/NavigationBar';
import { observer } from 'mobx-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, RouteProps, Routes as Switch } from 'react-router-dom'
import Home from './pages/Home';
import Track from './pages/Track';

const App: FC = () => {
  return (
    <>
      <Switch>
        <Route path='/' element={<Home />}>
        </Route>
        <Route path='/track' element={<Track />}>
        </Route>
      </Switch>
    </>
  )
}

export default observer(App)