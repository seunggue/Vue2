Vue.component('todo-card', {
    template: `
        <div>
            <h1>{{title}}</h1>
            <h2>{{content}}</h2>
        </div>
    `,
    data: function () {
        return {

        }
    },
    methods: {

    },
    props: {
        title: {
            //밑에 애들은 너무 과해~ 이렇게 까지 하면 힘들어
            //                    type: String,
            //                    required: true,
            //                  validator: function (input) {
            //                    if (input.length < 5) {
            //                      return false
            //                }
            //              return true
        }
    },
    content: String
})