<template>
    <section>
        <div class="profile">
            <img src="https://avatars.githubusercontent.com/u/132409623?v=4" alt="unaviable">
        </div>
        <div class="informations">
            <h3>Name: hamza Esadik</h3>
            <h3>id: 4564534534</h3>
            <h3>Public repos: 12</h3>
            <h3>Created at: 27/03/2021</h3>
        </div>
    </section>
</template>

<script>
    export default {
    }
</script>

<style scoped>
section {
    width: 100%;
    height: 350px;
    border-radius: 20px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, .1);
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
