import './Header.css'

export default function Header() {
    return (
		<div className="navbar-wrapper">
			<div className="navbar-left-menu">
				<button type="button" className="hide-sidebar-button header-button">
					<i className="fa-solid fa-bars"></i>
				</button>
				<div className="navbar-logo-wrapper">
					<img className="navbar-logo" src="/Images/Google-Calendar-Logo.png" alt="logo" />
					<div className="calendar-heading">Calendar</div>
				</div>
				<button type="button" className="today-button header-button" >
					Today
				</button>
				<button
					className="left-arrow arrow-button header-button"
					type="button"
					
				>
					<i className="fa-solid fa-chevron-left"></i>
				</button>
				<button
					className="right-arrow arrow-button header-button"
					type="button"
					
				>
					<i className="fa-solid fa-chevron-right"></i>
				</button>
				<div className="current-month">
					
				</div>
			</div>
		</div>
	);
}