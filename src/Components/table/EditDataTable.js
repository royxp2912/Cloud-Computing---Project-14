import React from 'react';

const EditDataTable = () => {
    return (
        <div>
            <div class="table-responsive">
                <table id="myTable" class="table table-bordered table-striped model-list">
                    <thead>
                        <tr>
                            <th style="positon:relative; text-align:center;" class="column-header"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th style="positon:relative; text-align:center;" class="column-header"></th>
                            <input name="" type="text" placeholder="Null" />

                            <input name="" type="text" placeholder="" />
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="form-group row pb-5">
                <div class="col-sm-3">
                    <input type="submit" value="Submit" class="btn btn-primary btn-outline-primary" />
                </div>
            </div>
        </div>
    );
};

export default EditDataTable;
