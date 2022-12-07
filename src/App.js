import React, { useContext } from 'react';

import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from './context/AuthContext';
import Login from './Pages/Login/Login';

import MyDatabase from './Components/database/MyDatabase';
import CreateDatabase from './Components/database/CreateDatabase';
import CreateTable from './Components/table/CreateTable';
import DetailTable from './Components/table/DetailTable';
import DetailTypeTable from './Components/table/DetailTypeTable';
import DetailDataTable from './Components/table/DetailDataTable';
import EditDataTable from './Components/table/EditDataTable';

const App = () => {
    const { dispatch } = useContext(AuthContext);
    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: 'LOGIN_START' });
        try {
            dispatch({ type: 'LOGOUT' });
            localStorage.clear();
        } catch (err) {
            dispatch({ type: 'LOGIN_FAILURE', payload: err.response.data });
        }
    };
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path="/" element={<Login />} />
                </Routes>
                <header className="App-header">
                    <Navbar bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand>
                                <Link to={'/database-list'} className="nav-link">
                                    Quản lí Database
                                </Link>
                            </Navbar.Brand>

                            <Nav className="justify-content-end">
                                <Nav>
                                    <Link to={'/create-database'} className="nav-link">
                                        Tạo Database
                                    </Link>
                                </Nav>

                                <Nav>
                                    <Link to={'/database-list'} className="nav-link">
                                        Danh sách Database
                                    </Link>
                                </Nav>

                                <Nav onClick={handleClick}>
                                    <Link to={'/'} className="nav-link">
                                        Logout
                                    </Link>
                                </Nav>
                            </Nav>
                        </Container>
                    </Navbar>
                </header>

                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="wrapper">
                                <Routes>
                                    <Route path="/database-list" element={<MyDatabase />} />
                                    <Route path="/create-database" element={<CreateDatabase />} />
                                    {/* <Route path="/edit-student/:id" component={EditStudent} />
                                    <Route path="/student-list" component={StudentList} /> */}
                                    <Route path="/create-table" element={<CreateTable />} />
                                    <Route path="/detail-table" element={<DetailTable />} />
                                    <Route path="/detail-type-table" element={<DetailTypeTable />} />
                                    <Route path="/detail-data-table" element={<DetailDataTable />} />
                                    <Route path="/edit-data-table" element={<EditDataTable type="edit" />} />
                                    <Route path="/create-data-table" element={<EditDataTable type="create" />} />
                                </Routes>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Router>
    );
};

export default App;
