import axios from 'axios';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const Exercise = props => (
    <tr>
        <td>
            {props.exercise.username}
        </td>
        <td>
            {props.exercise.descripion}
        </td>
        <td>
            {props.exercise.duration}
        </td>
        <td>
            {props.exercise.date.substring(0, 10)}
        </td>
        <td>
            <Link to={"/edit/" + props.exercise._id}>edit</Link> 
            | <a href="#" onClick={()=> props.deleteExercise(props.exercise._id)}>
                delete
            </a>
        </td>
    </tr>
)

export default class ExercisesList extends Component {
    constructor(props){
        super(props);

        this.daleteExercise = this.daleteExercise.bind(this);

        this.state = {exercises: []};
    }

    componentDidMount(){
        axios.get('http://localhost:5000/exercises/')
        .then(res => {
            this.setState({exercises: res.data})
        })
        .catch(err => console.log(err));
    }

    daleteExercise(id){
        axios.delete('http://localhost:5000/exercises/'+ id)
        .then(res => console.log(res.data));

        this.setState({
            exercises: this.state.exercises.filer(el => el._id !== id)
        })
    }

    exercisesList(){
        return this.state.exercises.map(currentExercise => {
            return <Exercise 
            exercise={currentExercise} 
            daleteExercise={this.daleteExercise} 
            key={currentExercise._id} />
        })
    }

    render(){
        return (
           <div>
               <h3>Logged Exercises</h3>
               <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Descripion</th>
                            <th>Duration</th>
                            <th>Data</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.exercisesList() }
                    </tbody>
               </table>
           </div>
        );
    }
}