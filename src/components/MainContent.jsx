import React from 'react';
import './MainContent.css';

const MainContent = () => {
    return (
        <main className="main-content">
            <section className="about">
                <h2>Sobre Harry Potter</h2>
                <p>Harry Potter é uma série de sete romances de fantasia escrita pela autora britânica J. K. Rowling. A série narra as aventuras de um jovem chamado Harry James Potter, que descobre aos 11 anos de idade que é um bruxo ao ser convidado para estudar na Escola de Magia e Bruxaria de Hogwarts.</p>
            </section>
            <section className="characters">
                <h2>Personagens Principais</h2>
                <ul>
                    <li>Harry Potter</li>
                    <li>Hermione Granger</li>
                    <li>Ron Weasley</li>
                    <li>Alvo Dumbledore</li>
                    <li>Severo Snape</li>
                </ul>
            </section>
        </main>
    );
};

export default MainContent;