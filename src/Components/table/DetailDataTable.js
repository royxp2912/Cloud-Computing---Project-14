import React from 'react';

const DetailDataTable = () => {
    return (
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body text-center">
                            <h4 style="font-weight: bold; color: black;"></h4>
                        </div>
                        <div class="table-responsive">
                            <p style="position: relative; margin-left: 30px; color: #2e86de; font-size: 15px;">
                                Table:{' '}
                            </p>
                            <table class="table">
                                <thead class="thead-light">
                                    <tr>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="col" style="color: #57606f;"></th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailDataTable;
