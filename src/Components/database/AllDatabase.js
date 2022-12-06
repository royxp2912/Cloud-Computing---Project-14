import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import useFetch from '../../hooks/useFetch';
import './allDatabase.scss';

const AllDatabase = () => {
    const { user } = useContext(AuthContext);
    const { data, loading, error } = useFetch('managerdb/user/u1');
    console.log(data.info);
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body text-center">
                            <h4>Name Database</h4>
                        </div>
                        <div className="table-responsive">
                            <p>Table:</p>
                            <table className="table">
                                <thead className="thead-light">
                                    <tr>
                                        {data.info?.map((item) => (
                                            <th scope="col" key={item.id}>
                                                {item.name}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllDatabase;
