

Vue.component('number-counter', {
    template: `
    <div>
        <div class="counter">{{ count }}</div>
        <button @click="decrease">-</button>
        <button @click="increase">+</button>
    </div>
    `,
    data() {
        return {
            count: 5
        };
    },
    methods: {
        decrease() {
            this.count--;
        },
        increase() {
            this.count++;
        }
    }
});


