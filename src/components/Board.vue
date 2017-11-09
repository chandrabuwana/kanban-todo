<template>
  <div>
    <Navbar/>
    <div class="container">
      <div class="row">
        <Form></Form>
        <div class="col-md-3">
          <h2>Backlog</h2>
          <Backlog></Backlog>
        </div>
        <div class="col-md-3">
          <h2>Todo</h2>
          <!-- <Backlog/> -->
        </div>
        <div class="col-md-3">
          <h2>Doing</h2>
          <!-- <Backlog/> -->
        </div>
        <div class="col-md-3">
          <h2>Done</h2>
          <!-- <Backlog/> -->
        </div>
        
      </div>
    </div>
  </div>

</template>

<script>
import Navbar from '@/components/Navbar'
import Backlog from '@/components/Backlog'
import Form from '@/components/Form'
export default {
  components:{
    Navbar,
    Backlog,
    Form
  }
}
</script>

<style>
</style>
