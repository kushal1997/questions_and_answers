
import { Sidebar } from "./Sidebar";
import "./header.css"
export const Header = () => {

    return (
        <>
            <Sidebar />

            <div className="container">
                <svg viewBox="0 0 800 200">
                    <symbol id="s-text">
                        <text textAnchor="middle" x="50%" y="80%" >
                            INTERVIEW
                        </text>
                    </symbol>
                    <g className="g-ants">
                        <use xlinkHref="#s-text" className="text-copy" />
                        <use xlinkHref="#s-text" className="text-copy" />
                        <use xlinkHref="#s-text" className="text-copy" />
                        <use xlinkHref="#s-text" className="text-copy" />
                        <use xlinkHref="#s-text" className="text-copy" />
                    </g>
                </svg>

                
            </div>

        </>
    )
}
