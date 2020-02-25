<template>
  <div id="app">
  <h2>Todos:</h2>
  <button @click="downloadVisualReport">
    Download
  </button>
  <ol ref="capture">
    <li v-for="todo in todos">
      <label>
        <input type="checkbox"
          v-on:change="toggle(todo)"
          v-bind:checked="todo.done">

        <del v-if="todo.done">
          {{ todo.text }}
        </del>
        <span v-else>
          {{ todo.text }}
        </span>
      </label>
    </li>
  </ol>
</div>
</template>

<script>

import axios from 'axios'
import Prism from 'vue-prism-component'
import html2canvas from 'html2canvas'
import html2canvas2 from 'vue-html2canvas'

export default {

    components: {
        Prism,
        html2canvas,
        html2canvas2
    },
      
    data() {
        return {
          todos: [
            { text: "Learn JavaScript", done: false },
            { text: "Learn Vue", done: false },
            { text: "Play around in JSFiddle", done: true },
            { text: "Build something awesome", done: true }
          ]
          
        };
    },

    created(){
      this.downloadVisualReport();
    },

    methods: {
      toggle: function(todo){
        todo.done = !todo.done
      },
      showCaptureRef() {
          console.log("this.$refs.capture: " + this.$refs.capture);
          let vc = this;
          return vc.$refs.capture;
      },
      downloadVisualReport () {
          let vc = this
          // alert("Descargando reporte visual")
          console.log('campaign-view#downloadVisualReport');
          window.html2canvas(vc.showCaptureRef()).then(canvas => {
              document.body.appendChild(canvas)
          }).catch((error) => {
            console.log("Erorr descargando reporte visual", error)
        });
    }
}


    
}

</script>