<template>
  <div class="col-md-12">
    <div class="form-group">
      <label class="control-label">Task</label>
      <div class="form-group">
        <label class="sr-only" for="exampleInputAmount">Task</label>
        <div class="input-group">
          <div class="input-group-addon"></div>
          <input type="text" class="form-control" id="exampleInputAmount" placeholder="Point">
          <div class="input-group-addon">                  
          </div>
        </div>
      </div>
      <div class="form-group">
        <label class="sr-only" for="exampleInputAmount">Task</label>
        <div class="input-group">
          <div class="input-group-addon"></div>
          <input type="text" class="form-control" id="exampleInputAmount" placeholder="Task">
          <div class="input-group-addon">                  
          </div>
        </div>
      </div>
      <div class="form-group">
        <label class="sr-only" for="exampleInputAmount">Task</label>
        <div class="input-group">
          <div class="input-group-addon"></div>
          <input type="text" class="form-control" id="exampleInputAmount" placeholder="Description">
          <div class="input-group-addon">                  
          </div>
        </div>
      </div>
    </div>
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
    addTask (){
      this.$db.ref('kanban/backlog/').push({
        task: this.task,
        
      })
    }
  }
}
</script>

<style>

</style>
