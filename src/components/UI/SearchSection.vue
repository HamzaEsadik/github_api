<template>
    <section>
        <input type="text" placeholder="Search User">
        <button>Submit</button>
    </section>
</template>

<script>
    export default {
    }
</script>

<style scoped>

section {
    margin-bottom: 100px;
    padding: 0;
    height: 60px;
}

input {
    height: 100%;
    width: 70%;
    margin-right: 5%;
    background-color: rgb(225, 225, 225);
    border-radius: 10px;
    border: none;
    font-family: Helvetica, sans-serif;
    font-weight: 500;
    font-size: 19px;
    padding: 8px 20px;
}

input:focus {
    outline: none;
}

button {
    height: 100%;
    width: 25%;
    background-color: rgb(0, 96, 251);
    color: white;
    border-radius: 10px;
    border: none;
    font-family: Helvetica, sans-serif;
    font-weight: 500;
    font-size: 19px;
}

button:hover {
    cursor: pointer;
}

button:active {
    scale: 0.95;
}
</style>
