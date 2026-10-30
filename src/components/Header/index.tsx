"use client";

import styles from "./styles.module.scss";

export default function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <Image src="/logo.png" alt="Logo" fill />
            </nav>
        </header>
    );
}