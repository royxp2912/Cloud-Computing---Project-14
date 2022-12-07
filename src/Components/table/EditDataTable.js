import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const EditDataTable = ({ type }) => {
    const location = useLocation();
    const id = location.state.id;
    const firstColumn = location.state.it;
    const [info, setInfo] = useState({});
    const [list, setList] = useState([]);
    const { data, loading, error } = useFetch(`managercolumn/read/${id}`);
    useEffect(() => {
        if (type === 'edit') {
            const firstData = data.info?.splice(1);
            setList(firstData);
        }
    }, [data.info]);
    const handleChange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };
    const handleEdit = async (e) => {
        e.preventDefault();

        const update = info;
        try {
            await axios.put(`managertable/update/data/${id}`, { firstColumn, update });
            alert('Cập nhật Data thành công');
        } catch (err) {
            alert('Cập nhật Data không thành công');
        }
    };

    const handleCreate = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`managertable/create/data/${id}`, info);
            alert('Tạo Data thành công');
        } catch (err) {
            alert('Tạo Data không thành công');
        }
    };
    console.log(info);
    // console.log(info);
    return (
        <>
            {type === 'edit' ? (
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body text-center">
                                    <h4 style={{ fontWeight: 'bold', color: 'black' }}>Edit Table</h4>
                                </div>
                                <div style={{ padding: '10px' }}>
                                    {list?.map((item) => (
                                        <div key={item.id_column}>
                                            <span>{item.name_column}</span>
                                            <input
                                                type="text"
                                                className="form-control"
                                                onChange={handleChange}
                                                id={item.name_column}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        className="btn btn-primary btn-outline-primary"
                        style={{ marginTop: '12px', padding: '4px 16px' }}
                        onClick={handleEdit}
                    >
                        Save
                    </button>
                </div>
            ) : (
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body text-center">
                                    <h4 style={{ fontWeight: 'bold', color: 'black' }}>Create Data Table</h4>
                                </div>
                                <div style={{ padding: '10px' }}>
                                    {data.info?.map((item) => (
                                        <div key={item.id_column}>
                                            <span>{item.name_column}</span>
                                            <input
                                                type="text"
                                                className="form-control"
                                                onChange={handleChange}
                                                id={item.name_column}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        className="btn btn-primary btn-outline-primary"
                        style={{ marginTop: '12px', padding: '4px 16px' }}
                        onClick={handleCreate}
                    >
                        Save
                    </button>
                </div>
            )}
        </>
    );
};

export default EditDataTable;
