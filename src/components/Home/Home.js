import React from 'react'
import ReactTable from 'react-table';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import { Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import './Home.css';
// import Header from '../Header/Header';
import Data from '../../Asset/data/data';


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
                    data={Data ? Data : []}
                    columns={[
                        {
                            Header: () => <div className="ID">State/UT</div>,
                            id: 'row',
                            className: 'State TextCenter',
                            headerClassName: 'ID TextCenter',
                            Cell: (row) => {
                                return (
                                    <div className='text-center pt-3'>
                                        {row.row._original.State !== "Total" ?
                                            row.row._original.State
                                            : null}
                                        {/* <Checkbox
                                            checked={this.state.selected[row.row._original.id] === true}
                                            onChange={() => {
                                                this.toggleRow(row.row._original);
                                            }}
                                        /> */}
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
                            accessor: 'Confirmed',
                            className: 'Name TextCenter',
                            headerClassName: 'Name TextCenter',
                            Cell: (row) => {
                                return (
                                    <div >
                                        {row.row._original.State !== "Total" ?
                                            row.row._original.Confirmed
                                            : null}
                                    </div>
                                )
                            },
                            foldable: false,
                            width: 200
                        },
                        {
                            Header: () => <div className="Header" >Active</div>,
                            accessor: 'Active',
                            foldable: false,
                            className: 'company TextCenter',
                            headerClassName: 'company TextCenter',
                            Cell: (row) => {
                                return (
                                    <div className='text-center pt-4'>
                                        {row.row._original.State !== "Total" ?
                                            row.row._original.Active
                                            : null}
                                    </div>
                                )
                            },
                        },
                        {
                            Header: () => <div className="Header" >Recovered</div>,
                            accessor: 'Recovered',
                            foldable: true,
                            className: 'company TextCenter',
                            headerClassName: 'company TextCenter',
                            Cell: (row) => {
                                return (
                                    <div className='text-center pt-4'>
                                        {row.row._original.State !== "Total" ?
                                            row.row._original.Recovered
                                            : null}
                                    </div>
                                )
                            },
                        },
                        {
                            Header: () => <div className="Header" >Deceased</div>,
                            accessor: 'Deaths',
                            foldable: true,
                            className: 'company TextCenter',
                            headerClassName: 'company TextCenter',
                            Cell: (row) => {
                                return (
                                    <div className='text-center pt-4'>
                                        {row.row._original.State !== "Total" ?
                                            row.row._original.Deaths
                                            : null}
                                    </div>
                                )
                            },

                        },
                        {
                            Footer: () => <div style={{
                                position: 'relative',
                                height: '40px'
                            }}>
                                {/* Cell: (row) => {
                                return (
                                    <div className='text-center pt-4'>

                                    </div>
                                ) */}
                            },
                            </div>
                        }
                    ]}
                    pageSize={Data.length}
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