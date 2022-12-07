import { faBan, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import useFetch from '../../hooks/useFetch';

const MyDatabase = () => {
    const { user } = useContext(AuthContext);
    const [list, setList] = useState([]);
    const { data, loading, error } = useFetch(`managerdb/user/${user.username}`);
    const navigate = useNavigate();

    useEffect(() => {
        setList(data.info);
    }, [data.info]);

    const handleDel = async (id) => {
        try {
            await axios.delete(`managerdb/delete/${id}`);
            setList(list.filter((item) => item.id !== id));
            alert('Xóa thành công');
        } catch (err) {
            alert('Không xóa được');
        }
    };
    const handleClick = (id) => {};

    const handleMove = (name, id) => {
        navigate('/detail-table', { state: { name, id } });
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body text-center">
                            <h5 className="card-title m-b-0">My Database</h5>
                        </div>
                        <div className="table-responsive">
                            <table className="table">
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name Database</th>
                                        <th scope="col">Manager</th>
                                        <th scope="col">Delete</th>
                                    </tr>
                                </thead>
                                <tbody className="customtable">
                                    {list?.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>
                                                <button onClick={() => handleMove(item.name, item.id)}>Details</button>
                                            </td>
                                            <td>
                                                <ul className="list-inline m-0">
                                                    <li className="list-inline-item">
                                                        <button
                                                            className="btn btn-sm btn-danger mt-0"
                                                            onClick={() => handleDel(item.id)}
                                                        >
                                                            <FontAwesomeIcon icon={faBan} />
                                                        </button>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyDatabase;
