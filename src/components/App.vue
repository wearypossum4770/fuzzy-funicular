<template>
<div>
  <div id="app">
    <h1>To-Do List</h1>
    <ul type="none">
  <li v-for="item in ToDoItems" :key="item.id">
    <to-do-item label="item.label" :done="item.done"></to-do-item>
  </li>
    </ul>
  </div>
</div>
</template>

<script>
import ToDoItem from './ToDoItem.vue';
import uniqueId from 'lodash.uniqueid'

  export default {
    name: 'app',
      components: {
    ToDoItem
  },
    data(){
      return {
        message:"Hello World",
              ToDoItems: [
        { id: uniqueId('todo-'),    label: 'Learn Vue', done: false },
        { id: uniqueId('todo-'),    label: 'Create a Vue project with the CLI', done: true },
        { id: uniqueId('todo-'),    label: 'Have fun', done: true },
        { id: uniqueId('todo-'),    label: 'Create a to-do list', done: false }
      ]
      }
    }
  }
</script>
<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>
<!-- Global CSS -->
<style>  
  code {
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
    font-size: 0.9em;
    white-space: pre-wrap;
    color: #2c3e50;
  }

  code::before, code::after {
    content: '`';
  }
</style>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>
  #app {
    text-align: center;
  }

  #app h1 {
    color: #2c3e50;
    font-weight: 300;
    margin: 0;
  }

  .banner {
    height: 200px;
    background-color: #f6f6f6;
    padding: 50px 10px;
  }

  .bottom {
    padding: 80px 10px;
    font-size: 24px;
    font-weight: 300;
  }

  .fade {
    font-size: 14px;
  }

  .logo {
    animation: spin 4s 1s infinite linear
  }

  @keyframes spin {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
  }
</style>
