Vue.component('search', {
    data() {
        return {
        };
    },

    mounted() {
        console.log('search');
    },

    template: `
    <form action="#" class="search-form" @submit.prevent="filter">
    <input type="text" class="search-field" v-model="userSearch">
    <button class="btn-search" @click="$emit(filter)" type="submit">
    <i class="fas fa-search"></i>
    </button>
    </form>`

});
