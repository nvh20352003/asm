import { getContact } from "../api/contact";
import { useEffect, useState } from "../lib";
const ContacMe = () => {
    const [contact, setContac] = useState({});

    useEffect(() => {
        getContact().then((contact) => setContac(contact));
    }, []);
    return `
    <div class="text-center">
    <h1 class="text-white  text-4xl mt-12">Contact me</h1>
    <div class="text-green-400 mb-12">If you've seen my potential or want to talk to me, don't hesitate to send
        me a message.</div>
    <div class="flex flex-col md:flex-row justify-center items-center">
        <button
            class="bg-green-500 rounded-xl w-[30%] h-20 m-2 flex flex-col md:flex-row justify-center items-center hover:bg-green-800 gap-2">
            <svg
                xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <a class="no-underline text-[20px] text-black" href="mailto:${contact.email}">${contact.email}</a>
            </button>
        <button
            class="bg-green-500 rounded-xl w-[30%] h-20 m-2  flex flex-col gap-2 md:flex-row justify-center items-center hover:bg-green-800"><svg
                xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg><a class="no-underline text-[20px] text-black" href="tel:${contact.phone}">(+84)${contact.phone}</a></button>
    </div>
</div>
<div class="text-center mt-32">
    <h2 class="text-white text-xl">Get in touch using the form below</h2>
    <form action="" class="flex flex-col justify-center items-center">
        <input class="text-white bg-black rounded-xl border-white border px-4 py-1 w-80 md:w-96" type="text"
            placeholder="Email">
        <textarea class="px-4 bg-black text-white border-white border my-5 w-80 md:w-96 rounded-xl" name=""
            id="" cols="30" rows="10">Leave your message</textarea>
    </form>
    <button class="text-white px-12 py-2 rounded-3xl bg-green-500 my-9 text-base hover:bg-green-800">TO
        SEND</button>
</div>
    `;
};
export default ContacMe;

