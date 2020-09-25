<template>
<div id="app">
    <router-view />
</div>
</template>

<script lang="ts">
import {
    Component,
    Vue,
    Watch,
} from 'vue-property-decorator';
import {
    Tabbar,
    TabbarItem,
} from 'vant';
console.log('TabbarItem: ', TabbarItem);
@Component({
    components: {
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem,
    },
})
export default class App extends Vue {
    private mounted() {

    }
}
</script>

<style lang="scss" scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100%;
    font-size: 0.36rem;
}
</style>
