<template>
    <section>
        <div>
            <img src="../../assets/logo.png" alt="unaviable">
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
    height: 100px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 3px solid rgb(241, 241, 241);
    margin-bottom: 30px;
}
div {
    height: 100%;
    width: 80%;
    max-width: 1400px;
    display: flex;
    flex-direction: row;
    align-items: center;
}
img {
    height: 30%;
}
</style>
