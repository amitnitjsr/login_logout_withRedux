import React, { useState } from 'react'
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from 'react-router-dom';
import './Home.css';
import { connect } from "react-redux";


const Home = (props) => {
    const [searchInput, setsearchInput] = useState('');

    const searchHandler = (event) => {
        const value = event.target.value;
        setsearchInput(value);
        props.searchData(value)
    }


    return (
        <div className="position" >
            <Link to='/weather'><span style={{ textDecoration: 'underline' }}>Weather</span></Link>&nbsp;&nbsp;&nbsp;
            <Link to='/'><span style={{ textDecoration: 'underline' }}>Logout</span></Link>
            <Paper style={{ width: '20%', margin: '15px' }} >
                <IconButton
                    type="submit"
                    aria-label="search"
                >
                    <SearchIcon />
                </IconButton>
                <InputBase
                    onChange={(event) => searchHandler(event)}
                    placeholder="Search..."
                    value={searchInput}
                />

                {/* <Divider className={classes.divider} orientation="vertical" /> */}
            </Paper>
            <table className="table-pos">
                <tbody>
                    <tr>
                        <th>State/UT</th>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Recovered</th>
                        <th>Deceased</th>
                    </tr>
                    {
                        props.list.map(d => {
                            return (d.State !== "Total" && <tr>
                                <td>{d.State}</td>
                                <td>{d.Confirmed}</td>
                                <td>{d.Active}</td>
                                <td>{d.Recovered}</td>
                                <td>{d.Deaths}</td>
                            </tr>)
                        })
                    }
                </tbody>
                <tfoot style={{ backgroundColor: '#4CAF50' }}>
                    {
                        props.list.map(d => {
                            return (d.State === "Total" && <tr>
                                <th>{d.State}</th>
                                <th>{d.Confirmed}</th>
                                <th>{d.Active}</th>
                                <th>{d.Recovered}</th>
                                <th>{d.Deaths}</th>
                            </tr>)
                        })
                    }
                </tfoot>
            </table>
        </div >
    );

}


const mapStateToProps = state => {
    return {
        list: state.list
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        searchData: (searchInput) => {
            dispatch({ type: 'searchData', payload: { "searchInput": searchInput } })
        }

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
