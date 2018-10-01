import dva from 'dva';
import createLoading from 'dva-loading';
import './index.css';

//import 'antd/dist/antd.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});
app.use(createLoading());
// 3. Model

const models=[require('./models/App').default,require('./models/totalMoney').default,require('./models/bct').default];
models.forEach(m=>app.model(m))
// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
