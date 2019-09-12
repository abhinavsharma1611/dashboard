import React from 'react';
import { Table } from './table';

class ManageRecords extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section>

                    <div className="title">
                        <h5>Manage Team</h5>
                    </div>

                    <div className="row">

                        <div className="col-md-6">
                            <div className="box">
                                <div className="heading">
                                    <h5>Search Record</h5>
                                </div>
                                <div className="filters">
                                    <form action="" method="get" className="row">

                                        <div className="form-group col-md-6">
                                            <label htmlFor="email">Select Status</label>
                                            <select name="status" className="form-control">
                                                <option >All</option>
                                                <option value="Submitted">Submitted</option>
                                                <option value="Ringing">Ringing</option>
                                                <option value="Call back">Call back</option>
                                                <option value="Meeting Propose/Active">Meeting Propose/Active</option>
                                                <option value="Meeting Done">Meeting Done</option>
                                                <option value="Meeting Pospond">Meeting Pospond</option>
                                                <option value="Meeting Cancel">Meeting Cancel</option>
                                                <option value="Followup">Followup</option>
                                                <option value="Not Responding">Not Responding</option>
                                                <option value="Not Interested">Not Interested</option>
                                                <option value="Closed">Closed</option>
                                            </select>
                                        </div>

                                        <div className="form-group col-md-6">
                                            <label htmlFor="exampleInputEmail1">Project</label>
                                            <select name="project" className="form-control">
                                                <option >All Project</option>
                                                <option value="Apex our homes">Apex our homes</option>
                                                <option value="OSB Expressway Tower">OSB Expressway Tower</option>
                                                <option value="sec.37,109">sec.37,109</option>
                                            </select>
                                        </div>

                                        <div className="form-group col-md-6">
                                            <label htmlFor="exampleInputEmail1">Lead Source</label>
                                            <select name="lead_source" className="form-control">
                                                <option >All</option>
                                                <option value="Facebook">Facebook</option>
                                                <option value="Portal">Portal</option>
                                                <option value="SMS">SMS</option>
                                                <option value="vv">vv</option>
                                            </select>
                                        </div>

                                        <div className="form-group col-md-6">
                                            <label htmlFor="email">Assigned to</label>
                                            <select name="team_member" className="form-control">
                                                <option >All</option>
                                                <option value="28">Abhishek Pandey</option>
                                                <option value="23">Pankaj Katara</option>
                                                <option value="26">Pankaj Yadav</option>
                                                <option value="18">Ritesh</option>
                                                <option value="27">Sourav Rathore</option>
                                                <option value="19">Sushant Sirohi</option>
                                                <option value="29">Team Member</option>
                                                <option value="24">Tejveer</option>
                                                <option value="5">Yash</option>
                                            </select>
                                        </div>

                                        <div className="form-group col-md-6">
                                            <label htmlFor="exampleInputEmail1">Date From</label>
                                            <input type="date" className="form-control" name="date_from" />
                                        </div>

                                        <div className="form-group col-md-6">
                                            <label htmlFor="exampleInputEmail1">Date Till</label>
                                            <input type="date" className="form-control" name="date_till" />
                                        </div>


                                        <div className="form-group col-md-12">
                                            <label htmlFor="email">Search Text</label>
                                            <input type="text" name="q" className="form-control" placeholder="Search by name,email,phone no" />
                                        </div>

                                    </form>
                                </div>
                                <a href="# " className="btn btn-primary btn-block btn1">Submit</a>
                                <a href="# " className="btn btn-primary btn-block btn2">Download Record</a>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="box">
                                <table className="table table-bordered table-hover">
                                    <tbody>
                                        <tr>
                                            <td width="170">All Leads</td>
                                            <td>25 Record</td>
                                        </tr>
                                        <tr>
                                            <td>Submitted</td>
                                            <td>0 Record</td>
                                        </tr>
                                        <tr>
                                            <td>Ringing</td>
                                            <td>0 Record</td>
                                        </tr>
                                        <tr>
                                            <td>Call back</td>
                                            <td>0 Record</td>
                                        </tr>
                                        <tr>
                                            <td>Meeting Propose/Active</td>
                                            <td>1 Record</td>
                                        </tr>
                                        <tr>
                                            <td>Meeting Done</td>
                                            <td>1 Record</td>
                                        </tr>
                                        <tr>
                                            <td>Meeting Pospond</td>
                                            <td>0 Record</td>
                                        </tr>
                                        <tr>
                                            <td>Meeting Cancel</td>
                                            <td>0 Record</td>
                                        </tr>
                                        <tr>
                                            <td>Followup</td>
                                            <td>0 Record</td>
                                        </tr>
                                        <tr>
                                            <td>Not Responding</td>
                                            <td>0 Record</td>
                                        </tr>
                                        <tr>
                                            <td>Not Interested</td>
                                            <td>20 Record</td>
                                        </tr>
                                        <tr>
                                            <td>Closed</td>
                                            <td>3 Record</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>

                    <Table />

                </section>
            </React.Fragment>
        )
    }
}

export default ManageRecords;