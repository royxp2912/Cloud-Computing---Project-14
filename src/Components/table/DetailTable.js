import { faBan, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const DetailTable = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [list, setList] = useState([]);
    const name = location.state.name;
    const id = location.state.id;
    const { data, loading, error } = useFetch(`managertable/read/table/${id}`);

    useEffect(() => {
        setList(data.info);
    }, [data.info]);
    const handleMoveType = (n, i, nt) => {
        navigate('/detail-type-table', { state: { n, i, nt } });
    };
    const handleMoveData = (i, n) => {
        navigate('/detail-data-table', { state: { i, n } });
    };

    const handleDel = async (i) => {
        try {
            await axios.delete(`managertable/delete/table/${i}`);
            setList(list.filter((item) => item.id !== i));
            alert('Xóa Table thành công');
        } catch (err) {
            alert('Xóa Table không thành công');
        }
    };
    return (
        <div>
            <div className="table-responsive">
                <table id="myTable" className="table table-bordered table-striped model-list">
                    <thead style={{ textAlign: 'center' }}>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name Table</th>
                            <th scope="col">Manager</th>
                            <th scope="col">Show Data / Delete</th>
                        </tr>
                    </thead>
                    <tbody style={{ textAlign: 'center' }}>
                        {list?.map((item) => (
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
                                                <button
                                                    className="btn btn-danger btn-sm rounded-1"
                                                    onClick={() => handleDel(item.id_table)}
                                                >
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
        </div>
    );
};

export default DetailTable;
