Vue.component('v-select', VueSelect.VueSelect);

const app = new Vue({
    el: '#app',
    data: () => ({
        signals: signals.map(signal => signal.id),
        selected: null,
        activeSignal: null,
    }),
    methods: {
        onSelectChange: function() {
            if (this.selected) {
                this.activeSignal = signals.filter(signal => signal.id === this.selected)[0];
            } else {
                this.activeSignal = null;
            }
            console.log(this.activeSignal)
        }
       
    }
});
