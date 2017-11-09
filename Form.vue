<template>
  <div class="col-md-12">
    <div class="form-group">
      <label class="control-label">Task</label>
      <div class="form-group">
        <label class="sr-only" for="exampleInputAmount">Task</label>
        <div class="input-group">
          <div class="input-group-addon"></div>
          <input v-model="point" type="text" class="form-control" id="exampleInputAmount" placeholder="Point">
          <div class="input-group-addon">
          </div>
        </div>
      </div>
      <div class="form-group">
        <label class="sr-only" for="exampleInputAmount">Task</label>
        <div class="input-group">
          <div class="input-group-addon"></div>
          <input v-model="task" type="text" class="form-control" id="exampleInputAmount" placeholder="Task">
          <div class="input-group-addon">
          </div>
        </div>
      </div>
      <div class="form-group">
        <label class="sr-only" for="exampleInputAmount">Task</label>
        <div class="input-group">
          <div class="input-group-addon"></div>
          <input v-model="description" type="text" class="form-control" id="exampleInputAmount" placeholder="Description">
          <div class="input-group-addon">
          </div>
        </div>
      </div>
    </div>
    <button v-on:click="addTask()" type="submit" class="btn btn-success">Submit</button>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data(){
    return {
      task :null,
      description: null,
      point: null
    }
  },methods: {
    addTask () {
      this.$db.ref('kanban/backlog/').push({
        task: this.task,
        description: this.description,
        point: this.point
      })
      this.task= '',
      this.description= '',
      this.point= ''
    }
  }
}
</script>

<style>

</style>
