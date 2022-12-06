import React from 'react';

const EditColumnTable = () => {
    return (
        <div>
            <div class="table-responsive">
                <table id="tableColumn" class="table table-bordered table-striped model-list">
                    <thead>
                        <tr>
                            <th style="positon:relative; text-align:center;" class="column-header">
                                Name Table
                            </th>
                            <th style="positon:relative; text-align:center;" class="column-header">
                                Types
                            </th>
                            <th style="positon:relative; text-align:center;" class="column-header">
                                Null
                            </th>
                            <th style="positon:relative; text-align:center;" class="column-header">
                                Primary Key
                            </th>
                            <th style="positon:relative; text-align:center;" class="column-header">
                                Edit / Delete
                            </th>
                            <th style="positon:relative; text-align:center;" class="column-header"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <div style="position:relative; text-align:center;">
                                    <ul class="list-inline m-0">
                                        <li class="list-inline-item">
                                            <i class="fa fa-edit"></i>
                                        </li>
                                        <li class="list-inline-item">
                                            <i style="width: auto; height: auto;" class="fas fa-ban"></i>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="form-group row pb-5">
                <div class="col-sm-9">
                    <input
                        style="position: relative; margin-top:0px; margin-left: 30px; background-color: #008CBA;"
                        type="button"
                        value="Add Column Table"
                        onclick="addRows()"
                    />
                </div>
                <div class="col-sm-3">
                    <button class="btn btn-primary btn-outline-primary" onclick="submit_entry();">
                        {' '}
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditColumnTable;
