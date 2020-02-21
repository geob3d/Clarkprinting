<template>

  <div id="app data-list-list-view" class="data-list-container">

    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <template>
          <div class="App">
            <div class="wrapper">
              <div class="workspace" ref="workspace">
                <div v-for="row in rows">
                <FreeTransform
                  
                  :key="row.id"
                  :x="row.x"
                  :y="row.y"
                  :scale-x="row.scaleX"
                  :scale-y="row.scaleY"
                  :width="row.width"
                  :height="row.height"
                  :angle="row.angle"
                  :offset-x="offsetX"
                  :offset-y="offsetY"
                  :disable-scale="row.disableScale === true"
                  @update="update(row.id, $event);"
                >
                  <div class="element" :style="getElementStyles(rows)">
                    {{ row.field }}
                  </div>
                </FreeTransform>
                </div>
              </div>
            </div>
          </div>
        </template>
      </vs-col>
    </vs-row>

    <vs-divider position="center">
        Add Fields    
    </vs-divider>

    <vs-row>
      <div>
          <vs-button color="primary"  type="border" class=" items-center btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-primary border border-solid border-primary" icon="add" @click="addRow"> Add Row</vs-button>
      </div>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">

          <vs-table class="table">
              <thead>
                  <vs-tr>
                      <vs-th><strong>ProductID</strong></vs-th>
                      <vs-th><strong>Row ID</strong></vs-th>
                      <vs-th><strong>Field Name</strong></vs-th>
                      <vs-th><strong>Field Type</strong></vs-th>
                      <vs-th><strong>Field Value</strong></vs-th>
                    <!--  <td><strong>X-Cordinate</strong></td>
                      <td><strong>Y-Cordinate</strong></td>
                      <td><strong>ScaleX</strong></td>
                      <td><strong>ScaleY</strong></td>-->
                      <vs-th><strong>Width</strong></vs-th>
                      <vs-th><strong>Height</strong></vs-th>
                      <!-- <td><strong>Angle</strong></td>-->
                  </vs-tr>
              </thead>
              <tbody>
                  <tr v-for="(row, index) in rows">

                      <vs-td><input type="text" v-model="row.prodID"></vs-td>
                      <vs-td><input type="text" v-model="row.id"></vs-td>
                      <vs-td><input type="text" v-model="row.name"></vs-td>

                      <vs-td>
                      <el-select v-model="row.fieldType" filterable placeholder="Select">
                        <el-option
                          v-for="item in fields"
                          :key="item.id"
                          :label="item.label"
                          :value="item.type">
                        </el-option>
                      </el-select>
                      </vs-td>

                      <vs-td>
                      <input v-if="row.fieldType" 
                      :type="row.fieldType" :name="name" 
                      :placeholder="label" 
                      v-model="row.field"
                      :key="`field-${label}`" >
                      </vs-td>


                    <!-- <vs-td><input type="text" v-model="row.x"></vs-td>
                      <vs-td><input type="text" v-model="row.y"></vs-td>
                      <vs-td><input type="text" v-model="row.scaleX"></vs-td>
                      <vs-td><input type="text" v-model="row.scaleY"></vs-td>-->
                      <vs-td><input type="text" v-model="row.width"></vs-td>
                      <vs-td><input type="text" v-model="row.height"></vs-td>
                    <!--  <vs-td><input type="text" v-model="row.angle"></vs-td>-->
                      
      
                      <vs-td>
                          <a color="primary" vs-align="center" type="border" class=" items-center btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-primary border border-solid border-primary" v-on:click="removeElement(index);" style="cursor: pointer">Remove</a>
                      </vs-td>


                  </tr>
              </tbody>
          </vs-table>

      </vs-col>
    </vs-row>
  </div>
</template>

<script>

import axios from 'axios'
import Prism from 'vue-prism-component'
import FreeTransform from "vue-free-transform";

export default{

    components: {
    FreeTransform
  },

    data() {
        return {
          rows: [],


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

        ]


        };
        
    },
  mounted() {
    this.offsetX = this.$refs.workspace.offsetLeft;
    this.offsetY = this.$refs.workspace.offsetTop;
  },

    methods:{

    update(id, payload) {
      this.rows = this.rows.map(item => {
        if (item.id === id) {
          return {
            ...item,
            ...payload
          };
        }
        return item;
      });
    },

    getElementStyles(row) {
      const styles = row.styles ? row.styles : {};
      return {
        width: `${row.width}px`,
        height: `${row.height}px`,
        ...styles
      };
    },

        addRow() {
            var elem = document.createElement('tr');
            this.rows.push({
                id: "", //!model id
                prodID:"", // user this. param
                Name: "",
                fieldType:"",
                field:" ",
                x: 225,
                y: 225,
                scaleX: 1,
                scaleY: 1,
                width: 80,
                height: 50,
                angle: 0,


            });
            offsetX: 0;
            offsetY: 0;
        },
        removeElement(index) {
            this.rows.splice(index, 1);
        },

        setFilename(event, row) {
            var file = event.target.files[0];
            row.file = file
        }
    },

}

