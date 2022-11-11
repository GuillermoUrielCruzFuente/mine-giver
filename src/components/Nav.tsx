import Link from "next/link";
import styles from "@/styles/components/Nav.module.scss";
import { useRouter } from "next/router";

const Nav = () => {
	const { pathname } = useRouter();

	const getActiveStyles = (route: string) =>
		pathname === route ? styles.active : styles.noActive;

	return (
		<nav className={styles.nav}>
			<Link className={styles.home} href="/">
				MineGiver
			</Link>

			<div className={styles.links}>
				<Link href="/players" className={getActiveStyles("/players")}>
					players
				</Link>

				<Link href="/commands" className={getActiveStyles("/commands")}>
					commands
				</Link>
			</div>
		</nav>
	);
};

export default Nav;
