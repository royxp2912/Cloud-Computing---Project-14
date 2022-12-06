import { faEdit, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const DetailDatabase = () => {
    return (
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <p></p>
                    <div class="table-responsive">
                        <table class="table">
                            <thead class="thead-light">
                                <tr>
                                    <th scope="col">Name Table</th>
                                    <th scope="col">Manager</th>
                                    <th scope="col">Add / Edit / Delete</th>
                                </tr>
                            </thead>
                            <tbody class="customtable">
                                <tr>
                                    <td></td>
                                    <td>Details</td>
                                    <td>
                                        <ul class="list-inline m-0">
                                            <li class="list-inline-item">
                                                <button
                                                    className="btn btn-danger btn-sm rounded-1"
                                                    style={{ backgroundColor: '#6c5ce7' }}
                                                >
                                                    Add
                                                </button>
                                                <i class="far fa-plus-square"></i>
                                            </li>
                                            <li class="list-inline-item">
                                                <button className="btn btn-success btn-sm rounded-0">Edit</button>
                                                <FontAwesomeIcon icon={faEdit} />
                                            </li>
                                            <li class="list-inline-item">
                                                <button
                                                    className="btn btn-danger btn-sm rounded-1"
                                                    style={{ backgroundColor: '#6c5ce7' }}
                                                >
                                                    Delete
                                                </button>
                                                <FontAwesomeIcon icon={faPlusSquare} />
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailDatabase;
