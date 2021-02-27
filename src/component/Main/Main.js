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
            users: [],
            error: null,
            order: true
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

                let users = data.results

                this.setState({users: users});
            });
        }
        catch(error) {
            this.setState({ error: error});
        };
    };


    sortByName = () => {
            this.setState({
              users: this.state.order
                ? this.state.users.sort((a, b) => {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
            })
                : this.state.users.reverse((a, b) => {
                if (a.name < b.name) return 1;
                if (a.name > b.name) return -1;
                return 0;
            }),
              order: !this.state.order,
            });
        }

    sortByPhone = () => {
        this.setState({
            users: this.state.order
            ? this.state.users.sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        })
            : this.state.users.reverse((a, b) => {
            if (a.name < b.name) return 1;
            if (a.name > b.name) return -1;
            return 0;
        }),
            order: !this.state.order,
        });
    }

    sortByEmail = () => {
        this.setState({
            users: this.state.order
            ? this.state.users.sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        })
            : this.state.users.reverse((a, b) => {
            if (a.name < b.name) return 1;
            if (a.name > b.name) return -1;
            return 0;
        }),
            order: !this.state.order,
        });
    }

    sortByDob = () => {
        this.setState({
            users: this.state.order
            ? this.state.users.sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        })
            : this.state.users.reverse((a, b) => {
            if (a.name < b.name) return 1;
            if (a.name > b.name) return -1;
            return 0;
        }),
            order: !this.state.order,
        });
    }

    render() {

        return (
            <div>
                <Title/>
                <Search/>
                <div className='container'>
                    <table className="table table-striped">
                        <TableHead
                        sortByName={this.sortByName}
                        sortByPhone={this.sortByPhone}
                        sortByEmail={this.sortByEmail}
                        sortByDob={this.sortByDob}
                        />
                        <tbody>
                            {this.state.users.map(user => (                           
                                <TableBody
                                key={user.name.first + ' ' + user.name.last}
                                image={user.picture.large}
                                name={user.name.first + ' ' + user.name.last}
                                phone={user.cell}
                                email={user.email}
                                dob={user.dob.date}
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