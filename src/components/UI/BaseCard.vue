<template>
    <section>
        <div class="profile">
            <img :src="avatar_url" alt="unaviable">
        </div>
        <div class="informations">
            <h3>Name: {{ name }}</h3>
            <h3>id: {{ id }}</h3>
            <h3>Public repos: {{ public_repos }}</h3>
            <h3>Created at: {{ create_at }}</h3>
        </div>
    </section>
</template>

<script>
    export default {
        props: [
            'name',
            'id',
            'public_repos',
            'create_at',
            'avatar_url'
        ]
    }
</script>

<style scoped>
section {
    width: 100%;
    height: 350px;
    border-radius: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, .1);
    margin-bottom: 100px;
    display: flex;
}

.profile {
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h3 {
    font-family: Helvetica, sans-serif;
    font-weight: 500;
    font-size: 23px;
    margin: 3px;
    color: rgb(167, 167, 167);
}

.informations {
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

img {
    height: 170px;
    width: 170px;
    border-radius: 20px;
}
</style>
