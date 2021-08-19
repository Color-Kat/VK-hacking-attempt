import React from "react";
import reactSimpleCodeEditor from "react-simple-code-editor";

// import "./dialogItem.scss";

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

		let elemHeight = elem.offsetHeight;
		let elemOffset = offset(elem).top;
		let animStart = 4;

		let elemPoint = window.innerHeight - elemHeight / animStart;

		if (elemHeight > window.innerHeight)
			elemPoint = window.innerHeight - window.innerHeight / animStart;

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
							// Keep your own reference
							// console.log(node ? node.getBoundingClientReact() : null);
							this.element = el;
							// // Call the original ref, if any
							// const { ref } = child;
							// if (typeof ref === "function") {
							// 	ref(node);
							// }
						}
					});

					return this.element;
				})}
			</React.Fragment>
		);
	}
}
