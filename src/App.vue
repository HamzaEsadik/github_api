<template>
    <the-header></the-header>
    <div class="main">
        <section class="sections">
            <h2>Users</h2>
            <search-section></search-section>
            <base-card></base-card>
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

h3 {
    font-family: Helvetica, sans-serif;
    font-weight: 500;
    font-size: 20px;
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
