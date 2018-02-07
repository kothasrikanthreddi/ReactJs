import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import AddUserForm from '../forms/AddUserForm';
import { adduser } from "../../actions/users";

class AddUserPage extends React.Component{
   submit = (data) => this.props.adduser(data).then(() => this.props.history.push('/dashboard'));

    render(){
        return(
            <div>
                <AddUserForm submit={this.submit} />
            </div>
        );
    }
}

AddUserPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    adduser: PropTypes.func.isRequired
};

export default connect(null, { adduser })(AddUserPage);