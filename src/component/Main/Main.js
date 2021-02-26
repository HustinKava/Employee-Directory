import React, { Component } from 'react';
import Title from '../Title/Title';
import Search from '../Search/Search';
import Results from '../Results/Results';
import ApiCall from '../ApiCall/ApiCall';
import './Main.css';

class Main extends Component {

    constructor() {
        super();
        this.state = {
            user: [],
            error: null
        }
    }

    componentDidMount() {
        this.fetchRandomUser();        
    }

    fetchRandomUser = async() => {
        try {
            await fetch('https://randomuser.me/api/?results=5&inc=id,picture,name,cell,email,dob')
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
        }
    }

    render() {

        return (
            <div>
                <Title/>
                <Search/>
                <div class ='container'>
                    <table class="table table-striped">
                        <Results/>

                        
                        {this.state.user.map(users => (
                            
                            <ApiCall
                            key={users.id.value}
                            image={users.picture.large}
                            name={users.name.first + ' ' + users.name.last}
                            phone={users.cell}
                            email={users.email}
                            dob={users.dob.date}
                            />
                            
                        ))}
                    </table>
                </div>
            </div>
        )
    }
}

export default Main;