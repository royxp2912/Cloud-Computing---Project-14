import { faBan, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const DetailTable = () => {
    return (
        <div>
            <div className="table-responsive">
                <table id="myTable" className="table table-bordered table-striped model-list">
                    <thead>
                        <tr>
                            <th style={{ positon: 'relative', textAlign: 'center' }} className="column-header"></th>

                            <th style={{ positon: 'relative', textAlign: 'center' }} className="column-header">
                                Edit / Delete
                            </th>
                            <th style={{ positon: 'relative', textAlign: 'center' }} className="column-header"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>

                            <td>
                                <div style={{ positon: 'relative', textAlign: 'center' }}>
                                    <ul className="list-inline m-0">
                                        <li className="list-inline-item">
                                            <button className="btn btn-success btn-sm rounded-0">
                                                Edit
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
                        value="Add Row Table"
                    />
                </div>
                <div className="col-sm-3">
                    <button className="btn btn-primary btn-outline-primary">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default DetailTable;
