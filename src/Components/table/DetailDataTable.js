import { faBan, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const DetailDataTable = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const id = location.state.i;
    const [list, setList] = useState([]);
    const { data, loading, error } = useFetch(`managertable/read/data/${id}`);
    const handleMoveEdit = (it) => {
        navigate('/edit-data-table', { state: { id, it } });
    };
    const handleMoveCreate = () => {
        navigate('/create-data-table', { state: { id } });
    };
    const name_column = data.infoColumn?.map((item) => {
        return item.name_column;
    });
    useEffect(() => {
        setList(data.infoData);
    }, [data.infoData]);

    const handleDel = async (itd) => {
        try {
            await axios.delete(`managertable/delete/data/${id}/${itd}`);
            setList(list.filter((item) => item.id !== itd));
            alert('Xóa Data thành công');
        } catch (err) {
            alert(err);
        }
    };
    // list?.map((x, i) => console.log(x[i]));
    return (
        <div>
            <div className="table-responsive">
                <table id="myTable" className="table table-bordered table-striped model-list">
                    <thead style={{ textAlign: 'center' }}>
                        <tr>
                            {data.infoColumn?.map((item) => (
                                <>
                                    <th scope="col" key={item.id_column}>
                                        {item.name_column}
                                    </th>
                                </>
                            ))}
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody style={{ textAlign: 'center' }}>
                        {list?.map((item) => (
                            <tr key={item.id}>
                                {name_column?.map((name_columb, i) => (
                                    <td key={i}>{item[`${name_columb}`]}</td>
                                ))}
                                <td>
                                    <div>
                                        <ul className="list-inline m-0">
                                            <li className="list-inline-item">
                                                <button
                                                    className="btn btn-success btn-sm rounded-0"
                                                    onClick={() => handleMoveEdit(item.id)}
                                                >
                                                    Edit
                                                    <FontAwesomeIcon icon={faEdit} />
                                                </button>
                                            </li>
                                            <li className="list-inline-item">
                                                <button
                                                    className="btn btn-danger btn-sm rounded-1"
                                                    onClick={() => handleDel(item.id)}
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
                        value="Add Row"
                        onClick={handleMoveCreate}
                    />
                </div>
            </div>
        </div>
    );
};

export default DetailDataTable;
