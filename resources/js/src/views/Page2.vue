<template>
   <div>
      
         <div id="capture" class='m1 '>
            // more markup...
         </div>
      
      <button v-on:click="downloadVisualReport()">test</button>
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

    },

    methods: {

      downloadVisualReport () {
        html2canvas(document.querySelector("#capture")).then(canvas => {
        //document.body.appendChild(canvas)
        var image = canvas.toDataURL("image/png").replace("image/png","image/octet-stream");
        console.log(image)
        window.location.href =image;
        });

    }
}


    
}

</script>