import React from 'react';

const RenameColumnTable = () => {
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
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="form-group row pb-5">
                <div class="col-sm-6">
                    <input name="newColumnName" class="form-control" placeholder="new column name" type="text" />
                </div>
                <div class="col-sm-6">
                    <input type="submit" value="Submit" class="btn btn-primary btn-outline-primary" />
                </div>
            </div>
        </div>
    );
};

export default RenameColumnTable;
