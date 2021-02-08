import React, { Component } from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';
import { createTask, fetchTasksList, updateTask, deleteTask } from './tasksGateway';

class TasksList extends Component {
   state = {
      tasks: [],
   };

   componentDidMount() {
      this.fetchTasks();
   }

   fetchTasks = () => {
      fetchTasksList().then(tasksList =>
         this.setState({
            tasks: tasksList,
         }),
      );
   };

   handleCreate = text => {
      const newTask = {
         text,
         done: false,
      };

      createTask(newTask).then(() => this.fetchTasks());
   };

   handleTaskChange = id => {
      const { done, text } = this.state.tasks.find(task => task.id === id);
      const updatedTask = {
         text,
         done: !done,
      };

      updateTask(id, updatedTask).then(() => this.fetchTasks());
   };

   handleDelete = id => {
      deleteTask(id).then(() => this.fetchTasks());
   };

   render() {
      return (
         <div className="todo-list">
            <CreateTaskInput onCreate={this.handleCreate} />
            <ul className="list">
               {this.state.tasks
                  .slice()
                  .sort((prev, next) => prev.done - next.done)
                  .map(task => (
                     <Task
                        {...task}
                        key={task.id}
                        onChange={this.handleTaskChange}
                        onDelete={this.handleDelete}
                     />
                  ))}
            </ul>
         </div>
      );
   }
}

export default TasksList;
