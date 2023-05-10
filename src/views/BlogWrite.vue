<template>
   <form id="form" class="write-container" @submit.prevent="submit()">
      <div class="form-control">
         <label for="title">*제목</label>
         <input type="text" id="title" v-model="writeForm.title" />
      </div>
      <div class="form-control">
         <label for="contents">*내용</label>
         <textarea name="contents" id="contents" rows="10" v-model="writeForm.contents"></textarea>
      </div>

      <div class="btn-group">
         <button id="submit" type="button" @click="submit()">등록</button>
      </div>
   </form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
interface Write {
   title: string;
   contents: string;
}

const writeForm: Write = reactive({
   title: '',
   contents: ''
});

const submit = (): boolean => {
   if (writeForm.title.length > 10 || writeForm.contents.length > 100) {
      alert('제목은 10자 내용은 100자 이상 입력이 불가능합니다.');
      return false;
   } else if (!writeForm.title || !writeForm.contents) {
      alert('제목 또는 내용을 입력해주세요');
      return false;
   }

   registerApi();

   return true;
};

const registerApi = () => {};

defineExpose({
   submit,
   registerApi
});
</script>

<style scoped>
.write-container {
   margin-top: 20px;
}

.form-control {
   display: flex;
   flex-direction: column;
}

.form-control label {
   font-weight: 500;
   font-size: 20px;
   line-height: 2;
}

textarea {
   resize: none;
   height: 300px;
}

.btn-group {
   margin-top: 10px;
   display: flex;
   justify-content: flex-end;
}
</style>
