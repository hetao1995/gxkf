import React from 'react';
import styles from './DataMap.less';
import { NodeDatas } from "../components/component/dataBox/Node";
import { Select } from 'antd';
import TreeMap from '../components/component/treeTable/treeTable';

import ContainerBox from '../components/component/containerBox/container';

const { Option, OptGroup } = Select;
function handleChange(value) {
  console.log(`selected ${value}`);
}
export default class BlockShow extends React.Component {
  constructor(props) {
      super(props)
  }
  render(){
    return(
        <div className={`container boxShadow ${styles.DataMap}`}>
            <div className={styles.top}>
                <ul>
                    <li>
                      <span>
                        初始点:
                        <Select
                           className={styles.customSelect}
                           defaultValue="lucy"
                           style={{ width: 200 }}
                           onChange={handleChange}
                         >
                           <OptGroup label="Manager">
                             <Option value="jack">Jack</Option>
                             <Option value="lucy">Lucy</Option>
                           </OptGroup>
                           <OptGroup label="Engineer">
                             <Option value="Yiminghe">yiminghe</Option>
                           </OptGroup>
                         </Select>
                      </span>
                    </li>

                    <li>
                      <span>
                        初始点:
                        <Select
                           defaultValue="lucy"
                           style={{ width: 200 }}
                           onChange={handleChange}
                         >
                           <OptGroup label="Manager">
                             <Option value="jack">Jack</Option>
                             <Option value="lucy">Lucy</Option>
                           </OptGroup>
                           <OptGroup label="Engineer">
                             <Option value="Yiminghe">yiminghe</Option>
                           </OptGroup>
                         </Select>
                      </span>
                    </li>

                    <li>
                      <span>
                        初始点:
                        <Select
                           defaultValue="lucy"
                           style={{ width: 200 }}
                           onChange={handleChange}
                         >
                           <OptGroup label="Manager">
                             <Option value="jack">Jack</Option>
                             <Option value="lucy">Lucy</Option>
                           </OptGroup>
                           <OptGroup label="Engineer">
                             <Option value="Yiminghe">yiminghe</Option>
                           </OptGroup>
                         </Select>
                      </span>
                    </li>

                    <li>
                      <span>
                        初始点:
                        <Select
                           defaultValue="lucy"
                           style={{ width: 200 }}
                           onChange={handleChange}
                         >
                           <OptGroup label="Manager">
                             <Option value="jack">Jack</Option>
                             <Option value="lucy">Lucy</Option>
                           </OptGroup>
                           <OptGroup label="Engineer">
                             <Option value="Yiminghe">yiminghe</Option>
                           </OptGroup>
                         </Select>
                      </span>
                    </li>
                </ul>
            </div>

            <div className={styles.trees}>
                <TreeMap/>
            </div>
        </div>
    )
  }
}
