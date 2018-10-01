import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Transaction from './routes/Transaction';
import DashBord from './routes/DashBord';
import NodeShow from './routes/NodeShow';
import TabBar from './components/TabBar';
import Img from './routes/Img';
import BlockShow from './routes/BlockShow';
import InnovationData from './routes/InnovationData';

import AccountInfos from './routes/AccountInfos';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
     <div>
      <TabBar/>
      <Switch>
        <Route path="/" exact component={DashBord} />
        <Route path="/dashbord" exact component={DashBord} />
        <Route path="/node" exact component={NodeShow} />
        <Route path="/transaction" exact component={Transaction} />
        <Route path="/accountInfos" exact component={AccountInfos} />
        <Route path="/BlockShow" exact component={BlockShow} />
        <Route path="/detail" exact component={Img} />
        <Route path="/innovation" exact  component={InnovationData} />
      </Switch>
      </div>
    </Router>
  );
}

export default RouterConfig;
