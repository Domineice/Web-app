
<script >
import {ref} from 'vue'
import SearchResult from '../components/SearchResult.vue'

export default({
    setup() {
        const query = ref('')
        const reset = (evt) => {
            query.value = ''
        }
        return  {
            query,
            reset
        }
    },
    components: {
        SearchResult
    }
})
</script>

<template>
  <h2>Search Article</h2>
  <div>
    <input type="text" placeholder="Filter Search" v-model="query">
  </div>
  <button @click='reset'>Reset</button><br><br>

  <SearchResult :query = 'query'/>


</template>

<style scoped>

</style>

