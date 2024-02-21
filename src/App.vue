<template>
    <the-header></the-header>
    <div class="main">
        <section class="sections">
            <h2>Users</h2>
            <search-section @submit-name="GettingData"></search-section>
            <base-card 
            v-if="user" 
            :name="name"
            :id="id"
            :public_repos="public_repos"
            :create_at="create_at"
            :avatar_url="avatar_url">
            </base-card>
        </section>
    </div>

</template>

<script>
import TheHeader from './components/UI/TheHeader.vue'
import SearchSection from './components/UI/SearchSection.vue'

export default {
    components: {
        TheHeader,
        SearchSection
    },
    data() {
        return {
            'apiUrl': 'https://api.github.com/users/',
            'name': '',
            'id': '',
            'public_repos': '',
            'create_at': '',
            'avatar_url': '',
            'user': false
        }
    },
    methods: {
        GettingData() {
            fetch(this.apiUrl + this.name)
            .then (response => {
                if (!response.ok) {
                    this.user = false;
                }
                return response.json();
            })
            .then(data => {
                this.user = true;
                this.name = data.name;
                this.id = data.id;
                this.public_repos = data.public_repos;
                this.create_at = data.created_at;
                this.avatar_url = data.avatar_url;
            });
        }
    }
}
</script>
<style>
* {
    box-sizing: border-box;
}

h2 {
    font-family: Helvetica, sans-serif;
    font-weight: 700;
    font-size: 40px;
    margin-bottom: 30px;
}

body {
    margin: 0;
}

.main {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.sections {
    width: 60%;
}

</style>
