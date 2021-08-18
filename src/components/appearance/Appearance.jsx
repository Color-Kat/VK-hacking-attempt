import React from "react";

// import "./dialogItem.scss";

export default class ScrollAppearance extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			iaActive: false
		};
	}

	toggleActiveClass = () => {};

	componentDidMount () {
		document.addEventListener("scroll", this.toggleActiveClass);
	}

	componentWillUnmount () {
		document.removeEventListener("scroll", this.toggleActiveClass);
	}

	addAnimClass = child => {
		const className = classNames(child.props.className, "anim-slide");

		const props = {
			className
		};

		return React.cloneElement(child, props);
	};

	render () {
		return (
			<React.Fragment>
				{/* iterate all children and add class 'anim-slide' */}
				{React.Children.map(this.props.children, child =>
					React.cloneElement(child, {
						className: `${child.props.className} ${"anim-slide"} ${this.state.isActive
							? "_active"
							: null}`
					})
				)}
			</React.Fragment>
		);
	}
}
