<script>
import { computed, onMounted } from 'vue'
import titles from '../views/post-data.json'
export default({
    props: {
        query: String
    },
    setup(props) {
        onMounted(() => {
            console.log('mounted')
        })
        const filteredTitles = computed(()=>{
            return titles.filter(s => s.Name.toLowerCase().includes(props.query.toLowerCase()))
        })
        return {
            filteredTitles
        }
    }
})
</script>
<template>
    <div>
        <p>Showing {{ filteredTitles.length }} results for {{ query }}</p>
        <ul>
            <li v-for="title in filteredTitles" :key="title.Page">
                {{ title.Name }} : {{ title.Page }}
            </li>
        </ul>
    </div>
</template>
<style>

</style>
