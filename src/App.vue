<template>
    <the-header></the-header>
    <div class="main">
        <section class="sections">
            <h2>Users</h2>
            <search-section @submit-name="GettingData"></search-section>
            <h4 v-if="valid">Invalide Username</h4>
            <div class="btn-section">
                <button :class="profile_active" @click="profile">Profile</button>
                <button :class="repos_active" @click="repos">Reposetories</button>
            </div>
            <base-card 
            v-if="user & active_component === 'base-card'"
            :name="name"
            :id="id"
            :public_repos="public_repos"
            :create_at="create_at"
            :avatar_url="avatar_url">
            </base-card>
            <repos-card
            v-if="user & active_component === 'repos_card'" 
            :repos_data="repos_data">
            </repos-card>
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
            'user': false,
            'valid': false,
            'profile_active': 'btn-active',
            'repos_active': 'btn',
            'repos_data': null,
            'active_component': 'base-card'
        }
    },
    methods: {
        GettingData(saved_input) {
            fetch(this.apiUrl + saved_input)
            .then (response => {
                if (!response.ok) {
                    this.user = false;
                    this.valid = true;
                }
                else {
                    this.user = true;
                    this.valid = false;
                }
                return response.json();
            })
            .then(data => {
                this.name = data.name;
                this.id = data.id;
                this.public_repos = data.public_repos;
                this.create_at = data.created_at;
                this.avatar_url = data.avatar_url;
            });
            fetch(this.apiUrl + saved_input + '/repos')
            .then (response => {
                if (!response.ok) {
                    this.user = false;
                    this.valid = true;
                }
                else {
                    this.user = true;
                    this.valid = false;
                }
                return response.json();
            })
            .then(data => {
                this.repos_data = data;
            });
        },
        profile () {
            this.profile_active = 'btn-active';
            this.repos_active = 'btn';
            this.active_component = 'base-card';
        },
        repos () {
            this.profile_active = 'btn';
            this.repos_active = 'btn-active';
            this.active_component = 'repos_card';
        }
    }
}
</script>
<style>
* {
    box-sizing: border-box;
}

.btn {
    height: 40px;
    padding: 0 40px;
    background-color: rgb(207, 207, 207);
    color: white;
    border-radius: 10px;
    border: none;
    font-family: Helvetica, sans-serif;
    font-weight: 500;
    font-size: 19px;
    cursor: pointer;
}

.btn-active {
    height: 40px;
    padding: 0 40px;
    background-color: rgb(0, 96, 251);
    color: white;
    border-radius: 10px;
    border: none;
    font-family: Helvetica, sans-serif;
    font-weight: 500;
    font-size: 19px;
    cursor: pointer;
}

.btn-section {
    display: flex;
    column-gap: 20px;
    margin-bottom: 50px;
}

h2 {
    font-family: Helvetica, sans-serif;
    font-weight: 700;
    font-size: 40px;
    margin-bottom: 30px;
}

h4 {
    font-family: Helvetica, sans-serif;
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 30px;
    color: red;
    text-align: center;
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
