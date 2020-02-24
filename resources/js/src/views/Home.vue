<template>
  <div id="app">


    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <template>
    
      <div class="App">
        <div class="wrapper">
          <div class="workspace" ref="workspace">
            <FreeTransform
              v-for="element in elements"
              :key="element.id"
              :x="Number(element.x_coordinate)"
              :y="Number(element.y_coordinate)"
              :scale-x="Number(element.scaleX)"
              :scale-y="Number(element.scaleY)"
              :width="Number(element.width)"
              :height="Number(element.height)"
              :angle="Number(element.angle)"
              :offset-x="offsetX"
              :offset-y="offsetY"
              

              :disable-scale="element.disableScale === true"
              v-on:click="update(element.id, $event);"
            >
              <div class="element" :style="getElementStyles(element)">
                {{ element.id }}
              </div>
            </FreeTransform>
          </div>
        </div>
      </div>

        </template>
      </vs-col>
    </vs-row>


  </div>
</template>

<script>
import axios from 'axios'
import Prism from 'vue-prism-component'
import FreeTransform from "vue-free-transform";

export default {
  name: "app",
  components: {
    FreeTransform
  },
  data() {
    return {
      elements: [],
      offsetX: 0,
      offsetY: 0
    };
  },
  mounted() {
    this.offsetX = this.$refs.workspace.offsetLeft;
    this.offsetY = this.$refs.workspace.offsetTop;
   //this.relements.push(this.relement);
  },

  created(){
   this.element();
   // this.getallImgCord();
    //this.updateImgCord();
    //this.getSingleImgCord();
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

    update(id, payload) {
      this.elements = this.elements.map(item => {
        if (item.id === id) {
          return {
            ...item,
            ...payload
          };
        }
        return item;
      });
    },
    getElementStyles(element) {
      const styles = element.styles ? element.styles : {};
      return {
        width: `${element.width}px`,
        height: `${element.height}px`,
        ...styles
      };
    }
  }
};
</script>

<style>
#app {
  display: flex;
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
</style>
