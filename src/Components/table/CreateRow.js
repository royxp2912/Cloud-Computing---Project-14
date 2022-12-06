import React, { useState } from 'react';

const CreateRow = ({ setInfo }) => {
    const deleteRow = () => {};
    const [type, setType] = useState();
    const handleChange = (e) => {
        // setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value, type }));
    };
    const handleSelect = (e) => {
        const value = Array.from(e.target.selectedOptions, (option) => option.value);
        setType(value);
    };
    return (
        <tr onChange={handleChange()}>
            <td>
                <input
                    type="text"
                    className="form-control input-sm"
                    id="nameColumnTable1"
                    name="nameColumnTable1"
                    placeholder="name column"
                    onChange={handleChange}
                />
            </td>

            <td>
                <div style={{ position: 'relative', textAlign: 'center' }} className="form-group">
                    <select name="" id="cars" onChange={handleSelect}>
                        <option>INT</option>
                        <option>FLOAT</option>
                        <option>DOUBLE</option>
                        <option>CHAR()</option>
                        <option>VARCHAR()</option>
                    </select>
                </div>
            </td>

            <td style={{ position: 'relative', textAlign: 'center' }}>
                <input name="PK1" className="form-check-input" type="checkbox" value="PK" />
            </td>

            <td style={{ position: 'relative', textAlign: 'center' }}>
                <input name="NN1" className="form-check-input" type="checkbox" value="NN" />
            </td>

            <td style={{ position: 'relative', textAlign: 'center' }}>
                <input name="UQ1" className="form-check-input" type="checkbox" value="UQ" />
            </td>

            <td style={{ position: 'relative', textAlign: 'center' }}>
                <input name="B1" className="form-check-input" type="checkbox" value="PK" />
            </td>

            <td style={{ position: 'relative', textAlign: 'center' }}>
                <input name="UN1" className="form-check-input" type="checkbox" value="UN" />
            </td>

            <td style={{ position: 'relative', textAlign: 'center' }}>
                <input name="ZF1" className="form-check-input" type="checkbox" value="ZF" />
            </td>

            <td style={{ position: 'relative', textAlign: 'center' }}>
                <input name="AI1" className="form-check-input" type="checkbox" value="AI" />
            </td>

            <td style={{ position: 'relative', textAlign: 'center' }}>
                <input name="G1" className="form-check-input" type="checkbox" value="PK" />
            </td>

            <td style={{ position: 'relative', textAlign: 'center' }}>
                <button className="btn btn-danger" onClick={deleteRow}>
                    <span className="align-middle">delete</span>
                </button>
            </td>
        </tr>
    );
};

export default CreateRow;
