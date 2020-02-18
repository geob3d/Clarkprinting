<template>
    <div class="row">
        <div class="col-xs-12">
            <el-upload
                    drag
                    class="upload-demo"
                    action="uploadurl"
                    :file-list="files"
                    :show-file-list="false"
                    :multiple="true"
                    :http-request="uploadFile"
                    :loading="fileIsUploading"
                    style="display: inline-block; margin-right: 10px;">
                    <i class="el-icon-upload" v-show="!fileIsUploading"></i>
                    <i class="el-icon-loading" v-show="fileIsUploading" style="font-size: 67px;color: #c0c4cc;margin: 40px 0 16px;line-height: 50px;"></i>
                    <div class="el-upload__text" v-show="!fileIsUploading">Sleep je bestanden hier of <em>klik om ze te uploaden</em></div>
                </el-upload>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
		props: ['uploadurl'],

		//props:{
		//	uploadurl:'api/files/upload'


		//},
        data() {
            return {
                files: [],
				fileIsUploading: false,
				
            }
        },
        mounted() {
        },
        methods: {
            uploadFile(event) {
                this.fileIsUploading = true;
                this.tableIsUploading = true;
				//let uploadurl = 'api/files/upload'
                const data = new FormData();
                data.append('file', event.file);
				axios.post('/api/files/upload', data)
                .then((response) => {
                    var responseData = response.data.data;
                    // send event back to parent file was uploaded and return file data
                    this.$emit('upload-success', {
                        'created_at': responseData.created_at,
                        'name': responseData.name,
                        'mime_type': responseData.mime_type,
                        'size': responseData.size
                    });
                    this.fileIsUploading = false;
                })
                .catch((error) => {
                    this.fileIsUploading = false;
                    this.tableIsUploading = false;

                    this.$notify.error({
                        title: 'Error',
                        message: error.response.data.errors.message,
                    });
                });
            }
        }
    }
</script>