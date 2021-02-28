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

    // Sorting alphabetically by name
    sortByName = () => {
        this.setState({
            user: this.state.order 
            ? this.state.user.sort((a,b) => {
            if(a.name.first < b.name.first) return -1;
            if(a.name.first > b.name.first) return 1;
            return 0;
        })
            : this.state.user.sort((a,b) => {
                if(a.name.first < b.name.first) return 1;
                if(a.name.first > b.name.first) return -1;
                return 0;
            })
        })
        this.setState({
            filteredUsers: this.state.order 
            ? this.state.filteredUsers.sort((a,b) => {
            if(a.name.first < b.name.first) return -1;
            if(a.name.first > b.name.first) return 1;
            return 0;
        })
            : this.state.filteredUsers.sort((a,b) => {
                if(a.name.first < b.name.first) return 1;
                if(a.name.first > b.name.first) return -1;
                return 0;
            })
        })
        this.setState({
            order: !this.state.order
        })
    };

    // Sorting alphabetically by Phone
    sortByPhone = () => {
        this.setState({
            user: this.state.order 
            ? this.state.user.sort((a,b) => {
            if(a.cell < b.cell) return -1;
            if(a.cell > b.cell) return 1;
            return 0;
        })
            : this.state.user.sort((a,b) => {
                if(a.cell < b.cell) return 1;
                if(a.cell > b.cell) return -1;
                return 0;
            })
        })
        this.setState({
            filteredUsers: this.state.order 
            ? this.state.filteredUsers.sort((a,b) => {
            if(a.cell < b.cell) return -1;
            if(a.cell > b.cell) return 1;
            return 0;
        })
            : this.state.filteredUsers.sort((a,b) => {
                if(a.cell < b.cell) return 1;
                if(a.cell > b.cell) return -1;
                return 0;
            })
        })
        this.setState({
            order: !this.state.order
        })
    };

    // Sorting alphabetically by Email
    sortByEmail = () => {
        this.setState({
            user: this.state.order 
            ? this.state.user.sort((a,b) => {
            if(a.email < b.email) return -1;
            if(a.email > b.email) return 1;
            return 0;
        })
            : this.state.user.sort((a,b) => {
                if(a.email < b.email) return 1;
                if(a.email > b.email) return -1;
                return 0;
            })
        })
        this.setState({
            filteredUsers: this.state.order 
            ? this.state.filteredUsers.sort((a,b) => {
            if(a.email < b.email) return -1;
            if(a.email > b.email) return 1;
            return 0;
        })
            : this.state.filteredUsers.sort((a,b) => {
                if(a.email < b.email) return 1;
                if(a.email > b.email) return -1;
                return 0;
            })
        })
        this.setState({
            order: !this.state.order
        })
    };

    // Sorting alphabetically by Dob
    sortByDob = () => {
        this.setState({
            user: this.state.order 
            ? this.state.user.sort((a,b) => {
            if(a.dob.date < b.dob.date) return -1;
            if(a.dob.date > b.dob.date) return 1;
            return 0;
        })
            : this.state.user.sort((a,b) => {
                if(a.dob.date < b.dob.date) return 1;
                if(a.dob.date > b.dob.date) return -1;
                return 0;
            })
        })
        this.setState({
            filteredUsers: this.state.order 
            ? this.state.filteredUsers.sort((a,b) => {
            if(a.dob.date < b.dob.date) return -1;
            if(a.dob.date > b.dob.date) return 1;
            return 0;
        })
            : this.state.filteredUsers.sort((a,b) => {
                if(a.dob.date < b.dob.date) return 1;
                if(a.dob.date > b.dob.date) return -1;
                return 0;
            })
        })
        this.setState({
            order: !this.state.order
        })
    };
    
    // Creating a function that will handle when a user types into the search bar
    handleSearchChange = event => {

        // Filtering our search results each time a character is entered into the search bar
        // We target the characters typed with event.target.value
        // The user names first character is always capitalized so we compensate for that by converting index 0 to uppercase
        // Then after we have accounted for the first character we concatenate with even.target.value again and use the splice method from index 1
        // This will then account for anything typed after the first character
        const filteredUsers = this.state.user.filter(user => user.name.first.startsWith(event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1)));
        
        // The filteredUsers state gets set to the users that are stored in the filteredUsers variable
        this.setState({
            filteredUsers: filteredUsers
        });
    };

    // Rendering the page
    render() {

            
        return (
            <div>
                <Title/>
                <Search
                handleSearchChange={this.handleSearchChange}
                />
                <div className='container'>
                    <table className="table table-striped">
                        <TableHead
                        sortByName={this.sortByName}
                        sortByPhone={this.sortByPhone}
                        sortByEmail={this.sortByEmail}
                        sortByDob={this.sortByDob}
                        />
                        <tbody>
                        {/* Checking if the filtered users arry is empty
                        if it is then return the users state */}
                        {this.state.filteredUsers.length === 0 ? 
                         this.state.user.map(user => {                         
                            return <TableBody
                            key={user.name.first + ' ' + user.name.last}
                            image={user.picture.large}
                            name={user.name.first + ' ' + user.name.last}
                            phone={user.cell}
                            email={user.email}
                            dob={user.dob.date}
                            />
                        })
                        :
                        // If the filtered users array is not empty then 
                        // Return the filtered users array
                        this.state.filteredUsers.map(user => {                       
                            return <TableBody
                                key={user.name.first + ' ' + user.name.last}
                                image={user.picture.large}
                                name={user.name.first + ' ' + user.name.last}
                                phone={user.cell}
                                email={user.email}
                                dob={user.dob.date}
                                />                            
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };
};

export default Main;