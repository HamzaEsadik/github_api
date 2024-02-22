<template>
    <div>
        <section v-for="repo in repos_data" :key="repo.id">
        <h3 :title="repo.name">{{ repo.name }}</h3>
        <h2>{{ repo.created_at }}</h2>
    </section>
    </div>
</template>
<script>
export default {
    props: [
        'repos_data',
    ],
}
</script>
<style scoped>
div {
    margin-bottom: 100px;
}

section {
    width: 100%;
    height: 80px;
    border-radius: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, .1);
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    cursor: pointer;
}

section:active {
    scale: 0.99;
}

h3 {
    font-family: Helvetica, sans-serif;
    font-weight: 500;
    font-size: 23px;
    margin: 3px;
    color: rgb(3, 3, 3);
    max-width: 300px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

h2 {
    font-family: Helvetica, sans-serif;
    font-weight: 500;
    font-size: 23px;
    margin: 3px;
    color: rgb(167, 167, 167);
}
</style>