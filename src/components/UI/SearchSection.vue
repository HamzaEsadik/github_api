<template>
    <section>
        <input type="text" placeholder="Search User" v-model="user_input">
        <button @click="submitButton">Submit</button>
    </section>
</template>

<script>
    export default {
        date() {
            return {
                'user_input': ''
            }
        },
        methods: {
            submitButton() {
                this.$emit('submit-name', this.user_input);
            }
        }
    }
</script>

<style scoped>

section {
    margin-bottom: 50px;
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
    padding: 8px 20px 8px 70px;
    background-image: url('../../assets/search.png');
    background-position: 25px 17px;
    background-repeat: no-repeat;
    background-size: 25px;
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
