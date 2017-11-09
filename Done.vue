<template>
  <div>
    <br><br>
      <div class="card text-white bg-danger">
        <div v-for="todo in todos" class="card-body">
          <blockquote class="card-blockquote">
            <h3>{{todo.point}}</h3>
            <p>{{todo.task}}</p>
            <footer> <cite title="Source Title">{{todo.description}}</cite></footer>
            <button  @click="deleteData(todo['.key'])" type="button" class="btn btn-info">Delete</button>
            <!-- <button @click="move(todo['.key'],todo.task,todo.point,todo.description)" type="button" class="btn btn-info">Done</button> -->
          </blockquote>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Done',
  data(){
    return{
    }
  },
  firebase: function (){
    return {
      todos: this.$db.ref(`kanban/done/`)
    }
  },
  created(){
    console.log(this.todos);
  },
  methods: {
    deleteData(id){
      this.$db.ref(`kanban/done/`+ id).remove()
    }
  }
}
</script>

<style lang="css">
</style>
