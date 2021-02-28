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
            error: null,
            // sorting users
            order: true,
            // filtering users
            filteredUsers: [],
            input: false
        };
    };

    // Once the page is loaded then make the api call
    componentDidMount() {
        this.fetchRandomUser();        
    };

    // Performing a get request from the api
    fetchRandomUser = async() => {
        try {
            await fetch('https://randomuser.me/api/?results=20&inc=id,picture,name,cell,email,dob')
            .then(results => {
                return results.json();
            })
            .then(data => {
                // Storing the data response in the user variable
                let user = data.results

                // Setting the user variable to the user state
                this.setState({user: user});
            });
        }
        catch(error) {
            this.setState({ error: error});
        };
    };


    sortByName = () => {
        this.setState({
            user: this.state.order ? this.state.user.sort((a,b) => {
            if(a.name.first < b.name.first) return -1;
            if(a.name.first > b.name.first) return 1;
            return 0;
        })
            : this.state.user.reverse((a,b) => {
                if(a.name.first < b.name.first) return 1;
                if(a.name.first > b.name.first) return -1;
                return 0;
            }),
            order: !this.state.order
        })
        this.setState({
            filteredUsers: this.state.order 
            ? this.state.user.sort((a,b) => {
            if(a.name.first < b.name.first) return -1;
            if(a.name.first > b.name.first) return 1;
            return 0;
        })
            : this.state.filteredUsers.reverse((a,b) => {
                if(a.name.first < b.name.first) return 1;
                if(a.name.first > b.name.first) return -1;
                return 0;
            }),
            order: !this.state.order
        })

    };

    // Rendering the page
    render() {

        // Destructuring the states: user, filteredUsers and input for easy access
        const { user, filteredUsers, input} = this.state;

        // Creating a function that will handle when a user types into the search bar
        const handleSearchChange = event => {

            // Destructuring the state user
            const {user} = this.state;

            // Creating a variable named filteredUsers that will store the filtered user
            // The filter method in this case is checking the first name for any characters that match when the user uses the input field with event.target.value
            // The first character in the users name is capitalized so after event.target.value we convert the first character that user type in to uppercase
            // Then to account for the remainder of characters we concattinate event.target.value and use the slice method starting from index position 1
            // Because there is 1 parameter being passed in slice, it will account for all the remaining characters
            const filteredUsers = user.filter(user => user.name.first.startsWith(event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1)));
            console.log(filteredUsers)
            console.log(user)
            console.log(input)
            // The filteredUsers state gets set to whatever is stored in the filteredUsers variable and input value to true
            this.setState({
                filteredUsers: filteredUsers,
                input: true
            });
        };
        
        // If input is true and the filteredUsers length is not 0 then return the filteredUsers array
        // Else if input is false and filteredUsers is 0 then return user
        // Else return filteredUsers
        // const usersForTable = input && filteredUsers.length !== 0 ? filteredUsers : !input && filteredUsers.length === 0 ? user : filteredUsers;
        const usersForTable = input && filteredUsers.length !== 0 ? filteredUsers : !input && filteredUsers.length === 0 ? user : input && filteredUsers.length === 0 ? user : filteredUsers;

            
        return (
            <div>
                <Title/>
                <Search
                handleSearchChange={handleSearchChange}
                />
                <div className='container'>
                    <table className="table table-striped">
                        <TableHead
                        sortByName={this.sortByName}
                        // sortByPhone={this.sortByPhone}
                        // sortByEmail={this.sortByEmail}
                        // sortByDob={this.sortByDob}
                        />
                        <tbody>
                            {usersForTable.map(user => (                           
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