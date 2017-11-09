<template>
  <div>
    <div class="card text-white bg-primary">
  <div v-for="todo in todos" class="card-body">
    <blockquote class="card-blockquote">
      <h3>{{todo.point}}</h3>
      <p>{{todo.task}}</p>
      <footer>{{todo.description}} <cite title="Source Title">Source Title</cite></footer>
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
    delete (id){
      this.$db.ref(`kanban/todo/`).push({
        task:task,
        description:description,
        point: point
      })
      this.$db.ref(`kanban/backlog/` + id).remove()
    }
  }
}
</script>

<style>

</style>
