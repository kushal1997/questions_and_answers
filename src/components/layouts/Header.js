
import { Sidebar } from "./Sidebar";
import "./header.css"
export const Header = () => {

    return (
        <header>
            <Sidebar />

            <div className="container">
                <h2>Interview Question & Answers</h2>
            </div>
        </header>
    )
}
