import React from 'react';
import mirror, { actions, connect, render } from 'mirrorx';
import 'whatwg-fetch';

mirror.model({
    name: 'app',
    initialState: 0,
    reducers: {
        plus(state, data) {
            return state + data;
        },
        reduce(state, data) {
            return state - data;
        }
    },
    effects: {
        async incrementAsync() {
            await fetch('./src/image/async.png').then(response => {
                let img = document.getElementById('img');
                if (img.src.indexOf('png') !== -1) {
                    return '';
                }
                img.src = response.url;
            });
        }
    }
});

const App = connect(state => {
    return { count: state.app }
})(props => {
    return (<section>
        <h1>{props.count}</h1>
        <button onClick={() => actions.app.reduce(3)}>-3</button>
        <button onClick={() => actions.app.plus(2)}>+2</button>
        <button onClick={() => actions.app.incrementAsync()}>+ Async</button>
        <img id="img" src=""/>
    </section>)
})

render(<App/>, document.getElementById('root'))