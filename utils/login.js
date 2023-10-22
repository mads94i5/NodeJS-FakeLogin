// THIS IS NOT A GOOD WAY OF HANDLING USER CREDENTIALS, NOT ACCEPTABLE FOR PRODUCTION, ONLY FOR MOCKUP/TESTING
import nodemailer from "nodemailer";

const users = [
    {
        username: "user",
        email: "user@mail.com",
        password: "password"
    },
    {
        username: "admin",
        email: "admin@mail.com",
        password: "adminpassword"
    }
];

let loggedInUser;

// ENVIRONMENT VARIABLES SHOULD BE USED HERE TO HIDE CREDENTIALS IN THE CODE
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: "nash.bednar@ethereal.email",
        pass: "SeDv3XmwhrDKeMJ1Pr"
    },
    secure: false,
    tls: {
        rejectUnauthorized: false
    }
});

export function login(username, password) {
    for (const user of users) {
        if (user.username === username && user.password === password) {
            loggedInUser = username;
            return username;
        }
    }
    return undefined;
}

export function logout() {
    if (loggedInUser) {
        loggedInUser = undefined;
    }
}

export function getLoggedInUser() {
    return loggedInUser;
}



export async function register(username, email, password) {
    for (const user of users) {
        if (user.username === username || user.email === email) {
            return undefined;
        }
    }
    users.push({
        username: username,
        email: email,
        password: password
    });
    await sendEmail(email);
    return username;
}

async function sendEmail(email) {
    return await transporter.sendMail({
        from: '"Nash Bednar" <nash.bednar@ethereal.email>',
        to: email,
        subject: "Registered user",
        text: "You have successfully registered a user with the login mockup website.",
        html: "<b>You have successfully registered a user with the login mockup website.</b>",
    });
}