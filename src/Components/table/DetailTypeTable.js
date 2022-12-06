import React from 'react';
import { useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const DetailTypeTable = () => {
    const location = useLocation();
    const nameD = location.state.n;
    const nameT = location.state.nt;
    const id = location.state.i;
    const { data, loading, error } = useFetch(`managercolumn/read/${id}`);
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body text-center">
                            <h4 style={{ fontWeight: 'bold', color: 'black' }}>{nameD}</h4>
                        </div>
                        <div className="table-responsive">
                            <p style={{ position: 'relative', marginLeft: '30px', color: '#2e86de', fontSize: '20px' }}>
                                Table: {nameT}
                            </p>
                            <table
                                className="table"
                                style={{
                                    textAlign: 'center',
                                }}
                            >
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Tên Cột</th>
                                        <th scope="col">Data Type</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.info?.map((item) => (
                                        <tr key={item.id_column}>
                                            <th scope="col">{item.name_column}</th>
                                            <th scope="col" style={{ color: '#57606f' }}>
                                                {item.type}
                                            </th>
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

export default DetailTypeTable;
