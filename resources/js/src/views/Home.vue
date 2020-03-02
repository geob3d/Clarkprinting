<template>


  <div>


      <vx-card>

          <div    class="product-details p-6" style="border: none"  >
            <div ref="parent" id="capture" class="" style="position:relative;max-height:auto;width:100%" >
                <img style="border: none;max-width:100%;height:auto position:absolute" :src="`/storage/10/7x3_5_Shelf_LincolnMarket_GDF_RBG_72dpi.jpg`"/>


                <div ref="parent" > <!--- root issue -->

                <vue-draggable-resizable
                    v-for="element in elements"
                    :key="element.id"
                    :id="element.id"
                    :x="Number(element.x_coordinate)" 
                    :y="Number(element.y_coordinate)" 

                    :h="Number(element.height)"
                    :w="Number(element.width)"
                    

                    :style="{  width: Number(element.width) +'%', height: Number(element.height) +'%', left: Number(element.x_coordinate)+'%', top: Number(element.y_coordinate)+'%' }"        
                    @resizing="(left, top, width,height) => onResizing( id, width,height )"   
                    @dragging="( left, top) => onDragging( id, left, top)"
                    @dragstop="(left,top) => onDraggingStop(id,left,top)"
                    
                    @mousedown.native="select"
                    >
                    
                    <div v-resize-text="{ratio: 1}">Hello Vue</div>


                   <!-- <p v-bind:style="{fontSize:element.font_size+'px',color:element.font_color}" >{{ element.field }}</p>-->

                  </vue-draggable-resizable>

                  </div>

          </div>





        </div>
      </vx-card>


    <div class="vx-row mt-6" vs-justify="center" vs-align="center" >
      
      <vs-table class="table">
                <thead>
                    <vs-tr>
                    
                      <!--  <vs-th><strong>ProductID</strong></vs-th>-->
                        <vs-th><strong>Row ID</strong></vs-th>
                        <vs-th><strong>Field Name</strong></vs-th>
                        <vs-th><strong>Field Type</strong></vs-th>
                        <vs-th><strong>Field Value</strong></vs-th>
                        <vs-th><strong>Font Size</strong></vs-th>
                        <vs-th><strong>Font color</strong></vs-th>
                        <td><strong>X-Cordinate</strong></td>
                        <td><strong>Y-Cordinate</strong></td>
                      <!--    <td><strong>ScaleX</strong></td>
                        <td><strong>ScaleY</strong></td> -->
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

                        <vs-td>
                        <el-select v-model="element.field_Type" filterable placeholder="Select">
                          <el-option
                            v-for="item in fields"
                            :key="item.id"
                            :value="item.type">
                          </el-option>
                        </el-select>
                        </vs-td>


                        <vs-td>
                        <input v-if="element.field_type" 
                        :type="element.field_type" :name="element.field_name" 
                        :placeholder="label" 
                        v-model="element.field"
                        :key="`field-${label}`" >
                        </vs-td>

                        <vs-td>
                          <vs-td><input type="text" v-model="element.font_size"></vs-td>
                        </vs-td>

                        <vs-td>
                          <el-color-picker v-model="element.font_color"></el-color-picker>
                        </vs-td>



                        <vs-td><input type="text" v-model.number="element.x_coordinate"></vs-td>
                        <vs-td><input type="text" v-model.number="element.y_coordinate"></vs-td>
                      <!--  <vs-td><input type="text" v-model.number="element.scaleX"></vs-td>
                        <vs-td><input type="text" v-model.number="element.scaleY"></vs-td>-->
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
import Prism from 'vue-prism-component'
import ResizeText from 'vue-resize-text'
import VueDraggableResizable from 'vue-draggable-resizable'
import axios from 'axios'

 
export default {
   directives: {
    ResizeText
 },
  data: function () {
    return {
      
      selectedItem: null,
      output: null,
      elements:{},
      elementa: {
        model_id: '',
        row_id: '',
        field_name: '',
        field_type: '',
        x_coordinate: '',
        y_coordinate: '',
        width: '',
        height: '',
    },
        "fields": [
          {
            "label": "Input",
            "name": "fulllName",
            "type": "text"
          },
  
          {
            "label": "Date",
            "name": "Date",
            "type": "date"
          },
          {
            "label": "Time",
            "name": "Time",
            "type": "time"
          },
                    {
            "label": "Text Area",
            "name": "textarea",
            "type": "textarea"
          },
          
          
          ]
        


      
    }
    
    
  },
  mounted() {
    this.element();

  },

  computed: {

  },

  methods: {


    element() {
      this.error = this.elements = null;
      axios
        .get('/api/imageCordianates') 
        .then(response => {
            this.loading = false;
            this.elements = response.data.data;
        });
    },

    updatelement() {
        let uri = `/api/imageCordianate/1`;
        axios
        .put(uri, this.elementa)
        .then((response) => {
        //this.$router.push({name:'Product'});
        });
    },
    addRow() {
    var elem = document.createElement('tr');
    this.elements.push({
        id: "", //!model id
        prodID:"", // user this. param
        field_name: "",
        fieldType:"text",
        field:" ",
        x_coordinate: 225,
        y_coordinate: 225,
        //scaleX: 1,
        //scaleY: 1,
        width: 80,
        height: 50,
        //angle: 0,


    });
    

    



    

},

    select: function(targetId) {
    targetId = event.currentTarget.id;
     this.selectedItem =  targetId;
    //console.log(this.selectedItem); // returns 'foo'
    //alert("Hello! I am an alert box!!");

    },


    onDragging( id, left, top,fclick) {
      let x = (left / this.$refs.parent.offsetWidth )* 100 ;
      let y = (top / this.$refs.parent.offsetHeight) * 100;

      fclick=this.selectedItem 
   
      this.elements.forEach(elementy => {
          if (elementy.id==fclick){
            return [
              elementy.x_coordinate= x,
             elementy.y_coordinate= y]
          
          }
                  

        });

        
    },

    onDraggingStop(id,left,top,fclick){
      let x = (left / this.$refs.parent.offsetWidth )* 100 ;
      let y = (top / this.$refs.parent.offsetHeight) * 100;

      fclick=this.selectedItem; 

      this.elements.forEach(elementy => {
          if (elementy.id==fclick){
            return [
              elementy.x_coordinate= x,
             elementy.y_coordinate= y]

 
          }
                        console.log(x)
        });



      // let uri = '/api/imageCordianate/' + fclick;
      // axios
      // .put(uri, this.product)
      // .then((response) => {
    
      // });

    },


    onResizing( id, width, height,fclick) {
      let w = (width / this.$refs.parent.offsetWidth) * 100 ;
      let h = (height / this.$refs.parent.offsetHeight) * 100;
      fclick=this.selectedItem 
   
      this.elements.forEach(elementy => {
          if (elementy.id==fclick){
            return [elementy.width = w, elementy.height = h]
          }
          
        });
    },

    // onResize: function (x, y, width, height,fclick) {
    //   //this.x = x
    //   //this.y = y
    //   //this.width = width
    //   //this.height = height
      
    //   fclick=this.selectedItem 
    //   //console.log(fclick)
    //   this.elements.forEach(elementy => {
    //     if (elementy.id == fclick){
    //       return [
    //         elementy.x_coordinate= x,
    //        elementy.y_coordinate= y,
    //        elementy.width=width,
    //        elementy.height=height]
    //     }
        
    //   });
    // },
    // onDrag: function (x, y,fclick) {
    //   //this.x = x
    //   //this.y = y
    //   fclick=this.selectedItem 
   
    //   //console.log(fclick)
    //   this.elements.forEach(elementy => {
    //     if (elementy.id == fclick){
    //       return [elementy.x_coordinate= x, elementy.y_coordinate= y]
    //     }
        
    //   });
    // },

    handleSelectItem(element){
       this.selectedItem = this.elements[0].id;

       console.log(this.selectedItem)

       // you can also handle toggle action here manually to open and close dropdown
     }

  }
}
</script>


<style lang="stylus">




</style>