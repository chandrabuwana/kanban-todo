<template>
  <div>
    <br><br>
      <div class="card text-white bg-success">
        <div v-for="todo in todos" class="card-body">
          <blockquote class="card-blockquote">
            <h3>{{todo.point}}</h3>
            <p>{{todo.task}}</p>
            <footer> <cite title="Source Title">{{todo.description}}</cite></footer>
            <button  @click="deleteData(todo['.key'])" type="button" class="btn btn-info">Delete</button>
            <button @click="move(todo['.key'],todo.point,todo.task,todo.description)" type="button" class="btn btn-info">Done</button>
          </blockquote>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Backlog',
  data(){
    return{

    }
  },
  firebase: function(){
    return {
      todos: this.$db.ref('kanban/backlog/')
    }
  },
  created (){
    console.log(this.todos);
  },
  methods: {
    deleteData (id){
      this.$db.ref(`kanban/backlog/` + id ).remove()
    },
    move (id,point,task,description){
      this.$db.ref(`kanban/todo/`).push({
        point: point,
        task:task,
        description:description
      })
      this.$db.ref(`kanban/backlog/` +id).remove()
    }
  }
}

</script>

<style>

</style>
