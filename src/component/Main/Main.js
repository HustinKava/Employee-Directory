import React, { Component } from 'react';
import Title from '../Title/Title';
import Search from '../Search/Search';
import TableHead from '../TableHead/TableHead';
import TableBody from '../TableBody/TableBody';
import './Main.css';

class Main extends Component {

    constructor() {
        super();
        this.state = {
            user: [],
            error: null
        };
    };

    componentDidMount() {
        this.fetchRandomUser();        
    };

    fetchRandomUser = async() => {
        try {
            await fetch('https://randomuser.me/api/?results=20&inc=id,picture,name,cell,email,dob')
            .then(results => {
                return results.json();
            })
            .then(data => {

                let user = data.results

                this.setState({user: user});
            });
        }
        catch(error) {
            this.setState({ error: error});
        };
    };

    render() {

        return (
            <div>
                <Title/>
                <Search/>
                <div class ='container'>
                    <table class="table table-striped">
                        <TableHead/>
                        <tbody>
                            {this.state.user.map(users => (                           
                                <TableBody
                                key={users.name.first + ' ' + users.name.last}
                                image={users.picture.large}
                                name={users.name.first + ' ' + users.name.last}
                                phone={users.cell}
                                email={users.email}
                                dob={users.dob.date}
                                />                            
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };
};

export default Main;

// input
// function onChange of input
// take a paramter of what the user is inputting 
// e.target.value
// filter method