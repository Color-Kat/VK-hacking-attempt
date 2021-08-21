import React from "react";

export default class ScrollAppearance extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			isActive: false
		};
	}

	element = null;

	toggleActiveClass = () => {
		let elem = this.element;
		if (!elem) return;

		let elemHeight = elem.offsetHeight; // elem height
		let elemOffset = offset(elem).top; // elem offset top
		let animStart = 4; // part of the elem

		let elemPoint = window.innerHeight - elemHeight / animStart;

		if (elemHeight > window.innerHeight)
			elemPoint = window.innerHeight - window.innerHeight / animStart;

		// add _active class if elem is shown
		if (pageYOffset > elemOffset - elemPoint && pageYOffset < elemOffset + elemHeight) {
			this.setState({ isActive: true });
		} else {
			// this.setState({ isActive: false });
		}

		function offset (elem) {
			const rect = elem.getBoundingClientRect(),
				scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
				scrollTop = window.pageYOffset || document.documentElement.scrollTop;

			return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
		}
	};

	componentDidMount () {
		setTimeout(() => {
			this.toggleActiveClass();
		}, 300);
		document.addEventListener("scroll", this.toggleActiveClass);
	}

	componentWillUnmount () {
		document.removeEventListener("scroll", this.toggleActiveClass);
	}

	render () {
		return (
			<React.Fragment>
				{/* iterate all children and add class 'anim-slide' and toggle active class */}
				{React.Children.map(this.props.children, child => {
					this.element = React.cloneElement(child, {
						className: `${child.props.className} ${"anim"} ${this.state.isActive
							? "_active"
							: ""}`,
						ref: el => {
							// save this ref
							this.element = el;
						}
					});

					return this.element;
				})}
			</React.Fragment>
		);
	}
}
