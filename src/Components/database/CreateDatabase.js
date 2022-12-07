import axios from 'axios';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import useFetch from '../../hooks/useFetch';

const CreateDatabase = () => {
    const { user } = useContext(AuthContext);
    const [info, setInfo] = useState();

    const username = user.username;
    const handleChange = (e) => {
        setInfo(e.target.value);
    };
    const handleCreate = async (e) => {
        const name = info;
        try {
            e.preventDefault();
            await axios.post('managerdb/create', { name, username });
            alert('Tạo Database thành công');
        } catch (err) {
            alert('Tạo Database không thành công');
        }
    };
    return (
        <div className="card">
            <div className="card-header">
                <h5 className="card-title mb-0">Name Database</h5>
            </div>
            <div className="card-body">
                <div className="form-group row pb-5">
                    <div className="col-sm-10">
                        <input
                            name="nameDatabase"
                            type="text"
                            className="form-control"
                            placeholder="name database"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-sm-2">
                        <button className="btn btn-success" onClick={handleCreate}>
                            Create
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateDatabase;
