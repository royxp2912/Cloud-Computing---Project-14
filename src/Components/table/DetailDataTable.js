import { faBan, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const DetailDataTable = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const name = location.state.name;
    const id = location.state.id;
    const { data, loading, error } = useFetch(`managertable/read/table/${id}`);
    const handleMoveType = (n, i, nt) => {
        navigate('/detail-data-table', { state: { n, i, nt } });
    };
    const handleMoveData = (i, n) => {};
    return (
        <div>
            <div className="table-responsive">
                <table id="myTable" className="table table-bordered table-striped model-list">
                    <thead style={{ textAlign: 'center' }}>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name Table</th>
                            <th scope="col">Manager</th>
                            <th scope="col">Edit / Delete</th>
                        </tr>
                    </thead>
                    <tbody style={{ textAlign: 'center' }}>
                        {data.info?.map((item) => (
                            <tr key={item.id_table}>
                                <td>{item.id_table}</td>
                                <td>{item.name_table}</td>
                                <td>
                                    <button onClick={() => handleMoveType(name, item.id_table, item.name_table)}>
                                        Detail
                                    </button>
                                </td>
                                <td>
                                    <div>
                                        <ul className="list-inline m-0">
                                            <li className="list-inline-item">
                                                <button
                                                    className="btn btn-success btn-sm rounded-0"
                                                    onClick={() => handleMoveData(item.id_table, item.name_table)}
                                                >
                                                    Show Data
                                                    <FontAwesomeIcon icon={faEdit} />
                                                </button>
                                            </li>
                                            <li className="list-inline-item">
                                                <button className="btn btn-danger btn-sm rounded-1">
                                                    Delete
                                                    <FontAwesomeIcon icon={faBan} />
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="form-group row pb-5">
                <div className="col-sm-9">
                    <input
                        style={{
                            position: 'relative',
                            backgroundColor: '#008CBA',
                            marginTop: '0px',
                            marginLeft: '30px',
                        }}
                        type="button"
                        value="Add Table"
                    />
                </div>
                <div className="col-sm-3">
                    <button className="btn btn-primary btn-outline-primary">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default DetailDataTable;