</script>



<style lang="scss">

    .fileContainer {
        overflow: hidden;
        position: relative;
    }
    
    .fileContainer [type=file] {
        cursor: inherit;
        display: block;
        font-size: 999px;
        filter: alpha(opacity=0);
        min-height: 21px;
        min-width: 100%;
        opacity: 0;
        position: absolute;
        right: 0;
        text-align: right;
        top: 0;
    }
    
    .fileContainer {
        background: #E3E3E3;
        float: left;
        padding: .5em;
        height: 21px;
    }
    
    .fileContainer [type=file] {
        cursor: pointer;
    }

    #app {
 
  background: #f8fafc;
}

.wrapper {
  flex: 1;
}

.workspace {
  width: 800px;
  height: 800px;
  margin: 25px auto;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #fff;
}

* {
  box-sizing: border-box;
}

.tr-transform__content {
  user-select: none;
}

.tr-transform__rotator {
  top: -45px;
  left: calc(50% - 7px);
}

.tr-transform__rotator,
.tr-transform__scale-point {
  background: #fff;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  position: absolute;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.tr-transform__rotator:hover,
.tr-transform__scale-point:hover {
  background: #f1f5f8;
}

.tr-transform__rotator:active,
.tr-transform__scale-point:active {
  background: #dae1e7;
}

.tr-transform__scale-point {
}

.tr-transform__scale-point--tl {
  top: -7px;
  left: -7px;
}

.tr-transform__scale-point--ml {
  top: calc(50% - 7px);
  left: -7px;
}

.tr-transform__scale-point--tr {
  left: calc(100% - 7px);
  top: -7px;
}

.tr-transform__scale-point--tm {
  left: calc(50% - 7px);
  top: -7px;
}

.tr-transform__scale-point--mr {
  left: calc(100% - 7px);
  top: calc(50% - 7px);
}

.tr-transform__scale-point--bl {
  left: -7px;
  top: calc(100% - 7px);
}

.tr-transform__scale-point--bm {
  left: calc(50% - 7px);
  top: calc(100% - 7px);
}

.tr-transform__scale-point--br {
  left: calc(100% - 7px);
  top: calc(100% - 7px);
}

#data-list-list-view {
  .vs-con-table {

    /*
      Below media-queries is fix for responsiveness of action buttons
      Note: If you change action buttons or layout of this page, Please remove below style
    */
    @media (max-width: 689px) {
      .vs-table--search {
        margin-left: 0;
        max-width: unset;
        width: 100%;

        .vs-table--search-input {
          width: 100%;
        }
      }
    }

    @media (max-width: 461px) {
      .items-per-page-handler {
        display: none;
      }
    }

    @media (max-width: 341px) {
      .data-list-btn-container {
        width: 100%;

        .dd-actions,
        .btn-add-new {
          width: 100%;
          margin-right: 0 !important;
        }
      }
    }

    .product-name {
      max-width: 23rem;
    }

    .vs-table--header {
      display: flex;
      flex-wrap: wrap;
      margin-left: 1.5rem;
      margin-right: 1.5rem;
      > span {
        display: flex;
        flex-grow: 1;
      }

      .vs-table--search{
        padding-top: 0;

        .vs-table--search-input {
          padding: 0.9rem 2.5rem;
          font-size: 1rem;

          &+i {
            left: 1rem;
          }

          &:focus+i {
            left: 1rem;
          }
        }
      }
    }

    .vs-table {
      border-collapse: separate;
      border-spacing: 0 1.3rem;
      padding: 0 1rem;

      tr{
          box-shadow: 0 4px 20px 0 rgba(0,0,0,.05);
          td{
            padding: 20px;
            &:first-child{
              border-top-left-radius: .5rem;
              border-bottom-left-radius: .5rem;
            }
            &:last-child{
              border-top-right-radius: .5rem;
              border-bottom-right-radius: .5rem;
            }
          }
          td.td-check{
            padding: 20px !important;
          }
      }
    }

    .vs-table--thead{
      th {
        padding-top: 0;
        padding-bottom: 0;

        .vs-table-text{
          text-transform: uppercase;
          font-weight: 600;
        }
      }
      th.td-check{
        padding: 0 15px !important;
      }
      tr{
        background: none;
        box-shadow: none;
      }
    }

    .vs-table--pagination {
      justify-content: center;
    }
  }
}



</style>


