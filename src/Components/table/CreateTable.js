import React, { useContext, useState } from 'react';
import CreateRow from './CreateRow';
import useFetch from '../../hooks/useFetch';
import { AuthContext } from '../../context/AuthContext';

const CreateTable = () => {
    const [row, setRow] = useState([]);
    const [dataId, setDataId] = useState(undefined);
    const [name, setName] = useState();
    const [infos, setInfo] = useState({});
    const { user } = useContext(AuthContext);
    const { data, loading, error } = useFetch(`managerdb/user/${user.username}`);
    const addRow = () => {
        let i = Math.random();
        setRow((prev) => [...prev, <CreateRow key={i} setInfo={setInfo} />]);
    };
    const nameTable = (e) => {
        setName(e.target.value);
    };
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title mb-0">Selects Database</h5>
                </div>
                <div className="card-body">
                    <select
                        name="choose_database"
                        className="form-select mb-3"
                        onClick={(e) => setDataId(e.target.value)} // đổi lại thành onChange
                    >
                        {loading
                            ? 'loading '
                            : data &&
                              data.info?.map((item) => (
                                  <option key={item.id} value={item.id}>
                                      {item.name}
                                  </option>
                              ))}
                    </select>
                </div>
            </div>

            <div className="card">
                <div className="card-header">
                    <h5 className="card-title mb-0">Name Table</h5>
                </div>
                <div className="card-body">
                    <div className="form-group row pb-5">
                        <div className="col-sm-10">
                            <input
                                name="nameTable"
                                type="text"
                                className="form-control"
                                placeholder="name table"
                                onChange={nameTable}
                            />
                        </div>
                        <div className="col-sm-2">
                            <button className="btn btn-success">Create</button>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <table id="myTable" className="table table-bordered">
                            <thead>
                                <tr>
                                    <th style={{ position: 'relative', textAlign: 'center' }}>Name Column</th>
                                    <th style={{ position: 'relative', textAlign: 'center' }}>Types</th>
                                    <th style={{ position: 'relative', textAlign: 'center' }}>PK</th>
                                    <th style={{ position: 'relative', textAlign: 'center' }}>NN</th>
                                    <th style={{ position: 'relative', textAlign: 'center' }}>UQ</th>
                                    <th style={{ position: 'relative', textAlign: 'center' }}>UN</th>
                                    <th style={{ position: 'relative', textAlign: 'center' }}>ZF</th>
                                    <th style={{ position: 'relative', textAlign: 'center' }}>AI</th>
                                    <th style={{ position: 'relative', textAlign: 'center' }}>PK</th>
                                    <th style={{ position: 'relative', textAlign: 'center' }}></th>
                                </tr>
                            </thead>
                            <tbody>{row}</tbody>
                        </table>
                    </div>
                </div>
            </div>

            <input
                style={{ position: 'relative', backgroundColor: '#008CBA', marginTop: '0', marginLeft: '30' + 'px' }}
                type="button"
                value="Add Column Table"
                onClick={addRow}
            />
        </div>
    );
};

export default CreateTable;
