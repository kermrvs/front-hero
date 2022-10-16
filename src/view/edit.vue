<template>
  <div>
    <edit-form :hero="currentHeroForEdit"></edit-form>
  </div>
</template>

<script lang="ts">
import EditForm from '../components/EditForm.vue';
import { mapState } from 'pinia';
import { HeroStore } from '../store';

export default {
  name: 'edit',
  components: {
    EditForm,
  },
  computed: {
    ...mapState(HeroStore, ['currentHeroForEdit']),
  },
};
</script>

<style scoped></style>
