// app/server/page.tsx

export default function Server() {
    console.log('Server page rendering: this should only be printed on the server');
    return (
        <div>
            <h1>Server Page</h1>
            <p>My secret key: {process.env.MY_SECRET_ENV}</p>
        </div>
    );
}
