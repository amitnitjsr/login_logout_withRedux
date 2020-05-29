import React from 'react'
import ReactTable from 'react-table';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import { Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import './Carts.css';
import Header from '../Header/Header';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: {},
            selectedRow: null,
            hideButton: false
        }
    }


    toggleRow = (row) => {
        const newSelected = Object.assign({}, this.state.selected);
        newSelected[row.id] = !this.state.selected[row.id];
        this.setState({ selected: newSelected }, () => {
            if (this.state.selected[row.id] === false) {
                delete this.state.selected[row.id];
            }
            if (Object.keys(this.state.selected).length !== 0) {
                this.setState({ hideButton: true })
            }
            else {
                this.setState({ hideButton: false })
            }

        })
    }

    deleteHandler = (id) => {
        if (Object.keys(this.state.selected).length !== 0) {
            this.props.deleteCartListById(this.state.selected);
            this.setState({ selectedRow: null, selected: {}, hideButton: false, editBtnHide: true })
        }
        else {
            const newSelected = Object.assign({}, this.state.selected);
            newSelected[id] = !this.state.selected[id];
            this.props.deleteCartListById(newSelected);
        }
    }

    addHandler = (row) => {
        this.props.addListCart(row.id, row.count);
    }

    minusHandler = (row) => {
        this.props.subCartList(row.id, row.count);
    }

    render() {

        return (
            <div >
                <ReactTable
                    // data={this.props.cartData ? this.props.cartData : []}
                    columns={[
                        {
                            Header: () => <div className="ID"></div>,
                            id: 'row',
                            className: 'ID TextCenter',
                            headerClassName: 'ID TextCenter',
                            Cell: (row) => {
                                return (
                                    <div className='text-center pt-3'>
                                        <Checkbox
                                            checked={this.state.selected[row.row._original.id] === true}
                                            onChange={() => {
                                                this.toggleRow(row.row._original);
                                            }}
                                        />
                                    </div>
                                )
                            },
                            sortable: false,
                            filterable: false,
                            foldable: false,
                            width: 75
                        },
                        {
                            Header: () => <div className="Header" style={{ textAlign: 'initial' }} >Confirmed</div>,
                            // accessor: 'pro_name',
                            className: 'Name TextCenter',
                            headerClassName: 'Name TextCenter',
                            Cell: (row) => {
                                return (
                                    <div >
                                        <Row>
                                        </Row>
                                    </div>
                                )
                            },
                            foldable: false,
                            width: 200
                        },
                        {
                            Header: () => <div className="Header" >Active</div>,
                            // accessor: 'price',
                            foldable: false,
                            className: 'company TextCenter',
                            headerClassName: 'company TextCenter',
                            Cell: (row) => {
                                return (
                                    <div className='text-center pt-4'>

                                    </div>
                                )
                            },
                        },
                        {
                            Header: () => <div className="Header" >Recovered</div>,
                            accessor: 'company',
                            foldable: true,
                            className: 'company TextCenter',
                            headerClassName: 'company TextCenter',
                            Cell: (row) => {
                                return (
                                    <div className='text-center pt-4'>

                                    </div>
                                )
                            },
                        },
                        {
                            Header: () => <div className="Header" >Deceased</div>,
                            accessor: 'company',
                            foldable: true,
                            className: 'company TextCenter',
                            headerClassName: 'company TextCenter',

                        },
                        {
                            Footer: () => <div style={{
                                position: 'relative',
                                height: '40px'
                            }}>
                                <Col >
                                    <span style={{ marginLeft: '-450px', position: 'relative' }}>Total</span>
                                    <span style={{
                                        position: 'relative',
                                        marginLeft: '150px'
                                    }}>$
                                    </span>
                                </Col>
                            </div>
                        }
                    ]}
                    pageSize={this.props.cartData.length}
                    showPaginationBottom={false}
                />
            </div >
        );
    }
}


// const mapStateToProps = (state) => {
//     return {
//         cartData: state.cartData,
//         totalPrice: state.totalPrice
//     }
// }

// const mapDispachToProps = (dispatch) => {
//     return {
//         deleteCartListById: (id) => { dispatch({ type: "deleteCartListById", payload: { "id": id } }) },
//         addListCart: (id, count) => {
//             dispatch({
//                 type: 'addListCart',
//                 payload: {
//                     "id": id, "count": count
//                 }
//             })
//         },
//         subCartList: (id, count) => {
//             dispatch({
//                 type: 'subCartList',
//                 payload: {
//                     "id": id, "count": count
//                 }
//             })
//         },

//     }
// }

// export default connect(mapStateToProps, mapDispachToProps)(Carts);
export default Home;