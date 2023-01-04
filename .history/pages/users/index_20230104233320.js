import React from 'react';
import Link from 'next/link'

const index = ({users}) => {
    return (
        <div>
            <h2>Total users: {users.length}</h2>
            <br />
            {
                users.map(user => <p key={user.id}>
                    {user.name} <Link href={`users/${id}`}> -Details</Link>
                    </p>)
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