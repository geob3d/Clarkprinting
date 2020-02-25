<template>

<div>

  <div  style="height: 500px; width: 500px; border: 1px solid red; position: relative;">
    <vue-draggable-resizable 
    v-for="element in elements"
    :key="element.id"
    :parent="true" 
    :resizable="true" 
    :x="Number(element.x_coordinate)" 
    :y="Number(element.y_coordinate)" 
    style="border: 1px solid">
      <p>{{ element.id }}</p>
    </vue-draggable-resizable>
  </div>

  <div>

    <vs-table class="table">
              <thead>
                  <vs-tr>
                   
                     <!--  <vs-th><strong>ProductID</strong></vs-th>-->
                      <vs-th><strong>Row ID</strong></vs-th>
                      <vs-th><strong>Field Name</strong></vs-th>
                      <vs-th><strong>Field Type</strong></vs-th>
                      <vs-th><strong>Field Value</strong></vs-th>
                      <td><strong>X-Cordinate</strong></td>
                      <td><strong>Y-Cordinate</strong></td>
                      <td><strong>ScaleX</strong></td>
                      <td><strong>ScaleY</strong></td>
                      <vs-th><strong>Width</strong></vs-th>
                      <vs-th><strong>Height</strong></vs-th>
                      <!-- <td><strong>Angle</strong></td>-->
                  </vs-tr>
              </thead>
              <tbody>
                
                  <tr v-for="(element, index) in elements ">


                      <!--<vs-td><input type="text" v-model="row.id"></vs-td>-->
                      <vs-td><input type="text" v-model="element.row_id"></vs-td>
                      <vs-td><input type="text" v-model="element.field_name"></vs-td>

                      <vs-td><input type="text" v-model.number="element.x_coordinate"></vs-td>
                      <vs-td><input type="text" v-model.number="element.y_coordinate"></vs-td>
                      <vs-td><input type="text" v-model.number="element.scaleX"></vs-td>
                      <vs-td><input type="text" v-model.number="element.scaleY"></vs-td>
                      <vs-td><input type="text" v-model.number="element.width"></vs-td>
                      <vs-td><input type="text" v-model.number="element.height"></vs-td>
                     <!-- <vs-td><input type="text" v-model.number="row.angle"></vs-td>-->
                      
      
                      <vs-td>
                          <a color="primary" vs-align="center" type="border" class=" items-center btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-primary border border-solid border-primary" v-on:click="removeElement(index);" style="cursor: pointer">Remove</a>
                      </vs-td>

                  </tr>
              </tbody>
          </vs-table>

  </div>

</div>


</template>
 
<script>
import VueDraggableResizable from 'vue-draggable-resizable'
import axios from 'axios'

 
export default {
  data: function () {
    return {
      
      elements:[]
      
    }
    
    
  },
  mounted() {
    this.element();


  },

  methods: {

    element() {
      this.error = this.elements = null;
      axios
        .get('/api/imageCordianates') 
        .then(response => {
            console.log(response);
            this.loading = false;
            this.elements = response.data.data;
        });
    },

    
    onResize: function (x, y, width, height) {
      this.x = x
      this.y = y
      this.width = width
      this.height = height
    },
    onDrag: function (x, y) {
      this.x = x
      this.y = y
    }
  }
}
</script>