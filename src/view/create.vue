<template>
  <div>
    <create-form></create-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CreateForm from '../components/CreateForm.vue';

export default defineComponent({
  name: 'create',
  components: {
    CreateForm,
  },
});
</script>

<style scoped></style>
