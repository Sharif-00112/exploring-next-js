import React from 'react';

const index = ({users}) => {
    return (
        <div>
            <h2>Available users: {users.length}</h2>
            <br />
            {
                users.map(user => {
                    <h3>s</h3>
                })
            }
        </div>
    );
};

export default index;

//load data
export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json();
    return{
        props: {users}
    }
}