import React, { useContext } from 'react';

const CreateDatabase = () => {
    const { user } = useContext('');
    const [data, loading, error] = useFetch('');

    return (
        <div class="card">
            <div class="card-header">
                <h5 class="card-title mb-0">Name Database</h5>
            </div>
            <div class="card-body">
                <div class="form-group row pb-5">
                    <div class="col-sm-10">
                        <input name="nameDatabase" type="text" class="form-control" placeholder="name database" />
                    </div>
                    <div class="col-sm-2">
                        <button class="btn btn-success">Create</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateDatabase;
